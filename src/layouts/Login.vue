<script setup>
import axios from "axios";
import { reactive } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import AlertError from "@/components/alerts/AlertError.vue";

const router = useRouter();

const auth = reactive({
  loggedIn: localStorage.getItem("loggedIn"),
  token: localStorage.getItem("token"),
});

const data = {
  user: [],
  validation: [],
  loginFailed: null,
};

onMounted(() => {
  if (auth.loggedIn) {
    return router.push({ name: "dashboard" });
  }
});

const login = () => {
  if (data.user.email && data.user.password) {
    axios.get("http://localhost:8000/sanctum/csrf-cookie");
    axios
      .post("http://localhost:8000/api/login", {
        email: data.user.email,
        password: data.user.password,
      })
      .then((resp) => {
        //set localStorage
        localStorage.setItem("loggedIn", "true");

        //set localStorage Token
        localStorage.setItem("token", resp.data.token);

        //change state
        auth.loggedIn = true;

        //redirect dashboard
        return router.push({ name: "dashboard" });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!data.user.email) {
    data.validation.email = true;
  }
  if (!data.user.password) {
    data.validation.password = true;
  }
};
</script>

<template>
  <alert-error />
  <div class="flex flex-col h-screen justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-24 w-auto"
        src="/src/assets/poernama_icon.png"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-blue-600 hover:text-blue-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Doesn't have account ?
        <a
          href="#"
          class="font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >Sign Up</a
        >
      </p>
    </div>
  </div>
</template>

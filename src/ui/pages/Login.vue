<script setup>
import AlertError from "@/ui/components/alerts/AlertError.vue";

import { reactive, ref } from "vue";
import Loader from "@/ui/components/Loader.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

// store
const { LogIn } = useAuthStore();

// setup
const showError = ref(false);
const loading = ref(false);
const form = reactive({
  email: "",
  password: "",
});

const router = useRouter();

// methods
const submit = async () => {
  loading.value = true;

  try {
    await LogIn(form);
    router.push({ name: "dashboard" });
  } catch (err) {
    console.log(err);
    showError.value = true;
  }

  loading.value = false;
};
</script>

<template>
  <AlertError v-if="showError" />

  <Loader v-if="loading" />

  <div v-else class="flex flex-col h-screen justify-center px-6 py-12 lg:px-8">
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
      <form class="space-y-6" @submit.prevent="submit">
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
              v-model="form.email"
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
              v-model="form.password"
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

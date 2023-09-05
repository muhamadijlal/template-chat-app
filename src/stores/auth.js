import { defineStore } from "pinia";
import { fetchAxios, fetchLogin, fetchUser } from "@/data/api.js";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: JSON.parse(localStorage.getItem("authenticated")),
    loading: false,
    email: "",
    password: "",
    loginFailed: false,
    token: localStorage.getItem("token"),
    user: null,
  }),

  actions: {
    CLEAR() {
      (this.email = ""), (this.password = "");
    },
    SET_AUTHENTICATED(value) {
      localStorage.setItem("authenticated", value);
      this.authenticated = value;
    },
    SET_USER(value) {
      localStorage.setItem("user", value);
      this.user = value;
    },
    SET_TOKEN(value) {
      localStorage.setItem("token", JSON.stringify(value));
      this.token = value;
    },
    SET_LOGINFAILED() {
      this.loginFailed = true;
    },
    async login() {
      this.loading = true;

      await fetchAxios();

      await fetchLogin()
        .then((response) => {
          console.log(response);
          this.SET_AUTHENTICATED(true);
          this.SET_TOKEN(response.data.token);
          // this.SET_USER(response.data.user);
        })
        .catch((err) => {
          console.log(err);
          this.SET_LOGINFAILED();
        })
        .finally(() => {
          this.CLEAR();
          this.loading = false;
        });

      this.$router.push({ name: "dashboard" });
    },

    logout() {
      this.SET_AUTHENTICATED(false);
      this.SET_TOKEN("");
      // this.SET_USER = {};

      this.$router.push({ name: "login" });
    },

    getUser() {
      fetchUser()
        .then((response) => {
          console.log(response);
          this.SET_USER(response.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

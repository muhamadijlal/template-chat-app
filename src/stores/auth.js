import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    user: null,
  }),
  persist: true,
  actions: {
    async LogIn(user) {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      await axios
        .post("http://localhost:8000/api/login", user)
        .then(({ data }) => {
          axios
            .get("http://localhost:8000/api/user", {
              headers: {
                Authorization: `${data.token_type} ` + data.access_token,
              },
            })
            .then(({ data }) => {
              this.authenticated = true;
              this.user = data;
            });
        })
        .catch((err) => {
          console.log("'in auth.js' " + err);
        });
    },
  },
});

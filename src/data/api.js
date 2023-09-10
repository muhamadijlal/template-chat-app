import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

export function fetchAxios() {
  return axios.get("http://localhost:8000/sanctum/csrf-cookie");
}

export function fetchLogin() {
  const { form } = storeToRefs(useAuthStore());
  return axios.post("http://localhost:8000/api/login", {
    email: form.value.email,
    password: form.value.password,
  });
}

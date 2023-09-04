import axios from "axios";
import { useAuthStore } from "@/stores/auth";

export function fetchAxios() {
  return axios.get("http://localhost:8000/sanctum/csrf-cookie");
}

export function fetchLogin() {
  const state = useAuthStore();
  return axios.post("http://localhost:8000/api/login", {
    email: state.email,
    password: state.password,
  });
}

export function fetchUser() {
  const state = useAuthStore();
  return axios.get("http://localhost:8000/api/user", {
    Authorization: "Bearer " + state.token,
  });
}

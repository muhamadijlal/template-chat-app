import Login from "@/layouts/Login.vue";
import DashboardChat from "@/layouts/DashboardChat.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/dashboard",
    component: DashboardChat,
    name: "dashboard",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

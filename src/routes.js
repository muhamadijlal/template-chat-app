import Login from "@/ui/pages/Login.vue";
import DashboardChat from "@/ui/pages/DashboardChat.vue";
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const routes = [
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {
      middleware: "guest",
      title: "login",
    },
  },
  {
    path: "/dashboard",
    component: DashboardChat,
    name: "dashboard",
    meta: {
      middleware: "auth",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { authenticated } = storeToRefs(useAuthStore());
  if (to.meta.middleware == "guest") {
    !authenticated.value ? next() : next({ name: "dashboard" });
  }

  if (to.meta.middleware == "auth") {
    authenticated.value ? next() : next({ name: "login" });
  }
});

export default router;

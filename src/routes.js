import Login from "@/ui/pages/Login.vue";
import DashboardChat from "@/ui/pages/DashboardChat.vue";
import { createRouter, createWebHistory } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthStore } from "./stores/auth";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {
      guest: true,
    },
  },
  {
    path: "/dashboard",
    component: DashboardChat,
    name: "dashboard",
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { authenticated } = storeToRefs(useAuthStore());

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authenticated.value) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  const { authenticated } = storeToRefs(useAuthStore());
  if (to.matched.some((record) => record.meta.guest)) {
    if (authenticated.value) {
      next("/dashboard");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;

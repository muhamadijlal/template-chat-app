<script setup>
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";

const { IsAuthenticated } = useAuthStore();

computed(() => {
  IsLoggedIn: () => IsAuthenticated();
});
</script>

<template>
  <RouterView />
</template>

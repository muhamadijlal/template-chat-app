<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const loggedIn = ref(null);
const route = useRoute();

const getLoggedIn = () => {
  loggedIn.value = localStorage.getItem("loggedIn");
};

watch(
  route,
  () => {
    getLoggedIn();
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <RouterView />
</template>

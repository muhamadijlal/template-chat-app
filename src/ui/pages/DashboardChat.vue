<script setup>
import Header from "@/ui/pages/Header.vue";
import Sidebar from "@/ui/pages/Sidebar.vue";
import Conversation from "@/ui/pages/Conversation.vue";
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";

const { StateUser } = useAuthStore();

const user = computed(() => StateUser);
</script>

<template>
  <!-- <pre>
    {{ user }}
  </pre> -->
  <Header />

  <Sidebar />

  <Conversation />
</template>

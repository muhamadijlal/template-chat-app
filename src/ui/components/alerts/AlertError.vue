<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth.js";

const { loginFailed } = storeToRefs(useAuthStore());
</script>

<template>
  <div class="relative bg-blue-100 w-full h-auto grid place-items-center">
    <div
      class="px-5 py-3 bg-red-600 items-center text-white rounded-full flex top-8 absolute"
      role="alert"
    >
      <span class="font-semibold mr-2 text-left flex-auto"
        >Login failed, check your email and password.</span
      >
      <button class="outline-none" @click="loginFailed = false">
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          class="text-sm text-white hover:text-red-200"
        />
      </button>
    </div>
  </div>
</template>

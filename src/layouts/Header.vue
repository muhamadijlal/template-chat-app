<script setup>
import Avatar from "@/components/Avatar.vue";
import SlideOver from "@/layouts/SlideOver.vue";
import { ref } from "vue";

const isHidden = ref(true);

const toggleProfile = () => {
  return (isHidden.value = !isHidden.value);
};
</script>

<template>
  <div
    class="w-full flex items-center h-12 justify-between py-8 px-14 border-b border-slate-300 sticky top-0 bg-white z-50"
  >
    <div class="flex items-center gap-3">
      <img src="/src/assets/poernama_icon.png" alt="icon" class="h-10 w-10" />
      <h3 class="text-2xl font-bold text-slate-800">Poernama</h3>
    </div>
    <div class="flex items-center gap-1 hover:cursor-pointer">
      <button @click="toggleProfile()" class="outline-none">
        <Avatar :class="'rounded-full w-10'" />
      </button>
    </div>
  </div>

  <slide-over @clicked="toggleProfile()" :isHidden="isHidden" />
</template>

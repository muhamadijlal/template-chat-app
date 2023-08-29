<script setup>
import Avatar from "@/components/Avatar.vue";
</script>

<template>
  <div
    class="w-full flex items-center h-12 justify-between py-8 px-14 border-b border-slate-300 sticky top-0 bg-white z-50"
  >
    <div class="flex items-center gap-3">
      <font-awesome-icon
        :icon="['fas', 'moon']"
        class="text-2xl text-yellow-400"
      />
      <h3 class="text-2xl font-bold text-slate-800">Poernama</h3>
    </div>
    <div class="flex items-center gap-1 hover:cursor-pointer">
      <Avatar :class="'rounded-full w-10'" />
    </div>
  </div>
</template>

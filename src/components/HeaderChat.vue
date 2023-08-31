<script setup>
import Avatar from "@/components/Avatar.vue";
</script>

<template>
  <div
    class="bg-white border-b border-slate-300 backdrop-filter h-16 flex justify-between items-center px-10 py-9"
  >
    <div class="flex items-center gap-3">
      <Avatar class="rounded-full h-14 w-14" />
      <div class="w-4/5 h-full flex flex-col justify-center -space-y-1">
        <h4 class="text-lg font-semibold text-slate-800">
          Muhamad haidar ijlal
        </h4>
        <p class="truncate text-base text-slate-700">Online.</p>
      </div>
    </div>
    <button class="outline-none py-1 px-2 group" @click="$emit('closeChat')">
      <font-awesome-icon
        :icon="['fas', 'xmark']"
        class="text-slate-300 group-hover:text-slate-800 text-2xl"
      />
    </button>
  </div>
</template>

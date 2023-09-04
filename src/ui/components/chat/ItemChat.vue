<script setup>
import Avatar from "@/ui/components/Avatar.vue";
</script>

<template>
  <div class="w-full py-1 px-2 flex items-center gap-3 h-20 hover:bg-blue-100">
    <Avatar :class="'rounded-full w-12'" />

    <div class="w-4/5 h-full flex flex-col justify-center -space-y-1">
      <h4 class="text-lg font-semibold text-slate-800">Muhamad haidar ijlal</h4>
      <p class="truncate text-base text-slate-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab
        incidunt esse facilis, odit id.
      </p>
    </div>
  </div>
</template>

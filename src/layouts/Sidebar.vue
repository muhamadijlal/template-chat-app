<script setup>
import ItemChat from "@/components/ItemChat.vue";
import FilterChat from "@/components/FilterChat.vue";
</script>

<template>
  <aside
    class="w-96 h-full px-5 py-10 fixed border-r border-slate-300 bg-white z-50"
  >
    <filter-chat />

    <div class="my-5 space-y-2">
      <item-chat v-for="index in 4" :key="index" />
    </div>
  </aside>
</template>

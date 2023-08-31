<script setup>
import ItemChat from "@/components/chat/ItemChat.vue";
import FilterChat from "@/components/chat/FilterChat.vue";
</script>

<template>
  <aside
    class="w-96 h-full py-10 fixed border-r border-slate-300 bg-white z-50"
  >
    <filter-chat />

    <div class="my-5 space-y-2 overflow-y-auto sidebar-y">
      <item-chat v-for="index in 10" :key="index" />
    </div>
  </aside>
</template>

<style scoped>
.sidebar-y {
  height: calc(100% - 5rem);
}
</style>

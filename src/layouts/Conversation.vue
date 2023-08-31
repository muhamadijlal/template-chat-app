<script setup>
import DefaultConversation from "@/layouts/conversations/DefaultConversation.vue";
import ActiveConversation from "@/layouts/conversations/ActiveConversation.vue";
import { ref } from "vue";

const open = ref(true);

const closeChat = () => {
  open.value = !open.value;
};
</script>

<template>
  <default-conversation v-if="!open" />
  <active-conversation @closeChat="closeChat()" v-else></active-conversation>
</template>

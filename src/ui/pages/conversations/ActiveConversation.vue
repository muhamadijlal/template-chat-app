<script setup>
import LeftBubbleChat from "@/ui/components/chat/LeftBubbleChat.vue";
import RightBubbleChat from "@/ui/components/chat/RightBubbleChat.vue";
import InputChat from "@/ui/components/chat/InputChat.vue";
import HeaderChat from "@/ui/components/chat/HeaderChat.vue";

const emit = defineEmits(["closeChat"]);

const grandChildEvent = () => {
  emit("closeChat");
};
</script>
<template>
  <div class="h-full fixed conversation-x ml-96 bg-slate-300 z-10">
    <header-chat @closeChat="grandChildEvent()" />
    <div
      class="conversation-y bg-blue-50 space-y-1 px-28 pt-10 pb-52 overflow-y-auto"
    >
      <left-bubble-chat>hello world!</left-bubble-chat>
      <right-bubble-chat>hello world!</right-bubble-chat>
      <left-bubble-chat>hello world!</left-bubble-chat>
      <right-bubble-chat>hello world!</right-bubble-chat>
      <left-bubble-chat>hello world!</left-bubble-chat>
      <right-bubble-chat>hello world!</right-bubble-chat>
      <left-bubble-chat>hello world!</left-bubble-chat>
      <right-bubble-chat>hello world!</right-bubble-chat>
      <left-bubble-chat>hello world!</left-bubble-chat>
      <left-bubble-chat>hello world!</left-bubble-chat>
      <left-bubble-chat>hello world!</left-bubble-chat>
      <left-bubble-chat>hello world!</left-bubble-chat>
      <left-bubble-chat>hello world!</left-bubble-chat>
      <left-bubble-chat>hello world!</left-bubble-chat>
    </div>
  </div>
  <input-chat />
</template>

<style scooped>
.conversation-x {
  width: calc(100% - 384px);
}

.conversation-y {
  height: calc(100% - 48px);
}
</style>

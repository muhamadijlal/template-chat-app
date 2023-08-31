<template>
  <div
    class="grid place-content-center h-full fixed conversation-x place-items-center ml-96 space-y-2 bg-slate-50"
  >
    <font-awesome-icon
      :icon="['far', 'message']"
      class="text-9xl text-slate-300"
    />
    <p class="text-slate-300">There's no conversation yet</p>
  </div>
</template>

<style scooped>
.conversation-x {
  width: calc(100% - 384px);
}
</style>

<template>
  <div
    class="bg-white border-t border-slate-300 h-20 conversation-x z-10 bottom-0 left-96 absolute flex px-14 justify-center items-center gap-8"
  >
    <input
      placeholder="Type a message"
      class="border py-4 pl-5 w-full rounded-lg placeholder:text-slate-300 border-slate-300"
      autocomplete="false"
    />
    <button class="py-2 px-3 outline-none">
      <font-awesome-icon
        :icon="['fas', 'paper-plane']"
        class="text-slate-300 hover:text-blue-600 text-2xl"
      />
    </button>
  </div>
</template>

<style>
input[type="text"] {
  word-wrap: break-word;
  word-break: break-all;
  height: 48px;
}
</style>

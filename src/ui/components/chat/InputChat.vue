<template>
  <div
    class="bg-white border-t border-slate-300 py-4 conversation-x z-10 bottom-0 left-96 absolute flex px-14 justify-center items-center gap-8"
  >
    <div
      class="border py-3 pl-5 px-3 text-xl w-full max-h-40 rounded-xl border-slate-300 outline-none focus:ring-2 focus:ring-blue-600 overflow-y-auto break-words"
      contenteditable="true"
      data-text="Type a message"
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
div:empty:not(:focus):before {
  content: attr(data-text);
  color: #cbd5e1;
}
</style>

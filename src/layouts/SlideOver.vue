<script setup>
import Avatar from "@/components/Avatar.vue";
defineProps({
  isHidden: Boolean,
});
defineEmits(["clicked"]);
</script>

<template>
  <div
    class="slide-over-x h-full right-0 backdrop-blur-sm duration-500 ease-in-out bg-slate-800/50 fixed"
    :class="isHidden ? 'opacity-0 z-0' : 'opacity-100 z-40'"
  ></div>
  <aside
    class="bg-white fixed right-0 w-96 h-full p-8 duration-500 ease-in-out overflow-y-auto z-50"
    :class="isHidden ? 'translate-x-full' : 'translate-x-0'"
  >
    <div class="flex items-center justify-between">
      <h4 class="text-slate-800 font-bold text-2xl">Profile</h4>
      <button
        class="px-2 py-1 active:ring-2 rounded-md active:ring-blue-600 outline-none"
        @click="$emit('clicked')"
      >
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          class="text-2xl text-slate-300 hover:text-slate-800"
        />
      </button>
    </div>

    <Avatar :class="'rounded-full w-40 mt-10 mb-20 mx-auto'" />

    <div class="space-y-5 relative">
      <div>
        <label class="text-slate-600">Your Name</label>
        <h5 class="text-slate-800 font-bold text-xl">Muhamad Haidar Ijlal</h5>
      </div>
      <div>
        <label class="text-slate-600">Status</label>
        <h5 class="text-slate-800 font-bold text-xl">Busy</h5>
      </div>
      <button
        class="w-full bottom-0 py-2 outline-none rounded-lg border-2 border-dashed border-red-500 text-red-500 text-xl hover:bg-red-50 hover:border-solid"
      >
        Logout
        <font-awesome-icon
          :icon="['fas', 'right-from-bracket']"
          class="text-base"
        />
      </button>
    </div>
  </aside>
</template>

<style scoped>
.slide-over-x {
  width: calc(100% - 384px);
}
</style>

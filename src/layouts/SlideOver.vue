<script setup>
import Avatar from "@/components/Avatar.vue";
defineProps({
  isHidden: Boolean,
});
</script>

<template>
  <aside
    class="slide-over-shadow h-full right-0 backdrop-blur-sm bg-slate-800/50 overflow-y-auto fixed z-10"
    :class="{ hidden: isHidden }"
  >
    <div class="bg-white absolute right-0 w-96 h-full p-8">
      <div class="flex items-center justify-between">
        <h4 class="text-slate-800 font-bold text-2xl">Profile</h4>
        <button
          class="px-2 py-1 active:ring-2 rounded-md active:ring-blue-600"
          @click="$emit('clicked')"
        >
          <font-awesome-icon
            :icon="['fas', 'xmark']"
            class="text-2xl text-slate-300 hover:text-slate-800"
          />
        </button>
      </div>

      <Avatar :class="'rounded-full w-40 mt-10 mb-20 mx-auto'" />

      <div class="space-y-5">
        <div>
          <label class="text-slate-600">Your Name</label>
          <h5 class="text-slate-800 font-bold text-xl">Muhamad Haidar Ijlal</h5>
        </div>
        <div>
          <label class="text-slate-600">Status</label>
          <h5 class="text-slate-800 font-bold text-xl">Busy</h5>
        </div>
      </div>

      <button
        class="button-x m-auto absolute bottom-24 right-4 rounded-lg py-2 border border-red-500 text-red-500 text-xl hover:bg-red-50"
      >
        Logout
      </button>
    </div>
  </aside>
</template>

<style scoped>
.slide-over-shadow {
  width: calc(100% - 384px);
}
.button-x {
  width: calc(100% - 2rem);
}
</style>

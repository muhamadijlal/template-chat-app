<template>
  <aside
    class="slide-over-shadow h-full right-0 fixed border-r backdrop-blur-sm bg-slate-800/50 overflow-y-auto"
  >
    <div class="bg-white absolute right-0 w-96 h-full p-8">
      <div class="flex items-center justify-between">
        <h4 class="text-slate-800 font-bold text-2xl">Profile</h4>
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          class="text-2xl text-slate-300 hover:text-slate-800"
        />
      </div>

      <img
        src="https://ui-avatars.com/api/?background=random"
        alt="logo"
        class="rounded-full w-40 mt-10 mb-20 mx-auto"
      />

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
    </div>
  </aside>
</template>

<style scoped>
.slide-over-shadow {
  width: calc(100% - 384px);
}
</style>

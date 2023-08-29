<template>
  <div class="flex items-center gap-2 pr-5">
    <div class="flex justify-start items-center relative w-full">
      <font-awesome-icon
        :icon="['fas', 'magnifying-glass']"
        class="absolute left-5 text-slate-300"
      />
      <input
        placeholder="Search contact"
        class="border h-8 py-4 pl-12 w-full rounded-lg placeholder:text-slate-300 border-slate-300"
      />
    </div>
    <button
      class="border border-slate-300 rounded-lg py-1 px-2 hover:ring-2 hover:ring-blue-600 group outline-none"
    >
      <font-awesome-icon
        :icon="['fas', 'filter']"
        class="text-slate-300 group-hover:text-blue-600"
      />
    </button>
  </div>
</template>

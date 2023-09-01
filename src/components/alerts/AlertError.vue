<template>
  <div class="relative bg-blue-100 w-full h-auto grid place-items-center">
    <div
      class="px-5 py-3 w-96 bg-red-600 items-center text-white rounded-full flex top-8 absolute"
      role="alert"
    >
      <span class="font-semibold mr-2 text-left flex-auto"
        >Check your email and password carefully</span
      >
      <font-awesome-icon
        :icon="['fas', 'xmark']"
        class="text-sm text-white hover:text-red-200"
      />
    </div>
  </div>
</template>

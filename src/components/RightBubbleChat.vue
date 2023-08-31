<template>
  <div class="relative flex justify-end">
    <font-awesome-icon
      :icon="['fas', 'caret-up']"
      class="absolute text-4xl -rotate-45 -top-[11px] text-blue-500 right-0"
    />
    <div
      class="rounded-2xl rounded-tr-none bg-blue-500 mr-[15px] py-4 px-7 inline-block max-w-xl"
    >
      <p class="text-lg font-base break-words text-white">
        <slot />
      </p>
    </div>
  </div>
</template>

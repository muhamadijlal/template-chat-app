<template>
  <div class="relative">
    <font-awesome-icon
      :icon="['fas', 'caret-up']"
      class="absolute text-4xl rotate-45 -top-[11px] text-white"
    />
    <div
      class="rounded-2xl rounded-tl-none bg-white ml-[15px] py-2 px-7 inline-block max-w-xl"
    >
      <p class="text-lg font-base break-words">
        <slot />
      </p>
    </div>
  </div>
</template>

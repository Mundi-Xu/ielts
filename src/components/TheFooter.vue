<script setup>
const year = (new Date()).getFullYear()
</script>

<template>
  <footer class="px-4 py-6 md:flex md:items-center md:justify-between dark:bg-gray-800 2xl:px-0 md:py-10">
    <p class="mb-4 flex-1 text-center text-sm text-gray-500 md:mb-0">
      &copy; {{ year }} Hanyin. All rights reserved.
    </p>
  </footer>
</template>

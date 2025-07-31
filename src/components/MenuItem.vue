<script setup lang="ts" generic="T extends any, O extends any">
import { RouterLink } from 'vue-router'

interface Props {
  label: string
  icon: string
  link: string
  desc?: string
}

defineProps<Props>()
</script>

<template>
  <article
    class="block relative rounded-lg bg-gray-50 p-6 transition-all duration-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
    role="article"
  >
    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 sm:h-10 sm:w-10 md:h-12 md:w-12">
      <i class="block h-6 w-6 text-primary-600 dark:text-primary-300 sm:h-5 sm:w-5 md:h-6 md:w-6" :class="icon" :aria-hidden="true" />
    </div>
    <h3 class="mb-2 text-xl font-bold dark:text-white">
      {{ label }}
    </h3>
    <p v-if="desc" class="text-gray-500 dark:text-gray-400">
      {{ desc }}
    </p>
    <RouterLink
      :to="link"
      class="absolute inset-0 z-10"
      :aria-label="`前往${label}页面`"
    />
  </article>
</template>

<script setup lang="ts" generic="T extends any, O extends any">
import { reactive } from 'vue'
import MenuItem from '~/components/MenuItem.vue'

defineOptions({
  name: 'IndexPage',
})

interface MenuItemType {
  label: string
  icon: string
  link: string
  desc: string
}

const menus = reactive<MenuItemType[]>([
  {
    label: '词汇',
    icon: 'i-carbon-chart-histogram',
    link: '/vocabulary',
    desc: '包含雅思词汇真经内容，按场景分组',
  },
  {
    label: '语法',
    icon: 'i-carbon-load-balancer-vpc',
    link: '/grammar',
    desc: '新东方雅思语法课程，针对雅思考试设计，思维导图',
  },
  {
    label: '听力',
    icon: 'i-carbon-headphones',
    link: '/listening',
    desc: '听力基本概念，179 考点词同义替换和雅思王语料库',
  },
  {
    label: '口语',
    icon: 'i-carbon-microphone',
    link: '/speaking',
    desc: '口语练习指导和话题练习题',
  },
  {
    label: '阅读',
    icon: 'i-carbon-white-paper',
    link: '/reading',
    desc: '538 考点词同义替换',
  },
  {
    label: '写作',
    icon: 'i-carbon-edit',
    link: '/writing',
    desc: '100 句翻译练习、大小作文',
  },
])
</script>

<template>
  <div class="px-4 pt-6 2xl:px-0">
    <section class="mb-4 border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6" aria-labelledby="main-heading">
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 sm:py-16">
        <h1 id="main-heading" style="font-family: Charmonman;" class="mb-8 text-center text-4xl text-gray-900 dark:text-white sm:mb-12 sm:text-5xl md:mb-16 md:text-6xl">
          Salvation lies within <span class="font-bold text-#f00">IELTS</span>
        </h1>
        <div class="mb-8 max-w-screen-md lg:mb-16">
          <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
            My IELTS Learning Centre
          </h2>
          <p class="text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl">
            Hello, This is Hanyin. Here lies everything I've prepared for my exam, starting with vocabulary, grammar...
          </p>
        </div>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <MenuItem
            v-for="m in menus"
            :key="m.label"
            :label="m.label"
            :icon="m.icon"
            :link="m.link"
            :desc="m.desc"
          />
        </div>
      </div>
    </section>
  </div>
</template>

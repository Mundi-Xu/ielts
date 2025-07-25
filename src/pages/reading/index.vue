<script setup>
import words from './reading538words'
import { reactive, ref, computed } from 'vue'

const ws = reactive(words)
const keyword = ref('')
const showReadingTips = ref(false)

// Filter words based on search keyword
const filteredWords = computed(() => {
  if (!keyword.value) return ws
  
  return ws.map(cat => {
    const filteredCat = { ...cat }
    filteredCat.words = cat.words.filter(w => 
      w[1].toLowerCase().includes(keyword.value.toLowerCase()) || 
      w[3].some(meaning => meaning.toLowerCase().includes(keyword.value.toLowerCase()))
    )
    return filteredCat
  }).filter(cat => cat.words.length > 0)
})

function toggleReadingTips() {
  showReadingTips.value = !showReadingTips.value
}
</script>

<template>
  <div class="px-4 pt-6 2xl:px-0">
    <div class="border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <!-- Vocabulary list section -->
      <template
        v-for="cat in filteredWords"
        :key="cat.title"
      >
        <div class="mt-6 items-center justify-between lg:flex">
          <div class="mb-4 lg:mb-0">
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              {{ cat.title }}
            </h3>
            <span class="text-base font-normal text-gray-500 dark:text-gray-400">{{ cat.define }}</span>
          </div>
          <div class="items-center sm:flex">
            <div class="flex items-center">
              <button
                @click="toggleReadingTips"
                class="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
              >
                {{ showReadingTips ? '隐藏技巧' : '阅读技巧' }}
              </button>
              <div class="relative ml-2 flex-1">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  v-model="keyword"
                  type="search"
                  class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400" placeholder="Search"
                >
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="showReadingTips" class="mt-4 p-4 bg-blue-50 rounded-lg dark:bg-blue-900 dark:bg-opacity-20">
          <h4 class="font-medium mb-2 dark:text-white">雅思阅读技巧</h4>
          <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>先快速浏览文章，了解大意和结构</li>
            <li>仔细阅读题目，确定关键词</li>
            <li>根据关键词定位到文章中的相关段落</li>
            <li>注意同义替换词，题目中的词往往不会在文章中直接出现</li>
            <li>注意题目的顺序，通常与文章内容出现的顺序一致</li>
            <li>对于判断题，要特别注意绝对词（always, never, all等）</li>
            <li>合理分配时间，每篇文章建议控制在20分钟内</li>
          </ul>
        </div>
        
        <div class="mt-6">
          <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th class="w-0 px-6 py-3">
                  排名
                </th>
                <th scope="col" class="w-0 px-6 py-3">
                  考点词
                </th>
                <th scope="col" class="w-0 px-6 py-3">
                  词性
                </th>
                <th scope="col" class="w-80 px-6 py-3">
                  词义
                </th>
                <th scope="col" class="px-6 py-3">
                  同义替换
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="w in cat.words"
                :key="w[0]"
                class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <td class="px-6 py-4">
                  {{ w[0] }}
                </td>
                <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                  <a
                    class="hover:underline"
                    :title="`在剑桥词典中查询 ${w[1]}`"
                    :href="`https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${w[1]}`"
                    target="_blank"
                  >{{ w[1] }}</a>
                </th>
                <td
                  class="px-6 py-4 italic"
                  v-html="w[2].join('<br>')"
                />
                <td
                  class="px-6 py-4"
                  v-html="w[3].join('<br>')"
                />
                <td class="px-6 py-4">
                  {{ w[4].join(', ') }}
                  <br>
                  {{ w[5].length > 0 ? w[5] : '' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </div>
  </div>
</template>

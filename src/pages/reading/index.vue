<script setup>
import { computed, reactive, ref } from 'vue'
import words from './reading538words'

const ws = reactive(words)
const keyword = ref('')
const showReadingTips = ref(false)

// Filter words based on search keyword
const filteredWords = computed(() => {
  if (!keyword.value)
    return ws

  return ws.map((cat) => {
    const filteredCat = { ...cat }
    filteredCat.words = cat.words.filter(w =>
      w[1].toLowerCase().includes(keyword.value.toLowerCase())
      || w[3].some(meaning => meaning.toLowerCase().includes(keyword.value.toLowerCase())),
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
            <p v-if="cat.description" class="mt-1 text-sm text-gray-600 dark:text-gray-300">{{ cat.description }}</p>
            <div v-if="cat.title === '第 1 类考点词'" class="mt-2 text-sm text-blue-600 dark:text-blue-400">
              <strong>学习重点：</strong>这些词汇必须滚瓜烂熟，建议每天复习2-3遍，直到完全掌握。
            </div>
            <div v-else-if="cat.title === '第 2 类考点词'" class="mt-2 text-sm text-purple-600 dark:text-purple-400">
              <strong>学习重点：</strong>这些词汇需要熟练掌握，建议每天复习1-2遍，重点记忆同义替换。
            </div>
            <div v-else-if="cat.title === '第 3 类考点词'" class="mt-2 text-sm text-green-600 dark:text-green-400">
              <strong>学习重点：</strong>这些词汇需要掌握基本含义和常见同义替换，建议每周复习2-3次。
            </div>
          </div>
          <div class="items-center sm:flex">
            <div class="flex items-center">
              <button
                v-if="cat.title === '第 1 类考点词'"
                class="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                @click="toggleReadingTips"
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

        <div v-if="showReadingTips && cat.title === '第 1 类考点词'" class="mt-4 p-4 bg-blue-50 rounded-lg dark:bg-blue-900 dark:bg-opacity-20">
          <h4 class="font-medium mb-2 dark:text-white">
            雅思阅读技巧
          </h4>
          <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li><strong>预览文章 (Skimming)</strong>：考试开始后首先快速浏览文章标题、各段落小标题及首尾段，把握文章主题和整体结构，为后续定位信息做准备</li>
            <li><strong>审题划词 (Scanning)</strong>：仔细阅读题干要求，识别并划出关键词（名词、数字、专有名词等），同时预测可能出现的同义替换形式</li>
            <li><strong>定位信息</strong>：根据关键词回文定位，重点关注同义替换，这是雅思阅读的核心考点，约70%的题目涉及同义替换</li>
            <li>
              <strong>题型策略</strong>：不同题型采用不同解题方法：
              <ul class="list-circle pl-5 mt-1">
                <li>填空题：关注语法结构和词性</li>
                <li>选择题：注意干扰项和绝对化词汇</li>
                <li>判断题：严格按照原文信息判断，避免主观臆断</li>
                <li>匹配题：特别注意题干与选项的逻辑关系</li>
              </ul>
            </li>
            <li><strong>顺序原则</strong>：除段落匹配题(Paragraph Matching)外，其他题型基本遵循文章信息出现的顺序，可按顺序解题</li>
            <li>
              <strong>逻辑关系词</strong>：特别关注以下逻辑关系词：
              <ul class="list-circle pl-5 mt-1">
                <li>因果关系：because, therefore, as a result, due to, lead to</li>
                <li>转折对比：however, although, whereas, on the other hand</li>
                <li>并列递进：and, also, furthermore, in addition</li>
                <li>比较关系：more than, less than, superior to, equivalent to</li>
              </ul>
            </li>
            <li>
              <strong>时间分配</strong>：建议每篇文章控制在18-20分钟内完成，建议顺序为：
              <ul class="list-circle pl-5 mt-1">
                <li>第1篇：18分钟</li>
                <li>第2篇：20分钟</li>
                <li>第3篇：20分钟</li>
                <li>剩余时间用于检查答案</li>
              </ul>
            </li>
            <li><strong>同义替换训练</strong>：熟练掌握同义替换是提高阅读成绩的关键，建议每天练习20-30组同义词替换</li>
            <li><strong>词汇积累</strong>：重点掌握高频考点词的不同词性和搭配用法，特别关注一词多义现象</li>
            <li><strong>长难句分析</strong>：学会分析复杂句式结构，掌握主谓宾、定状补等语法成分的识别方法</li>
          </ul>
          
          <h4 class="font-medium mt-4 mb-2 dark:text-white">
            学习建议
          </h4>
          <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li><strong>每日练习</strong>：建议每天完成1-2篇阅读练习，保持语感和解题技巧</li>
            <li><strong>错题分析</strong>：建立错题本，分析错误原因（定位错误、同义替换不熟悉、语法理解偏差等）</li>
            <li><strong>限时训练</strong>：严格按照考试时间进行模拟训练，培养时间管理能力</li>
            <li><strong>词汇复习</strong>：利用本页面的考点词分类进行系统复习，重点掌握第1类和第2类考点词</li>
            <li><strong>真题研究</strong>：深入研究近10年雅思真题，总结出题规律和考点分布</li>
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

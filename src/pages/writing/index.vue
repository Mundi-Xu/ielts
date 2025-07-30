<script setup lang="ts">
import sentences from './100sentences'
import prompts from './prompts'
import { ref } from 'vue'

interface WritingPrompt {
  id: number
  type: string
  title: string
  description: string
  tips: string[]
  sample?: {
    title: string
    content: string
  }
}

const activeTab = ref('translation')
const selectedPrompt = ref<WritingPrompt | null>(null)
const showWritingTips = ref(false)
const showSampleAnswer = ref(false)

function selectPrompt(prompt: WritingPrompt) {
  selectedPrompt.value = prompt
  showSampleAnswer.value = false
}

function toggleWritingTips() {
  showWritingTips.value = !showWritingTips.value
}

function toggleSampleAnswer() {
  showSampleAnswer.value = !showSampleAnswer.value
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
}
</script>

<template>
  <div class="px-4 pt-6 2xl:px-0">
    <div
      class="mb-4 border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <ul
        class="mb-4 text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li class="w-full">
          <button type="button" @click="activeTab = 'translation'"
            :class="activeTab === 'translation' ? 'inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white' : 
            'inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'"
            aria-current="page">100 句翻译练习</button>
        </li>
        <li class="w-full">
          <button type="button" @click="activeTab = 'task1'"
            :class="activeTab === 'task1' ? 'inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white' : 
            'inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'">雅思小作文</button>
        </li>
        <li class="w-full">
          <button type="button" @click="activeTab = 'task2'"
            :class="activeTab === 'task2' ? 'inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-e-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white' : 
            'inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-e-lg'">雅思大作文</button>
        </li>
      </ul>

      <!-- Translation练习 -->
      <div v-if="activeTab === 'translation'">
        <div class="items-center justify-between lg:flex ">
          <div class="mb-4 lg:mb-0">
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              100 句翻译练习
            </h3>
            <span class="text-base font-normal text-gray-500 dark:text-gray-400">能够写出 error-free 的句子</span>
          </div>
          <button
            @click="toggleWritingTips"
            class="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
          >
            {{ showWritingTips ? '隐藏技巧' : '写作技巧' }}
          </button>
        </div>
        
        <div v-if="showWritingTips" class="mt-4 p-4 bg-blue-50 rounded-lg dark:bg-blue-900 dark:bg-opacity-20">
          <h4 class="font-medium mb-2 dark:text-white">翻译练习技巧</h4>
          <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>注意中英文表达习惯的差异</li>
            <li>掌握常见的句型结构和语法点</li>
            <li>积累高频词汇和短语搭配</li>
            <li>注意时态和语态的一致性</li>
            <li>多练习，培养语感</li>
          </ul>
        </div>
        
        <!-- Table -->
        <div class="mt-6 flex flex-col">
          <div class="overflow-x-auto rounded-lg">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden shadow sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                  <tbody class="bg-white dark:bg-gray-800 border-b-1">
                    <template v-for="item of sentences" :key="item.no" class="text-sm text-gray-900 dark:text-white">
                      <template v-if="item.no == null">
                        <tr class="border-t-1 border-x-1">
                          <td colspan="5" class="p-4 font-bold text-xl">{{ item.title }}</td>
                        </tr>
                      </template>
                      <template v-else>
                        <tr class="border-t-1">
                          <td class="p-4 border-x-1" rowspan="2">
                            {{ item.no }}
                          </td>
                          <td class="p-4 border-r-1" rowspan="2">
                            {{ item.sentence }}
                          </td>
                          <td class="p-4 border-b-1 flex items-center">
                            <div class="mr-4" title="来自书上标准答案"><i class="i-carbon-book block"></i></div>
                            <div>{{ item.translationFromBook }}</div>
                            <button 
                              @click="copyToClipboard(item.translationFromBook)"
                              class="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                              title="复制到剪贴板"
                            >
                              <i class="i-carbon-copy block"></i>
                            </button>
                          </td>
                          <td class="p-4 border-x-1 w-30% whitespace-pre-line" rowspan="2">
                            {{ item.remark }}
                          </td>
                        </tr>
                        <tr>
                          <td class="p-4 flex items-center">
                            <div class="mr-4" title="来自 ChatGPT"><i class="i-simple-icons-openai block"></i></div>
                            <div>{{ item.chatgpt }}</div>
                            <button 
                              @click="copyToClipboard(item.chatgpt)"
                              class="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                              title="复制到剪贴板"
                            >
                              <i class="i-carbon-copy block"></i>
                            </button>
                          </td>
                        </tr>
                      </template>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Task 1 小作文 -->
      <div v-else-if="activeTab === 'task1'">
        <div v-if="!selectedPrompt || selectedPrompt.type !== 'Task 1'" class="mb-6">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">雅思小作文练习</h3>
              <p class="text-gray-500 dark:text-gray-400">选择一个写作题目开始练习:</p>
            </div>
            <button
              @click="toggleWritingTips"
              class="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
              {{ showWritingTips ? '隐藏技巧' : '写作技巧' }}
            </button>
          </div>
          
          <div v-if="showWritingTips" class="mb-6 p-4 bg-blue-50 rounded-lg dark:bg-blue-900 dark:bg-opacity-20">
            <h4 class="font-medium mb-2 dark:text-white">小作文写作技巧</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>仔细分析图表数据，找出关键信息</li>
              <li>开头段要简洁明了地描述图表内容</li>
              <li>主体段要按照逻辑顺序描述数据变化</li>
              <li>使用丰富的数据表达词汇</li>
              <li>注意时态的一致性</li>
              <li>结尾段可以总结主要趋势</li>
              <li>字数控制在150词左右</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              v-for="prompt in prompts.filter(p => p.type === 'Task 1')" 
              :key="prompt.id"
              class="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
              @click="selectPrompt(prompt)"
            >
              <h4 class="font-medium mb-2 dark:text-white">{{ prompt.title }}</h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ prompt.description.substring(0, 100) }}...</p>
            </div>
          </div>
        </div>
        
        <div v-else>
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ selectedPrompt.title }}</h3>
            <button 
              @click="selectedPrompt = null"
              class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Back to Prompts
            </button>
          </div>
          
          <div class="mb-6 p-4 bg-blue-50 rounded-lg dark:bg-blue-900 dark:bg-opacity-20">
            <h4 class="font-medium mb-2 dark:text-white">题目:</h4>
            <p class="dark:text-gray-300">{{ selectedPrompt.description }}</p>
          </div>
          
          <div class="mb-6 p-4 bg-yellow-50 rounded-lg dark:bg-yellow-900 dark:bg-opacity-20">
            <h4 class="font-medium mb-2 dark:text-white">写作要点:</h4>
            <ul class="list-disc pl-5 space-y-1 dark:text-gray-300">
              <li v-for="(tip, index) in selectedPrompt.tips" :key="index">{{ tip }}</li>
            </ul>
          </div>
          
          <div v-if="selectedPrompt.sample" class="mb-6">
            <button
              @click="toggleSampleAnswer"
              class="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
              {{ showSampleAnswer ? '隐藏范文' : '查看范文' }}
            </button>
            
            <div v-if="showSampleAnswer" class="mt-4 p-4 bg-green-50 rounded-lg dark:bg-green-900 dark:bg-opacity-20">
              <h4 class="font-medium mb-2 dark:text-white">{{ selectedPrompt.sample.title }}:</h4>
              <pre class="whitespace-pre-wrap dark:text-gray-300">{{ selectedPrompt.sample.content }}</pre>
            </div>
          </div>
          
          <button 
            @click="selectedPrompt = null"
            class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Back to Prompts
          </button>
        </div>
      </div>

      <!-- Task 2 大作文 -->
      <div v-else-if="activeTab === 'task2'">
        <div v-if="!selectedPrompt || selectedPrompt.type !== 'Task 2'" class="mb-6">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">雅思大作文练习</h3>
              <p class="text-gray-500 dark:text-gray-400">选择一个写作题目开始练习:</p>
            </div>
            <button
              @click="toggleWritingTips"
              class="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
              {{ showWritingTips ? '隐藏技巧' : '写作技巧' }}
            </button>
          </div>
          
          <div v-if="showWritingTips" class="mb-6 p-4 bg-blue-50 rounded-lg dark:bg-blue-900 dark:bg-opacity-20">
            <h4 class="font-medium mb-2 dark:text-white">大作文写作技巧</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>仔细审题，明确题目要求和立场</li>
              <li>开头段要明确提出观点</li>
              <li>主体段要有清晰的论点和论据</li>
              <li>使用恰当的连接词使文章逻辑清晰</li>
              <li>注意段落结构和文章整体结构</li>
              <li>结尾段要总结观点并提出建议或展望</li>
              <li>字数控制在250词左右</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              v-for="prompt in prompts.filter(p => p.type === 'Task 2')" 
              :key="prompt.id"
              class="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
              @click="selectPrompt(prompt)"
            >
              <h4 class="font-medium mb-2 dark:text-white">{{ prompt.title }}</h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ prompt.description.substring(0, 100) }}...</p>
            </div>
          </div>
        </div>
        
        <div v-else>
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ selectedPrompt.title }}</h3>
            <button 
              @click="selectedPrompt = null"
              class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Back to Prompts
            </button>
          </div>
          
          <div class="mb-6 p-4 bg-blue-50 rounded-lg dark:bg-blue-900 dark:bg-opacity-20">
            <h4 class="font-medium mb-2 dark:text-white">题目:</h4>
            <p class="dark:text-gray-300">{{ selectedPrompt.description }}</p>
          </div>
          
          <div class="mb-6 p-4 bg-yellow-50 rounded-lg dark:bg-yellow-900 dark:bg-opacity-20">
            <h4 class="font-medium mb-2 dark:text-white">写作要点:</h4>
            <ul class="list-disc pl-5 space-y-1 dark:text-gray-300">
              <li v-for="(tip, index) in selectedPrompt.tips" :key="index">{{ tip }}</li>
            </ul>
          </div>
          
          <div v-if="selectedPrompt.sample" class="mb-6">
            <button
              @click="toggleSampleAnswer"
              class="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
              {{ showSampleAnswer ? '隐藏范文' : '查看范文' }}
            </button>
            
            <div v-if="showSampleAnswer" class="mt-4 p-4 bg-green-50 rounded-lg dark:bg-green-900 dark:bg-opacity-20">
              <h4 class="font-medium mb-2 dark:text-white">{{ selectedPrompt.sample.title }}:</h4>
              <pre class="whitespace-pre-wrap dark:text-gray-300">{{ selectedPrompt.sample.content }}</pre>
            </div>
          </div>
          
          <button 
            @click="selectedPrompt = null"
            class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Back to Prompts
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

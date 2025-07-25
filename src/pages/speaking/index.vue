<script setup>
import topics from './topics.js'
import { ref } from 'vue'

const expandedTopic = ref(null)

function toggleTopic(id) {
  expandedTopic.value = expandedTopic.value === id ? null : id
}
</script>

<template>
  <div class="px-4 pt-6 2xl:px-0">
    <div class="mb-4 border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <h2 class="text-2xl font-bold mb-4 dark:text-white">IELTS Speaking Practice</h2>
      
      <div class="p-4 bg-blue-50 rounded-lg dark:bg-blue-900 dark:bg-opacity-20">
        <h4 class="font-medium mb-2 dark:text-white">口语练习指导</h4>
        
        <div class="mt-3 text-gray-700 dark:text-gray-300">
          <p class="mb-3">在雅思口语考试中，你需要面对三个部分的考核：</p>
          
          <h5 class="font-semibold mb-2">Part 1: Introduction and Interview (4-5分钟)</h5>
          <ul class="list-disc pl-5 mb-3">
            <li>考官会问你一些关于你自己的问题</li>
            <li>话题通常包括：工作/学习、家乡、兴趣爱好等</li>
            <li>回答要简洁明了，但也要有细节</li>
          </ul>
          
          <h5 class="font-semibold mb-2">Part 2: Long Turn (3-4分钟)</h5>
          <ul class="list-disc pl-5 mb-3">
            <li>你会得到一个话题卡和1分钟准备时间</li>
            <li>你需要就这个话题进行1-2分钟的连续发言</li>
            <li>考官可能会在你发言后问1-2个问题</li>
          </ul>
          
          <h5 class="font-semibold mb-2">Part 3: Discussion (4-5分钟)</h5>
          <ul class="list-disc pl-5 mb-3">
            <li>与Part 2话题相关，但更抽象和深入</li>
            <li>需要展示你的分析和论证能力</li>
          </ul>
          
          <h5 class="font-semibold mb-2">练习建议</h5>
          <ul class="list-disc pl-5">
            <li>每天练习不同的话题</li>
            <li>录音并回听自己的表现</li>
            <li>注意语速、语调和流利度</li>
            <li>扩展词汇量，使用多样化的表达</li>
            <li>练习时尽量模拟真实考试环境</li>
          </ul>
        </div>
      </div>
      
      <!-- 练习题部分 -->
      <div class="mt-8">
        <h3 class="text-xl font-bold mb-4 dark:text-white">口语练习题</h3>
        <div class="space-y-4">
          <div 
            v-for="topic in topics" 
            :key="topic.id"
            class="border border-gray-200 rounded-lg p-4 dark:border-gray-700"
          >
            <div 
              class="flex justify-between items-center cursor-pointer"
              @click="toggleTopic(topic.id)"
            >
              <h4 class="font-medium dark:text-white">{{ topic.topic }}</h4>
              <i 
                class="i-carbon-chevron-down transition-transform duration-300 dark:text-white"
                :class="{'rotate-180': expandedTopic === topic.id}"
              ></i>
            </div>
            
            <div 
              v-show="expandedTopic === topic.id"
              class="mt-3 pl-4 border-l-2 border-gray-300 dark:border-gray-600"
            >
              <h5 class="font-medium mb-2 dark:text-white">相关问题:</h5>
              <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li v-for="(question, index) in topic.questions" :key="index">
                  {{ question }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

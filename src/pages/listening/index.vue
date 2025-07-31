<script setup>
import { ref } from 'vue'

const scoreTable = [
  ['39-40', '9.0'],
  ['37-38', '8.5'],
  ['35-36', '8.0'],
  ['33-34', '7.5'],
  ['30-32', '7.0'],
  ['27-29', '6.5'],
  ['23-26', '6.0'],
  ['20-22', '5.5'],
  ['16-19', '5.0'],
  ['13-15', '4.5'],
  ['10-12', '4.0'],
  ['6-9', '3.5'],
  ['4-5', '3.0'],
  ['3', '2.5'],
  ['2', '2.0'],
  ['1', '1.0'],
  ['absent', '0.0'],
]

const showListeningTips = ref(false)

function toggleListeningTips() {
  showListeningTips.value = !showListeningTips.value
}
</script>

<template>
  <div class="px-4 pt-6 text-gray-500 2xl:px-0 dark:text-gray-400">
    <div class="border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <div class="flex items-center justify-between">
        <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          雅思听力概述
        </h3>
        <button
          class="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
          @click="toggleListeningTips"
        >
          {{ showListeningTips ? '隐藏技巧' : '听力技巧' }}
        </button>
      </div>
      
      <div v-if="showListeningTips" class="mt-4 p-4 bg-blue-50 rounded-lg dark:bg-blue-900 dark:bg-opacity-20">
        <h4 class="font-medium mb-2 dark:text-white">
          雅思听力技巧
        </h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li><strong>预读题目</strong>：利用每个部分开始前和间隙时间快速浏览题目，划出关键词，预测可能的答案类型和内容</li>
          <li><strong>关键词识别</strong>：注意听关键词及其同义替换，这是雅思听力的核心考点，约70%的题目涉及同义替换</li>
          <li><strong>注意信号词</strong>：特别关注表示转折、因果、并列等逻辑关系的信号词，如but, however, because, therefore等</li>
          <li>
            <strong>各Section策略</strong>：
            <ul class="list-disc pl-5 mt-1">
              <li>Section 1: 日常生活场景，注意人名、地址、电话号码等细节信息的拼写</li>
              <li>Section 2: 社会生活场景，关注地点、活动、设施等信息</li>
              <li>Section 3: 教育培训场景，注意学术讨论中的观点和建议</li>
              <li>Section 4: 学术独白场景，关注专业术语和学术概念</li>
            </ul>
          </li>
          <li><strong>拼写准确性</strong>：听力答案要求拼写完全正确，特别注意常见词汇的拼写和易混淆词汇</li>
          <li><strong>时间管理</strong>：合理分配注意力，不要因为一题没听清而影响后续题目，学会适时放弃</li>
          <li><strong>检查答案</strong>：充分利用最后10分钟检查时间，检查拼写、语法和格式是否正确</li>
        </ul>
        
        <h4 class="font-medium mt-4 mb-2 dark:text-white">
          学习建议
        </h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li><strong>精听练习</strong>：每天进行20-30分钟精听训练，逐句理解并跟读，提高语音识别能力</li>
          <li><strong>泛听积累</strong>：每天听30分钟以上英语材料（新闻、播客、纪录片等），培养语感</li>
          <li><strong>考点词掌握</strong>：熟练掌握听力核心考点词的不同词性和搭配用法，特别关注同义替换</li>
          <li><strong>模拟训练</strong>：定期进行完整的听力模拟测试，严格按照考试时间要求</li>
          <li><strong>错题分析</strong>：建立错题本，分析错误原因（词汇不熟悉、同义替换未识别、注意力分散等）</li>
          <li><strong>语音训练</strong>：学习不同口音特点，提高对各种英语口音的适应能力</li>
        </ul>
      </div>
      
      <div class="mb-4 mt-6">
        <p class="mb-4">了解雅思听力考试的基本结构、评分标准和应试技巧</p>
        <br>
        <p>评分表</p>
        <table class="w-full text-center text-sm text-gray-500 dark:text-gray-400">
          <tbody>
            <tr class="border bg-white dark:border-gray-700 dark:bg-gray-800">
              <td v-for="v in scoreTable" :key="v[0]" class="border px-6 py-4">
                {{ v[0] }}
              </td>
            </tr>
            <tr class="border bg-white dark:border-gray-700 dark:bg-gray-800">
              <td v-for="v in scoreTable" :key="v[0]" class="border px-6 py-4">
                {{ v[1] }}
              </td>
            </tr>
          </tbody>
        </table>
        <br>
        <ul class="ml-6 list-disc">
          <li><strong>考试时长：</strong>30分钟听力测试 + 10分钟检查时间（纸笔考试）/ 30分钟包含检查时间（机考）</li>
          <li><strong>题目数量：</strong>40道题，错10道以内可获得7分以上</li>
          <li><strong>考试结构：</strong>4个部分，每部分10题，难度递增</li>
          <li><strong>答题顺序：</strong>答案按照录音顺序出现</li>
          <li>
            <strong>题型分类：</strong>
            <ul class="ml-6 list-disc">
              <li>填空题（Form/Note/Table/Flow-chart/Sentence completion）</li>
              <li>选择题（Multiple choice）</li>
              <li>匹配题（Matching）</li>
              <li>地图题（Plan/Simple map labelling）</li>
              <li>图表题（Diagram labelling）</li>
            </ul>
          </li>
          <li><strong>语言要求：</strong>涵盖多种英语口音（英式、澳式、美式、新西兰式等）</li>
          <li><strong>播放次数：</strong>每段录音只播放一次</li>
        </ul>
      </div>
    </div>
    
    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      Section 1 (日常生活社交场景)
    </h3>
    <ul class="mb-4 ml-6 list-disc">
      <li><strong>对话形式：</strong>2人日常对话（如租房、旅游咨询、工作申请等）</li>
      <li>
        <strong>话题内容：</strong>日常生活相关场景
        <ul class="ml-6 list-disc">
          <li>旅行安排（booking a hotel）</li>
          <li>租房咨询（renting an apartment）</li>
          <li>工作申请（job application）</li>
        </ul>
      </li>
      <li><strong>题目类型：</strong>以填空题为主，补全表格、笔记或表格中的缺失信息</li>
      <li>
        <strong>考查重点：</strong>细节信息捕捉
        <ul class="ml-6 list-disc">
          <li>人名（names）</li>
          <li>地址（addresses）</li>
          <li>日期（dates）</li>
          <li>时间（times）</li>
          <li>电话号码（phone numbers）</li>
          <li>价格（prices）</li>
        </ul>
      </li>
      <li><strong>难度评估：</strong>相对简单，目标分数9-10分，为后续较难题目预留容错空间</li>
    </ul>
    <p><strong>应试策略：</strong></p>
    <ul class="ml-6 list-disc">
      <li><strong>预读技巧：</strong>充分利用题目间间隙时间预读下一题，标记关键词</li>
      <li><strong>时间节点：</strong>每个部分开始前、中间停顿点、结束时都可预读题目</li>
      <li><strong>注意：</strong>Section 4中间无停顿，需在Section 3结束后充分利用时间</li>
      <li><strong>答题原则：</strong>专注当前题目，错过不回看，直接进入下一题</li>
    </ul>

    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      Section 2 (社会生活场景)
    </h3>
    <ul class="ml-6 list-disc">
      <li><strong>准备时间：</strong>充分利用Section 1结束后的时间预读Section 2题目</li>
      <li><strong>录音形式：</strong>独白（一个人介绍或说明某个话题）</li>
      <li>
        <strong>话题内容：</strong>社会生活相关话题
        <ul class="ml-6 list-disc">
          <li>旅游景点介绍（Tourism）</li>
          <li>公园设施说明（A park）</li>
          <li>当地设施介绍（Local facilities）</li>
          <li>活动安排说明（Event organization）</li>
          <li>规章制度介绍（Rules and regulations）</li>
        </ul>
      </li>
      <li><strong>题目类型：</strong>填空题、选择题、匹配题等多种题型混合</li>
      <li><strong>时间安排：</strong>中间有停顿（前5题完成后有时间预读后5题）</li>
      <li><strong>难度评估：</strong>相对简单，目标高分（9-10分）</li>
    </ul>

    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      Section 3 (教育培训场景)
    </h3>

    <ul class="ml-6 list-disc">
      <li><strong>预读策略：</strong>利用Section 2结束后的间隙时间充分预读题目并标记关键词</li>
      <li><strong>对话形式：</strong>2-3人学术讨论（如导师与学生、学生小组讨论）</li>
      <li><strong>话题内容：</strong>教育、培训相关话题
        <ul class="ml-6 list-disc">
          <li>课程选择与比较</li>
          <li>作业与项目讨论</li>
          <li>学习方法与建议</li>
          <li>论文写作指导</li>
          <li>学术研究讨论</li>
        </ul>
      </li>
      <li><strong>题目类型：</strong>填空题、选择题（难度较高）</li>
      <li><strong>答题技巧：</strong>在题目和选项中划出关键词，注意同义替换</li>
      <li><strong>听力重点：</strong>关注关键词及其同义表达</li>
      <li><strong>难度评估：</strong>难度较高，目标分数6-7分</li>
    </ul>

    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      Section 4 (学术独白场景)
    </h3>
    <ul class="ml-6 list-disc">
      <li><strong>准备时间：</strong>充分利用Section 3结束后的间隙时间预读题目并划关键词</li>
      <li><strong>录音形式：</strong>学术主题独白（教授讲座、学术报告等）</li>
      <li><strong>时间特点：</strong>Section 4中间无停顿，需在Section 3结束后充分利用时间</li>
      <li><strong>话题内容：</strong>学术相关主题
        <ul class="ml-6 list-disc">
          <li>科学研究介绍</li>
          <li>学术理论讲解</li>
          <li>历史事件分析</li>
          <li>地理环境描述</li>
          <li>生物物种介绍</li>
        </ul>
      </li>
      <li><strong>题目类型：</strong>填空题、选择题</li>
      <li><strong>听力重点：</strong>关注关键词及其同义替换</li>
      <li><strong>难度特点：</strong>语速较快、内容密集、信息量大，需要高度集中注意力捕捉关键信息</li>
      <li><strong>难度评估：</strong>最难部分，目标分数6-7分</li>
    </ul>

    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      总结
    </h3>
    <p class="mb-2">雅思听力备考需要系统性训练和模拟考试练习</p>
    <ol class="ml-6 list-decimal">
      <li><strong>预读策略：</strong>始终向前预读题目，只在听力结束后回头检查答案</li>
      <li><strong>关键词技巧：</strong>养成划关键词的习惯，重点关注同义替换</li>
      <li><strong>听力专注：</strong>注意捕捉关键词及其同义表达</li>
      <li><strong>拼写准确：</strong>确保答案拼写正确，错误拼写不得分</li>
      <li><strong>时间管理：</strong>遇到难题不纠结，保持答题节奏</li>
      <li><strong>全程专注：</strong>30分钟听力测试需要全神贯注</li>
    </ol>
  </div>
</template>

<style>
  .dark svg text {
    font-family: "comic sans ms", system-ui;
    fill: #fff;
  }
</style>
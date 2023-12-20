import{e as u,d as g,c as l,a as e,i as h,k as x,u as c,j as y,F as i,r as b,o as n,t as r}from"./index-7c25a10c.js";import{w as _}from"./listening179-a4b37bcf.js";const m={class:"mt-6 items-center justify-between lg:flex"},f=e("div",{class:"mb-4 lg:mb-0"},[e("h3",{class:"mb-2 text-xl font-bold text-gray-900 dark:text-white"}," 听力 179 考点词 "),e("span",{class:"text-base font-normal text-gray-500 dark:text-gray-400"},"考点词以及对应的同义替换")],-1),k={class:"items-center sm:flex"},w={class:"flex items-center"},v={class:"relative ml-2 flex-1"},$=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"h-4 w-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),j={class:"mt-6"},B={class:"w-full text-left text-sm text-gray-500 dark:text-gray-400"},C=e("thead",{class:"bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{class:"w-0 px-6 py-3"}," # "),e("th",{class:"w-0 px-6 py-3"}),e("th",{scope:"col",class:"w-0 px-6 py-3"}," 考点词 "),e("th",{scope:"col",class:"w-0 px-6 py-3"}," 词性 "),e("th",{scope:"col",class:"w-80 px-6 py-3"}," 词义 "),e("th",{scope:"col",class:"px-6 py-3"}," 同义替换 ")])],-1),D={class:"px-6 py-4"},E={class:"px-6 py-4"},F=["onClick"],S={scope:"row",class:"whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"},V=["title","href"],A={class:"px-6 py-4 italic"},L={class:"px-6 py-4"},M={class:"px-6 py-4"},Z={__name:"keyword",setup(N){const d=u(_);function p(a){const s=document.createElement("audio");s.src=`179_audios/${a}.mp3`,s.play()}const o=g("");return(a,s)=>(n(),l(i,null,[e("div",m,[f,e("div",k,[e("div",w,[e("button",{type:"button",class:"rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white dark:bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:s[0]||(s[0]=t=>a.$router.push("listening/179practice"))}," 练习 "),e("div",v,[$,h(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>y(o)?o.value=t:null),type:"search",class:"block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400",placeholder:"Search"},null,512),[[x,c(o)]])])])])]),e("div",j,[e("table",B,[C,e("tbody",null,[(n(!0),l(i,null,b(c(d),t=>(n(),l("tr",{key:t.index,class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},[e("td",D,r(t.index),1),e("td",E,[e("a",{href:"javascript:;",class:"i-carbon-volume-up-filled block",onClick:R=>p(t.word)},null,8,F)]),e("th",S,[e("a",{class:"hover:underline",title:`在剑桥词典中查询 ${t.word}`,href:`https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${t.word}`,target:"_blank"},r(t.word),9,V)]),e("td",A,r(t.type),1),e("td",L,r(t.meaning),1),e("td",M,r(t.replace.join(", ")),1)]))),128))])])])],64))}};export{Z as default};
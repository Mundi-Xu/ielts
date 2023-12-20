import{d as _,e as E,f as V,w as B,g as L,h as j,c as l,a as t,i as p,v as A,u as h,j as m,F as i,r as x,k as N,o as n,t as d,l as S,n as $}from"./index-7c25a10c.js";import y from"./vocabulary-057d3aa2.js";const D={class:"px-4 pt-6 2xl:px-0"},M={class:"border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"},R={class:"items-center justify-between lg:flex"},U=t("div",{class:"mb-4 lg:mb-0"},[t("h3",{class:"mb-2 text-xl font-bold text-gray-900 dark:text-white"}," 雅思词汇真经 "),t("span",{class:"text-base font-normal text-gray-500 dark:text-gray-400"},"涵盖雅思必备核心词，逻辑词群记忆法")],-1),F={class:"items-center sm:flex"},I={class:"flex items-center"},z=t("option",{value:""}," 全部章节 ",-1),H=["value"],K={class:"relative ml-2 flex-1"},O=t("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[t("svg",{class:"h-4 w-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),P={class:"mt-6 flex flex-col"},Y={class:"overflow-x-auto rounded-lg"},Z={class:"inline-block min-w-full align-middle"},q={class:"overflow-hidden shadow sm:rounded-lg"},J={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-600"},Q=t("thead",{class:"bg-gray-50 dark:bg-gray-700"},[t("tr",null,[t("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," # "),t("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 词 "),t("th",{class:"w-0 text-left text-xs font-medium text-gray-500 dark:text-white"}," 词性 "),t("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 词义 "),t("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 例句 "),t("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 拓展 ")])],-1),W={class:"bg-white dark:bg-gray-800"},X={class:"bg-hex-f3f3f3"},G={colspan:"6",class:"px-4 py-6 text-sm font-normal text-gray-900 dark:bg-gray-500 dark:text-white"},tt={class:"flex flex-row"},et={class:"flex flex-1 items-center"},st={class:"text-lg"},ot={class:"justify-items-end"},rt={controls:""},at=["src"],dt={class:"p-4"},lt={class:"whitespace-nowrap p-4"},nt=["title","href"],it={style:{"font-style":"italic","font-family":"times"}},ct={class:"p-4"},ut={class:"p-4"},gt={class:"p-4"},w="vocabulary_chapter",_t={__name:"index",setup(ft){const g=_(""),b=Object.keys(y),c=_(localStorage.getItem(w)||b[0]),k=_(!1),v=E(y),T=V(()=>{const s=structuredClone(y),o=g.value.trim().toLowerCase(),e=c.value;if(e!=="")for(const r in s)r!==e&&delete s[r];if(o!=="")for(const r in s){const u=s[r],f=[];u.words.forEach(a=>{f.push(a.filter(C=>C.word.toLowerCase().includes(o)))}),u.words=f}return s});return B(c,(s,o)=>{localStorage.setItem(w,s)}),L(()=>{k.value=!0;const s=document.getElementsByTagName("audio");for(const o of s)o.onplay=()=>{for(const e of s)e.blur(),o!==e&&e.pause()}}),j(()=>{for(const s of document.getElementsByTagName("audio"))s.load()}),document.addEventListener("keyup",s=>{if(["ArrowLeft","ArrowRight"].includes(s.key)){s.preventDefault();const o=document.getElementsByTagName("audio");for(const e of o)if(!e.paused){e.blur();const r=s.key==="ArrowLeft"?-3:3;e.currentTime=e.currentTime+r}}}),(s,o)=>(n(),l("div",D,[t("div",M,[t("div",R,[U,t("div",F,[t("div",I,[p(t("select",{"onUpdate:modelValue":o[0]||(o[0]=e=>m(c)?c.value=e:null),class:"block w-full flex-1 border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400"},[z,(n(!0),l(i,null,x(h(v),(e,r)=>(n(),l("option",{key:r,value:r},d(r),9,H))),128))],512),[[A,h(c)]]),t("div",K,[O,p(t("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>m(g)?g.value=e:null),type:"search",class:"block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400",placeholder:"Search"},null,512),[[N,h(g)]])])])])]),t("div",P,[t("div",Y,[t("div",Z,[t("div",q,[t("table",J,[Q,t("tbody",W,[(n(!0),l(i,null,x(h(T),(e,r)=>(n(),l(i,{key:r},[t("tr",X,[t("td",G,[t("div",tt,[t("div",et,[t("span",st,d(r),1),S(" （ "+d(e.groupCount)+" 组 "+d(e.wordCount)+" 个词 ） ",1)]),t("div",ot,[t("audio",rt,[t("source",{src:`vocabulary/audio/${e.audio}`,type:"audio/mpeg"},null,8,at)])])])])]),(n(!0),l(i,null,x(e.words,(u,f)=>(n(),l(i,{key:u.label},[(n(!0),l(i,null,x(u,a=>(n(),l("tr",{key:a.id,class:$([{"bg-gray-50 dark:bg-gray-700":a.id%2===0,[`group-color-${f%15}`]:!0},"text-sm text-gray-900 dark:text-white"])},[t("td",dt,d(a.id),1),t("td",lt,[t("a",{class:"hover:underline",title:`在剑桥词典中查询 ${a.word}`,target:"_blank",href:`https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${a.word}`},d(a.word),9,nt)]),t("td",it,d(a.pos),1),t("td",ct,d(a.meaning),1),t("td",ut,d(a.example),1),t("td",gt,d(a.extra),1)],2))),128))],64))),128))],64))),128))])])])])])])])]))}};export{_t as default};
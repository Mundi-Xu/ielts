// 为项目添加类型定义
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module '*.json' {
  const value: any
  export default value
}

import Steps from './src/steps.vue'

// 便于外部使用 
// Vue.use(Steps)
// 如果参数是函数，调用函数方法，如果参数是对象，调用对象内的install方法来注册插件
Steps.install = Vue => {
  Vue.component(Steps.name, Steps)
}

export default Steps
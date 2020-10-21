import Input from './src/input.vue'

// 便于外部使用 
// Vue.use(Input)
// 如果参数是函数，调用函数方法，如果参数是对象，调用对象内的install方法来注册插件
Input.install = Vue => {
  Vue.component(Input.name, Input)
}

export default Input
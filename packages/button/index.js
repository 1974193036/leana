import Button from './src/button.vue'

// 便于外部使用 
// Vue.use(Button)
// 如果参数是函数，调用函数方法，如果参数是对象，调用对象内的install方法来注册插件
Button.install = Vue => {
  Vue.component(Button.name, Button)
}

export default Button
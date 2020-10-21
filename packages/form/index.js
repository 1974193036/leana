import Form from './src/form.vue'

// 便于外部使用 
// Vue.use(Form)
// 如果参数是函数，调用函数方法，如果参数是对象，调用对象内的install方法来注册插件
Form.install = Vue => {
  Vue.component(Form.name, Form)
}

export default Form
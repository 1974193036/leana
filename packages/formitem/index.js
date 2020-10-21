import Formitem from './src/formitem.vue'

// 便于外部使用 
// Vue.use(Formitem)
// 如果参数是函数，调用函数方法，如果参数是对象，调用对象内的install方法来注册插件
Formitem.install = Vue => {
  Vue.component(Formitem.name, Formitem)
}

export default Formitem
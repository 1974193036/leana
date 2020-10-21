<template>
  <form class="aaa">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'ssyyForm',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  provide() {
    return {
      form: this
    }
  },
  methods: {
    validate(cb) {
      // 假设 Form 组件下嵌套的第一层就是 FormItem
      const tasks = this.$children.filter(child => child.prop).map(child => child.asyncValidate())
      Promise.all(tasks).then(() => {
        cb(true)
      }).catch(() => {
        cb(false)
      })
    }
  }
}
</script>
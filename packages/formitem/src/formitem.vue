<template>
  <div>
    <label :for="prop">{{ label }}</label>
    <div>
      <slot />
      <div style="color: red" v-if="errMessage">{{ errMessage }}</div>
    </div>
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
  name: 'ssyyFormItem',
  // inject: ['form'],
  inject: {
    'form': {
      default: () => {
        return { model: {}, rules: {} }
      }
    }
  },
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      errMessage: ''
    }
  },
  mounted() {
    // this.asyncValidate()
    // console.log(this.form.rules)
    // console.log(this.$parent.rules)
    this.$on('asyncValidate22', () => {
      this.asyncValidate()
    })
  },
  methods: {
    asyncValidate() {
      //   const descriptor = {
      //     password: [
      //       { required: true, message: '请输入密码' },
      //       { min: 6, max: 12, message: '请输入6-12位密码' }
      //     ]
      //   }
      //   const validator = new Schema(descriptor)
      //   validator.validate({ password: '11' }, (errors) => {
      //     if (errors) {
      //       console.log(errors)
      //       this.errMessage = errors[0].message
      //     }
      //     console.log('校验正确')
      //   })
      // }
      if (!this.prop) return
      const value = this.form.model[this.prop]
      // console.log(value)
      const rules = this.form.rules[this.prop]
      const descriptor = {
        [this.prop]: rules
      }
      const validator = new Schema(descriptor)
      return validator.validate({ [this.prop]: value }, (errors) => {
        // console.log(errors)
        if (errors) {
          this.errMessage = errors[0].message
        } else {
          this.errMessage = ''
        }
      })
    }
  }
}
</script>
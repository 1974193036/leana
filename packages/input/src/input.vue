<template>
  <div>
    <input
      :class="['el-input__inner']"
      v-bind="$attrs"
      :type="type"
      :value="value"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: 'ssyyInput',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String
    }
  },
  methods: {
    handleInput(e) {
      // console.log(e.target.value)
      this.$emit('input', e.target.value)

      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'LgFormItem') {
            break
          }
          parent = parent.$parent
        }
        return parent
      }
      const parent = findParent(this.$parent)

      parent && parent.$emit('asyncValidate22')
    }
  }
}
</script>

<style scoped>
.el-input__inner {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
</style>
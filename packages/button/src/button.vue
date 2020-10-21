<template>
  <div>
    <button :class="['el-button', 'el-button--' + type]" @click="handleClick">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ssyyButton',
  props: {
    type: {
      type: String
    }
  },
  methods: {
    handleClick(e) {
      e.preventDefault()
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.el-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
</style>
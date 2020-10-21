import ssyyButton from "../src/button.vue"
import { mount } from "@vue/test-utils"

describe('ssyy-button', () => {
  test('button-type', () => {
    const wrapper = mount(ssyyButton, {
      propsData: {
        type: 'primary'
      }
    })
    // wrapper.props()可以获取生成组件的指定的props，toBe判断值是否相等
    expect(wrapper.props('type')).toBe('primary')
  })
})
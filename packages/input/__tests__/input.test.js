import ssyyInput from "../src/input.vue"
import { mount } from "@vue/test-utils"

describe('ssyy-input', () => {
  test('input-text', () => {
    const wrapper = mount(ssyyInput)
    expect(wrapper.html()).toContain('input type="text"') // 是否包含
  })

  test('ssyy-input-password',()=>{
    const wrapper = mount(ssyyInput,{
      propsData:{
        type:'password'
      }
    })
    expect(wrapper.html()).toContain('input type="password"') // 是否包含
  })

  test('ssyy-input-password',()=>{
    const wrapper = mount(ssyyInput,{
      propsData:{
        type:'password'
      }
    })
    expect(wrapper.props('type')).toBe('password') // 是否相等prop
  })

  test('ssyy-input-snapshot', () => {
    const wrapper = mount(ssyyInput, {
      propsData: {
        type: 'text',
        value: 'admin'
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot() // 生成快照
  })
})
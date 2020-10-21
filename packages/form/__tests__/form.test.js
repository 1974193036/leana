import ssyyForm from "../src/form.vue"
import { mount } from "@vue/test-utils"

describe('ssyy-form', () => {
  test('form-snapshot', () => {
    const wrapper = mount(ssyyForm)
    expect(wrapper.vm.$el).toMatchSnapshot() // 生成快照
  })
})
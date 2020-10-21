import ssyyFormitem from "../src/formitem.vue"
import { mount } from "@vue/test-utils"

describe('ssyy-formitem', () => {
  test('formitem-prop', () => {
    const wrapper = mount(ssyyFormitem)
    expect(wrapper.vm.$el).toMatchSnapshot() // 生成快照
  })
})
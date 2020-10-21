import ssyySteps from "../src/steps.vue"
import { mount } from "@vue/test-utils"

describe('ssyy-steps', () => {
  test('ssyy-steps-snapshot', () => {
    const wrapper = mount(ssyySteps, {
      propsData: {
        count: 4,
        active: 1
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot() // 生成快照
  })
})
import ssyyButton from '../'

export default {
  title: 'ssyyButton',
  component: ssyyButton
}

export const Primary = () => ({
  components: { ssyyButton },
  template: '<ssyy-button type="primary">按钮</ssyy-button>'
})

export const Default = () => ({
  components: { ssyyButton },
  template: '<ssyy-button type="">按钮</ssyy-button>'
})
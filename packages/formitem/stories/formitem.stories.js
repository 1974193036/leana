import ssyyFormItem from '../'

export default {
  title: 'ssyyFormItem',
  component: ssyyFormItem
}

export const Formitem = () => ({
  components: { ssyyFormItem },
  template: `
    <div>
      <ssyy-form-item></ssyy-form-item>
    </div>
  `
})
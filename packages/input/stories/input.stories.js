import ssyyInput from '../'

export default {
  title: 'ssyyInput',
  component: ssyyInput
}

export const Input = () => ({
  components: { ssyyInput },
  template: `
    <div>
      <ssyy-input></ssyy-input>
    </div>
  `
})
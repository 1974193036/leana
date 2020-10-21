import ssyySteps from '../'

export default {
  title: 'ssyySteps',
  component: ssyySteps
}

export const Steps = () => ({
  components: { ssyySteps },
  template: `
    <div>
      <ssyy-steps :active="1"></ssyy-steps>
    </div>
  `
})
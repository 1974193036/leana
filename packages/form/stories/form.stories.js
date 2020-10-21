import ssyyForm from '../'
import ssyyFormItem from '../../formitem'
import ssyyInput from '../../input'
import ssyyButton from '../../button'

export default {
  title: 'ssyyForm',
  component: ssyyForm
}

export const Login = () => ({
  components: { ssyyForm, ssyyFormItem, ssyyInput, ssyyButton },
  template: `
    <ssyy-form class="form" ref="form" :model="user" :rules="rules">
      <ssyy-form-item label="用户名" prop="username">
        <ssyy-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></ssyy-input>
      </ssyy-form-item>
      <ssyy-form-item label="密码" prop="password">
        <ssyy-input type="password" v-model="user.password" placeholder="请输入密码"></ssyy-input>
      </ssyy-form-item>
      <ssyy-form-item>
        <ssyy-button type="primary" @click="login">登 录</ssyy-button>
      </ssyy-form-item>
    </ssyy-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('验证成功')
        } else {
          console.log('验证失败')
          return false
        }
      })
    }
  }
})
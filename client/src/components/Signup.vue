<template>
  <div>
    <h1>
      Signup
    </h1>
    <div>
      <input type="text" name="firstName" v-model="input.firstName" placeholder="First Name" />
      <input type="text" name="lastName" v-model="input.lastName" placeholder="Last Name" />
      <input type="email" name="email" v-model="input.email" placeholder="Email" />
      <input type="password" name="password" v-model="input.password" placeholder="Password" />
    </div>
    <button @click="signup">Signup</button>
  </div>
</template>

<script>
import authService from '../services/authService'

export default {
  data () {
    return {
      input: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async signup () {
      const res = await authService.signup({
        firstName: this.input.firstName,
        lastName: this.input.lastName,
        email: this.input.email,
        password: this.input.password
      })
      console.log(res.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

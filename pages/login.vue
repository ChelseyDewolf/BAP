<template>
  <div class="login-wrapper">
    <div class="login-image"></div>
    <div class="login">
      <h3>Log in</h3>
      <form @submit.prevent="pressed">
        <div class="login">
          <input type="text" placeholder="E-mail" v-model='email'>
        </div>
        <div class="password">
          <input type="password" placeholder="Password" v-model='password'>
        </div>
      <button>Log in</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import { auth } from '~/plugins/firebase.js'

export default {


  data(){
    return {
      email: '',
      password: '',
      error: ''
    }
  },

  methods: {
    pressed(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(data => {
        console.log(data);
        this.$router.push('/secret');
      }).catch(error => this.error = error);
    }
  }
}
</script>
<style scoped>

  .login-wrapper {
    display: flex;
    height: 94vh;
  }

  .login-image {
    width: 100%;
    background-color: black;
  }

  .login {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input {
    width: 15rem;
    padding: .5em;
    margin: 1rem;
  }

  button {
    width: 15rem;
    height: 2rem;
  }

  .error {
    color: red;
  }
</style>

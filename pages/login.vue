<template lang="">
  <div class="login">
    <h3>Log in</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="e-mail" v-model='email'>
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model='password'>
      </div>
    <button>log in</button>
   </form>
   <div class="error" v-if="error">{{error.message}}</div>
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
    height: 1.5rem;
  }

  .error {
    color: red;
  }
</style>

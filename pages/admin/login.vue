<template>
  <div class="login-wrapper">
    <div class="login-image">
      <img src="../../assets/images/image.svg" width="75px" alt="">
    </div>
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
import { getUserFromCookie } from '@/helpers';
import firebase from 'firebase/app'
import { auth } from '~/plugins/firebase.js'
import Cookies from 'js-cookie';

export default {


  data(){
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  asyncData({req, redirect}){
    if(process.server){
      const user = getUserFromCookie(req)
      console.log(user);
      if(user){
        redirect('/admin/dashboard');
      }
    } else {
        let user = firebase.auth().currentUser;
        if(user){
        redirect('/admin/dashboard');
      }
    }
    // let user = firebase.auth().currentUser;
    // if(!user){
    //   this.$router.push('/login');
    // }
  },
  methods: {
    pressed(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(data => {
        console.log(data);
        this.$router.push('/admin/dashboard');
      }).catch(error => this.error = error);
    }
  }
}
</script>
<style scoped>

  .login-wrapper {
    display: flex;
    height: 100vh;
  }

  .login-image {
    width: 100%;
    background-color: #EDF2F7;
    display: flex;
    justify-content: center;
    align-items: center;
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

<template>
  <div>
    <div class="none">
      <div class="main">
      <div class="main-links">
        <nuxt-link to="/">Home</nuxt-link>
        <!-- <a href="http://localhost:3000/login" @click="logout" v-if="loggedIn" class="logout-link">Logout</a> -->
        <nuxt-link to="admin/login" @click.native="logout" v-if="loggedIn" class="logout-link">Log out</nuxt-link>
        <nuxt-link to="admin/login" v-else>Login</nuxt-link>
        <!-- <nuxt-link to="secret">Secret</nuxt-link> -->
      </div>
    </div>
    </div>
    <div class="viewz">
      <Nuxt />
      <!-- <NavigationBar foto spraakbericht  /> -->
    </div>
  </div>
</template>

<script>

import firebase from 'firebase/app'
import { auth } from '~/plugins/firebase.js'
import Cookies from 'js-cookie'
import NavigationBar from '@/components/ui/NavigationBar'

export default {
  components:{
    NavigationBar
  },
  mounted(){
    this.setupFirebase();
  },
  data(){
    return{
      loggedIn: false
    }
  },
  methods: {
    logout(){
      alert('test');
    },
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log('signed in')
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(token => Cookies.set('access_token', token))
          this.loggedIn = true
        } else {
          Cookies.remove('access_token')
          // No user is signed in.
          this.loggedIn = false
          console.log('signed out', this.loggedIn)
        }
      })
    },
    logout(){
      console.log('logout');
      firebase.auth().signOut().then(()=>{
        this.$router.push('/');
      })
    }
  }
}
</script>

<style>

.viewz{
  height: 100vh;
}

.none {
  display: none;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.main {
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logout-link {
  cursor: pointer;
  text-decoration: underline;
  color: #551a8b;
}
</style>

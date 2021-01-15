<template lang="">
  <div>
    <h1>Dashboard</h1>
    <nuxt-link to="admin/login" @click.native="logout"class="logout-link">Log out</nuxt-link>
  </div>
</template>
<script>
import { getUserFromCookie } from '@/helpers';
import firebase from 'firebase/app'
import { auth } from '~/plugins/firebase.js'
import Cookies from 'js-cookie'

export default {

  mounted(){
    this.setupFirebase();
  },
  data(){
    return{
      loggedIn: false
    }
  },
  asyncData({req, redirect}){
    if(process.server){
      const user = getUserFromCookie(req)
      console.log(user);
      if(!user){
        redirect('/admin/login');
      }
    } else {
        let user = firebase.auth().currentUser;
        if(!user){
        redirect('/admin/login');
      }
    }
    // let user = firebase.auth().currentUser;
    // if(!user){
    //   this.$router.push('/login');
    // }
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
<style lang="">

</style>

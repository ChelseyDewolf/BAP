<template lang="">
  <div>
    <h1>This is a secret page</h1>
  </div>
</template>
<script>
import { getUserFromCookie } from '@/helpers';
import firebase from 'firebase/app'
import { auth } from '~/plugins/firebase.js'

export default {

  asyncData({req, redirect}){
    if(process.server){
      const user = getUserFromCookie(req)
      console.log(user);
      if(!user){
        redirect('/login');
      }
    } else {
        let user = firebase.auth().currentUser;
        if(!user){
        redirect('/login');
      }
    }
    // let user = firebase.auth().currentUser;
    // if(!user){
    //   this.$router.push('/login');
    // }
  }

}
</script>
<style lang="">

</style>

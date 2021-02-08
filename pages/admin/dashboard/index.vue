<template>
  <div>
    <h1>Dashboard</h1>

      <AddBewonerForm />

    <nuxt-link to="admin/login" @click.native="logout" class="logout-link">Log out</nuxt-link>
      <ContactItem 
        v-for="bewoner in bewoners"
        :key="bewoner.id"
        :voornaam="bewoner.voornaam"
        :achternaam="bewoner.achternaam"
        :foto="bewoner.foto"
        :id="bewoner.id"
         />
  </div>
</template>


<script>
import { getUserFromCookie } from '@/helpers';
import firebase from 'firebase/app';
import Cookies from 'js-cookie'
import AddBewonerForm from '@/components/admin/forms/addBewonerForm';


export default {
  components:{
    AddBewonerForm
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
  },
  computed: {
    bewoners(){
    return this.$store.state.bewoners
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
<style lang="scss">

.toon{
  width: 10rem;
  height: 10rem;
}
</style>

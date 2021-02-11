<template>
  <div>
    <div class="dashboard-header">
      <h1>Dashboard</h1>
      <div>
        <nuxt-link to="bewoner-toevoegen" class="button">Bewoner toevoegen</nuxt-link>
        <nuxt-link to="admin/login" @click.native="logout" class="logout-link button">Log out</nuxt-link>
      </div>
    </div>
    <article class="bewoners-wrapper">
    <h2>Bewoners</h2>
    <div class="bewoners">
      <ContactItem
        v-for="bewoner in bewoners"
        :key="bewoner.id"
        :voornaam="bewoner.voornaam"
        :achternaam="bewoner.achternaam"
        :foto="bewoner.foto"
        :id="bewoner.id"
        :verdiep="bewoner.verdiep"
         />
    </div>
    </article>
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

.viewz {
  height: 100vh;
}

.toon{
  width: 10rem;
  height: 10rem;
}

.bewoners-wrapper {
  position: absolute;
  bottom: 0;
}

.bewoners-wrapper h2{
  padding-left: 1rem;
}

.bewoners {
  display: flex;
  flex-wrap: wrap;
}

.button {
  position:relative;
  text-align:center;
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  background-color:#F6C945;
  color:#FFFFFF;
  font-weight:400;
  text-transform: uppercase;
  text-decoration:none;
  box-sizing: border-box;
  padding:0.7em 1.4em;
  display:inline-block;
  margin:0 0.3em 0.3em 0;
  border-radius:0.3rem;
  font-family:'Roboto',sans-serif;
  font-weight: bolder;
}

.logout-link {
  background-color: darkgray;
}

.button:active{
 top:0.1em;
}

.dashboard-header {
  padding-top: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>

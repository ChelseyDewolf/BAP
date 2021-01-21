<template>
  <div>
    <h1>Dashboard</h1>
    <nuxt-link to="admin/login" @click.native="logout" class="logout-link">Log out</nuxt-link>
      <ContactItem 
        v-for="bewoner in bewoners"
        :key="bewoner.id"
        :voornaam="bewoner.voornaam"
        :achternaam="bewoner.achternaam"
        :id="bewoner.id"
         />

      <form @submit.prevent="sub">

            <div class="form-group mt-5">  

              <input type="text" placeholder="Add a Todo" class="form-control" v-model="bewoner">

              <button type="submit" class="btn btn-outline-primary mt-3">Add Todo</button>
            </div>
          </form>

  </div>
</template>


<script>
import { getUserFromCookie } from '@/helpers';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { auth } from '~/plugins/firebase.js'
import Cookies from 'js-cookie'
import ContactItem from '@/components/admin/ContactItem';

export default {
  mounted(){
    this.setupFirebase();
    firebase.firestore().collection('bewoners').get().then((res) => {
      res.forEach(x => {
        const orgData = ({ id: x.id, ...x.data() });
        this.$store.commit('setBewoner', orgData);
      })
    });
  },
  data(){
    return{
      loggedIn: false,
      bewoner: ''
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
    },
    sub(){
     if(this.bewoner){
           firebase.firestore().collection('bewoners').add({
           }).then((res) => {
             firebase.firestore().collection('bewoners').doc(res.id).set({
               bewoner: this.bewoner,
               id: res.id
             }).then(() => {
                this.$store.commit('addBewoner',({bewoner: this.bewoner, id: res.id}) )
                this.bewoner = ""
             })
           })
     }
   },
     removeBewoner(bewoner, index){
       firebase.firestore().collection('bewoners').doc(bewoner.id).delete().then(() => {
         console.log('successfully deleted document')
         this.$store.commit('removeBewoner', index)
       })

     }
  }
}
</script>
<style lang="">

</style>

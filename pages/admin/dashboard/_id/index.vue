<template class="view">
    <div class="profiel-wrapper">
        <section class="single-movie">
          <article class="info">
              <img :src="`${bewoner.foto}`" height="150px" alt="" srcset="">
              <p class="">{{ bewoner.voornaam }} {{ bewoner.achternaam }}</p>
          </article>

          <article class="info-algemeen">
            <h2>Algemene info</h2>
                <p>Floor {{bewoner.verdiep}}</p>
                <p>Geboortedatum {{bewoner.geboortedatum}}</p>
          </article>

          <article class="id">
            <img src="" alt="">
          </article>
                 <!-- <Test
                    v-for="contact in contacten"
                    :key="contact.id"
                    :voornaam="contact.voornaam"
                    :id="contact.id"
                  /> -->
                <!-- <nuxt-link :to="'/bewoner/' + bewoner.id">Naar app</nuxt-link> -->
                <div class="buttons">
                  <nuxt-link :to="'/bewoner/' + bewoner.id"><button @click="loadBewoner(bewoner.id)">Ga naar bewoner app</button></nuxt-link>
                  <button @click="removeBewoner()">verwijder</button>
                </div>
        </section>
        <div class="qr-wrapper">
          <div class="qr"></div>
          <p class="detail">{{bewoner.id}}</p>
        </div>
    </div>
</template>

<style>
    .single-movie{
        display: flex;
        justify-content: space-between;
        padding: 3rem;
        flex-flow: column;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        width: 20%;
        height: 96vh;
        -webkit-box-shadow: 0px 0px 10px -2px #000000;
        box-shadow: 0px 0px 10px -2px #000000;
      }

        .view{
         height: 100vh;

        }

        .tekst{
            width: 20rem;
        }

        .detail{

        }

        .movie-thumb{
            width: 80%;
            margin: auto;
            }

        .info img{
          border-radius: 100rem;
          width: 150px;
          /* border: solid 3px black; */
        }

        .info p {
          font-size: 1.6rem;
        }

        .info-algemeen h2 {}

        .profiel-wrapper {
          display: flex;
          padding: 1rem;
        }

        .qr-wrapper {
          border-radius: 1rem;
          padding: 3rem;
          text-align: center;
          height: 22rem;
          margin-left: 1rem;
          -webkit-box-shadow: 0px 0px 10px -2px #000000;
          box-shadow: 0px 0px 10px -2px #000000;
        }

        .detail {
          padding-top: 0.5rem;
        }

        .qr {
          width: 15rem;
          height: 15rem;
          background-image: url(https://www.gravatar.com/205e460b479e2e5b48aec07710c08d50.qr?s=150);
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 1rem;
        }
</style>

<script>

import firebase from 'firebase/app';
import 'firebase/firestore';

let kaas = [];
export default {

    mounted(){
    // this.setupFirebase();
    // firebase.firestore().collection('bewoners').doc(this.$route.params.id).collection('contacten')
    // console.log(this.$route.params.id);
    // firebase.firestore().collection('bewoners').doc(this.$route.params.id).collection('contacten').get().then((res) => {
    //   res.forEach(x => {
    //     const orgData = ({ id: x.id, ...x.data() });
    //     this.$store.commit('setContacts', orgData);
    //     // console.log(x.data());
    //   })
    // });
    // console.log(this.$store.state.contacten);
  },

    components:{
    },
        props: ['qr', 'title', 'previewText', 'id'],

    computed: {
    // contacten(){
    // return this.$store.state.contacten
    //   }
  },

    data(){
        return{
        pageId: this.$route.params.slug,
        }
    },
    methods: {
        removeBewoner(){
        firebase.firestore().collection('bewoners').doc(this.$route.params.id).delete().then(() => {
        console.log('successfully deleted document')
        })
         this.$store.commit('removeBewoner', this.$route.params.id)

            this.$router.push({
                path: '/admin/dashboard'
            })
        },
        loadBewoner(id){
          this.$store.commit('clearContact');
          this.$store.commit('clearPosts');
          this.$store.commit('setCurrentUser', id);
          firebase.firestore().collection('bewoners').doc(id).collection('contacten').get().then((res) => {
            res.forEach((contact) => {
              const orgData = { id: contact.id, ...contact.data() }
              this.$store.commit('setContact', orgData);
            })
             console.log(this.$store.state.currentContacts);
        })
        firebase.firestore().collection('bewoners').doc(id).collection('posts').get().then((res) => {
            res.forEach((post) => {
              const orgData = { id: post.id, ...post.data() }
              this.$store.commit('setPosts', orgData);
            })
             console.log(this.$store.state.currentPosts);
        })
        // this.$store.commit('setContact', id);
        }
      //   getContacts(){
      //     //  const contacten = firebase.firestore().collection('bewoners').doc(this.$route.params.slug).collection('conacten').get().then(() => {console.log(contacten);})
      //      const contacten = firebase.firestore().collection('bewoners').doc(this.$route.params.slug).collection('conacten').get().then((res) => {
      //       res.forEach((x) => {
      //       const orgData = { id: x.id, ...x.data() }
      //       commit('setContacts', orgData)
      //   })
      // })
      //   }
    },

        asyncData(context){


        return new Promise((resolve, reject) =>{

            setTimeout(() => {
                resolve({

                    bewoner: context.store.state.bewoners.find(el => el.id === context.params.id)

                })
            })
        })
    }
}
</script>

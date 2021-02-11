<template>
<div class="page-wrapper">
  <h1 class="contacten-title">Contacten</h1>
    <div class="contacten-wrapper">
        <Test
          v-for="contact in contacten"
          :key="contact.id"
          :voornaam="contact.voornaam"
          :id="contact.id"
        />
    </div>
     <NavigationBar bellen videobellen bericht foto spraakbericht  />
  </div>
</template>

<script>

import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  components: {

  },
  props: [
  ],
  data () {
    return {
      pageId: this.$route.params.slug,
    }
  },
  mounted () {
    console.log(this.$route.params.id);
    firebase.firestore().collection('bewoners').doc(this.$route.params.id).collection('contacten').get().then((res) => {
      res.forEach(x => {
        const orgData = ({ id: x.id, ...x.data() });
        this.$store.commit('setContacts', orgData);
      })
    });
    console.log(this.$store.state.contacten);
  },
  created () {
  },
  computed: {
    contacten(){
      return this.$store.state.contacten
      }
  },
  methods: {
  },
  watch: {
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

<style scoped lang="scss">
  .contacten-title {
    text-align: center;
  }
  .contacten-wrapper {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>

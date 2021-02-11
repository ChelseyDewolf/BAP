<template>
  <!-- <NavigationBar bellen videobellen bericht foto spraakbericht  /> -->
  <div class="bg">
    <div class="textWrapper">
      <h1>👋 Goeiemorgen {{bewoner.voornaam}}!</h1>
      <h2>Wie wil je vandaag contacteren?</h2>
    </div>
    <div class="menuWrapper">
      <div class="coreFunction__wrapper">
        <div class="coreFunction" @click="clickedNews()"></div>
        <p>Nieuws</p>
      </div>
      <div class="coreFunction__wrapper">
        <nuxt-link :to="'/bewoner/contacts/' + bewoner.id">
          <div class="coreFunction" @click="clickedContacts()"></div>
          <p>Contacten</p>
        </nuxt-link>
      </div>
      <div class="coreFunction__wrapper">
        <span class="messageCounter">3</span>
        <div class="coreFunction" @click="clickedMessages()"></div>
        <p>Berichten</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/ui/NavigationBar'
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

  },
  created () {
  },
  computed: {
  },
  methods: {
    clickedNews(){
        this.$store.commit('news')
    },
    clickedContacts(){
        this.$store.commit('contacts')
    },
    clickedMessages(){
        this.$store.commit('messages')
    }
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

<style>
  .bg{
    height: 100vh;
    background-color: #554CCB;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }

  .textWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-bottom: 5rem;
    font-size: 1.5rem;
    color: white;
  }
  .coreFunction {
    width: 15rem;
    height: 15rem;
    background-color: #F6C945;
    border-radius: 0.5rem;
  }

  .coreFunction:hover{
    cursor: pointer;
  }

  .menuWrapper {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .coreFunction__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 0 2rem;
  }

  .coreFunction__wrapper p {
    padding-top: 1rem;
    font-size: 2rem;
    color: white;
    font-weight: bolder;
  }

  .messageCounter {
    color: white;
    font-size: 2rem;
    font-weight: bolder;
    width: 4rem;
    height: 4rem;
    background-color:#372EB4;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 10rem;
    position: absolute;
    bottom: 30.5rem;
    left: 76rem;
  }
</style>

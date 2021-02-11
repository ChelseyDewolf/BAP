<template>
  <!-- <NavigationBar bellen videobellen bericht foto spraakbericht  /> -->
  <div class="bg">
    <div class="textWrapper">
      <h1>👋 Goeiemorgen Louis!</h1>
      <h2>Wie wil je vandaag contacteren?</h2>
    </div>
    <div class="menuWrapper">
      <div class="coreFunction__wrapper">
        <div class="coreFunction" @click="clickedNews()">
          <div class="nieuws"></div>
        </div>
        <p>Nieuws</p>
      </div>
      <div class="coreFunction__wrapper">
        <div class="coreFunction" @click="clickedContacts()">
          <div class="contacten"></div>
        </div>
        <p>Contacten</p>
      </div>
      <div class="coreFunction__wrapper">
        <span class="messageCounter">3</span>
        <div class="coreFunction" @click="clickedMessages()">
           <div class="berichten"></div>
        </div>
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
  }
}
</script>

<style scoped>
  .bg{
    height: 100vh;
    background-color: #554CCB;
    background-image: url('../../assets/images/home-backgrounds.svg');
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

  .nieuws {
    background-image: url(../../assets/images/nieuws.svg);
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    margin-left: 35%;
    margin-top: 32%;
  }
  .contacten {
    background-image: url(../../assets/images/contacten.svg);
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    margin-left: 32%;
    margin-top: 35%;
  }
  .berichten {
    background-image: url(../../assets/images/berichtjes.svg);
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    margin-left: 35%;
    margin-top: 30%;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: normal;
  }
</style>

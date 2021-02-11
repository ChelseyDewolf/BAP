<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div class="picture">
        <div class="profile-wrapper">
          <div class="profile-pic">
            <img src="https://gravatar.com/avatar/7c4307327e4940b99fb1d2c49cbf59a9?s=200&d=mp&r=x" width="150" height="150">
            <div class="profile-content">
              <h3>Anton Pycarelle</h3>
              <span>Donderdag 18:43</span>
            </div>
          </div>
        </div>
      </div>
      <div class="picture">
        <div class="profile-wrapper">
          <div class="profile-pic">
            <img src="https://gravatar.com/avatar/7c4307327e4940b99fb1d2c49cbf59a9?s=200&d=mp&r=x" width="150" height="150">
            <div class="profile-content">
              <h3>Chelsey Dewolf</h3>
              <span>Donderdag 18:43</span>
            </div>
          </div>
          <div class="textt">
              <p>Dag opa, alles goed? <br/> Is het goed dat we morgen langskomen?</p>
          </div>
        </div>
      </div>
      <div class="purple">
        <div class="bg__zonder-tekst profile-wrapper">
          <div class="profile-pic">
            <img src="https://gravatar.com/avatar/7c4307327e4940b99fb1d2c49cbf59a9?s=200&d=mp&r=x" width="150" height="150">
            <div class="profile-content">
              <h3>Aline Bossuyt</h3>
              <span>Woensdag 12:33</span>
            </div>
          </div>
          <div class="text-wrapper">
              <p>Dag opa, alles goed? <br/> Hier is een leuke foto van ons op reis!</p>
          </div>
        </div>
      </div>
      <div class="purple">
        <div class="bg__zonder-tekst profile-wrapper">
          <div class="profile-pic">
            <img src="https://gravatar.com/avatar/7c4307327e4940b99fb1d2c49cbf59a9?s=200&d=mp&r=x" width="150" height="150">
            <div class="profile-content">
              <h3>Ashley Stoepker</h3>
              <span>Dinsdag 09:20</span>
            </div>
          </div>
          <div class="audio-wrapper">
           <audio controls></audio>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <NavigationBar bellen videobellen bericht foto spraakbericht  />
  </div>
</template>

<script>
import NavigationBar from '@/components/ui/NavigationBar'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  props: [
  ],
  data () {
    return {
      settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          speed: 1000,
          cssEase: 'linear',
          arrows: false,
        }
    }
  },
  mounted () {
  },
  created () {
  },
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style scoped>
  .picture{
    background-color: red;
    /* height: calc(100vh - 140px); */
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    height: 90vh;
    max-width: 100vw;
  }

  .profile-pic {
    display: flex;
    align-items: center;
    color: white;
    padding: 1rem 1rem;
  }

  .profile-pic img{
     border-radius: 100%;
  }

  .profile-pic h3 {
    font-size: 2rem;
  }

  .profile-pic span {
    font-size: 1.5rem;
  }

  .profile-content {
    padding-left: 1rem;
  }

  .textt{
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 3rem;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.3);
    max-width: 70%;
    margin: 27rem auto 0 auto;
    border-radius: 0.5rem;
  }

  .text-wrapper {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 12%;
  }

  .bg__zonder-tekst {
    background-color: transparent;
    background-image: url('../../assets/images/bg-zonder-tekst.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    max-width: 100vw;
    background-position-y: -8rem;
  }

  .purple {
    background-color: #766edb;
  }

  .audio-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 13%;
  }
</style>

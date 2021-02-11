<template>
<div class="berichten-wrapper">
  <h1>Berichten</h1>
  <div class="slider-wrapper">
    <VueSlickCarousel v-bind="settings">
       <Contact naam="Chelsey Dewolf"
      actief="Heel actief"
      foto="https://source.unsplash.com/random"
      id="test"
       />
       <Contact naam="Anton Pycarelle"
      actief="Heel actief"
      foto="https://source.unsplash.com/random"
      id="testt"
       />
       <Contact naam="Aline Bossuyt"
      actief="Heel actief"
      foto="https://source.unsplash.com/random"
      id="test4"
       />
       <Contact naam="Ashley Stoepker"
      actief="Heel actief"
      foto="https://source.unsplash.com/random"
      id="test9"
       />
       <Contact naam="John Doe"
      actief="Heel actief"
      foto="https://source.unsplash.com/random"
      id="test12"
       />

      <!-- <template #prevArrow="ar drowOption">
        <div class="custom-arrow">
          {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          <div class="navArrows left"></div>
        </div>
      </template> -->
    </VueSlickCarousel>
     <NavigationBar bellen videobellen bericht foto spraakbericht  />
  </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import NavigationBar from '@/components/ui/NavigationBar'
  import Contact from '../../components/bewoner/Contact'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel, Contact },
    mounted(){

    // const card = document.querySelector('.slick-current', '.card');
    // const getFocusedCard = card.children;
    // const focusedCard = getFocusedCard[0].children;
    // focusedCard[0].style.backgroundColor = "white"

    // const $body = document.querySelector('body');
    // console.log($body);
    // $body.addEventListener("click", function(){

    // });


    },
    data() {
      return {
        settings: {
          centerMode: true,
          centerPadding: "100px",
          focusOnSelect: true,
          infinite: true,
          slidesToShow: 3,
          speed: 500,
          arrows: false,
        }
      }
    },
    methods: {

    },
  }
</script>

<style scoped>
  .berichten-wrapper {
    background-color: #766EDB;
    background-image: url(../../assets/images/berichten.svg);
    background-size: cover;
    height: 85vh;
  }

  .slider-wrapper {
    padding-top: 5rem;
  }

  h1 {
    font-size: 3rem;
    color: white;
    text-align: center;
    padding-top: 3rem;
  }

</style>

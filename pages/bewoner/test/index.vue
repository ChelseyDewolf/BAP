<template>
  <div class="slider-wrapper">
    <VueSlickCarousel v-bind="settings">
       <Contact naam="Chelsey Dewolf"
      actief="Heel actief"
      foto="https://source.unsplash.com/random"
      id="test"
       />
       <Contact naam="Chelsey Dewolf"
      actief="Heel actief"
      foto="https://source.unsplash.com/random"
      id="testt"
       />
       <Contact naam="Chelsey Dewolf"
      actief="Heel actief"
      foto="https://source.unsplash.com/random"
      id="test4"
       />
       <Contact naam="Chelsey Dewolf"
      actief="Heel actief"
      foto="https://source.unsplash.com/random"
      id="test9"
       />
       <Contact naam="Chelsey Dewolf"
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
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import NavigationBar from '@/components/ui/NavigationBar'
  import Contact from '../../../components/bewoner/Contact'

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
  .viewz {
    background-color: #766EDB;
  }

  .slider-wrapper {
    padding-top: 10rem;
  }
</style>

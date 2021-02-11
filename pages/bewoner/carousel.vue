<template>
  <div>
    <!-- <carousel>

    <img src="https://placeimg.com/200/200/any?1">

    <img src="https://placeimg.com/200/200/any?2">

    <img src="https://placeimg.com/200/200/any?3">

    <img src="https://placeimg.com/200/200/any?4">

</carousel> -->
    <!-- <div class="scrolling-wrapper">
      <div class="card"><h2>Card</h2></div>
      <div class="card"><h2>Card</h2></div>
      <div class="card"><h2>Card</h2></div>
      <div class="card"><h2>Card</h2></div>
      <div class="card"><h2>Card</h2></div>
      <div class="card"><h2>Card</h2></div>
      <div class="card"><h2>Card</h2></div>
      <div class="card"><h2>Card</h2></div>
      <div class="card"><h2>Card</h2></div>
  </div> -->
    <NavigationBar bellen videobellen bericht foto spraakbericht  />
  </div>
</template>

<script>
import NavigationBar from '@/components/ui/NavigationBar'
// import carousel from 'vue-owl-carousel'
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
  },
  watch: {
  },
  // head () {
  //   return {
  //     link: [
  //       { rel: 'stylesheet', href: 'owlcarousel/owl.carousel.min.css' },
  //       { rel: 'stylesheet', href: 'owlcarousel/owl.theme.default.min.css' }
  //     ]
  //   }
  // }
}
</script>


<style scoped>

  .scrolling-wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}

.scrolling-wrapper::-webkit-scrollbar {
    display: none;
  }

.card {
    display: inline-block;
    width: 30rem;
    height: 30rem;
    background-color: red;
  }

  .card:first-child{
    margin-left: 40rem;
  }
</style>

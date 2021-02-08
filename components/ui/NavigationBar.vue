<template>
    <div class="navBarWrapper">
        <div class="nav-home">
            <button @click="clickedHome()" class="navArrows">Home</button>
        </div>

        <div class="nav-functions">
            <div :class='`${((!bellen) ? "funcHide" : "")}`'>
                <nuxt-link to="">Bellen</nuxt-link>
            </div>


            <div :class='`${((!videobellen) ? "funcHide" : "")}`'>
                <nuxt-link to="">Videobellen</nuxt-link>
            </div>


            <div :class='`${((!bericht) ? "funcHide" : "")}`'>
                <nuxt-link to="">Bericht</nuxt-link>
            </div>


            <div :class='`${((!spraakbericht) ? "funcHide" : "")}`'>
                <nuxt-link to="">Spraakbericht</nuxt-link>
            </div>

            
            <div :class='`${((!foto) ? "funcHide" : "")}`'>
                <nuxt-link to="">Foto/Video</nuxt-link>
            </div>
        </div>

        <div class="navArrowsWrapper">

                <button @click="clickedPrevCarousel()" class="navArrows">Left</button>
                <button @click="clickedNextCarousel()" class="navArrows">Right</button>

        </div>
        
    </div>
</template>

<script>
import firebase from 'firebase/app';
console.log("nav");
export default {
   props: {
    bellen: Boolean,
    videobellen: Boolean,
    bericht: Boolean,
    spraakbericht: Boolean,
    foto: Boolean
   },
  methods: {
    logout(){
      alert('test');
    },
    clickedNextCarousel() {
        this.$store.commit('nextCarousel')
        console.log(this.$store.state.carouselPosition);
    },
    clickedPrevCarousel() {
        this.$store.commit('prevCarousel')
        console.log(this.$store.state.carouselPosition);
    },
    clickedHome(){
        this.$store.commit('resetCarousel')
    }
}
}
</script>

<style>
.funcHide{
    display: none;
}

.nav-functions{
    display: flex;
}

.navBarWrapper{
    height: 10vh;
    position: fixed;
    background-color: aqua;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    bottom: 0;
    width: 100%;
}
.navArrows{
    height: 5rem;
    width: 5rem;
    background-color: rgb(173, 40, 40);

}
.navArrowsWrapper{
    display: flex;
    flex-direction: row;
}


</style>
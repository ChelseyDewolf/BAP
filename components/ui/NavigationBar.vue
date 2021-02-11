<template>
    <div class="navBarWrapper">
        <div class="nav-home">
            <div class="test">
                    <div @click="clickedHome()" class="navArrows home"></div>
                    <p>Start</p>
                 </div>
        </div>

        <div class="nav-functions">
          <div :class='`${((!voice) ? "funcHide" : "")}`'>
                <!-- <nuxt-link to="">Bellen</nuxt-link> -->
                <div class="test">
                    <div @click="clickedHome()" class="navArrows voice"></div>
                    <p>Start opname</p>
                 </div>
            </div>
            <div :class='`${((!bellen) ? "funcHide" : "")}`'>
                <!-- <nuxt-link to="">Bellen</nuxt-link> -->
                <div class="test">
                    <div @click="clickedBellen()" class="navArrows bellen"></div>
                    <p>Bellen</p>
                 </div>
            </div>


            <div :class='`${((!videobellen) ? "funcHide" : "")}`'>
                <!-- <nuxt-link to="">Videobellen</nuxt-link> -->
                <div class="test">
                    <div @click="clickedVideobellen()" class="navArrows video"></div>
                    <p>Videobellen</p>
                 </div>
            </div>


            <div :class='`${((!bericht) ? "funcHide" : "")}`'>
                <!-- <nuxt-link to="">Bericht</nuxt-link> -->
                <div class="test">
                    <div @click="clickedHome()" class="navArrows text"></div>
                    <p>Bericht</p>
                 </div>
            </div>


            <div :class='`${((!spraakbericht) ? "funcHide" : "")}`'>
                <!-- <nuxt-link to="">Spraakbericht</nuxt-link> -->
                 <div class="test">
                    <div @click="clickedSpraakbericht()" class="navArrows mic"></div>
                    <p>Spraakbericht</p>
                 </div>
            </div>


            <div :class='`${((!foto) ? "funcHide" : "")}`'>
                <!-- <nuxt-link to="">Foto/Video</nuxt-link> -->
                  <div class="test">
                    <div @click="clickedPhoto()" class="navArrows photo"></div>
                    <p>Foto/Video</p>
                 </div>
            </div>

            <div :class='`${((!startGesprek) ? "funcHide" : "")}`'>
                <!-- <nuxt-link to="">Foto/Video</nuxt-link> -->
                  <div class="test">
                    <div @click="clickedStartGesprek()" class="navArrows startGesprek"></div>
                    <p>Start gesprek</p>
                 </div>
            </div>
            <div :class='`${((!ophangen) ? "funcHide" : "")}`'>
                <!-- <nuxt-link to="">Foto/Video</nuxt-link> -->
                  <div class="test">
                    <div @click="clickedHome()" class="navArrows ophangen"></div>
                    <p>Ophangen</p>
                 </div>
            </div>
        </div>

        <div class="navArrowsWrapper">
                <div class="test">
                <div @click="clickedPrevCarousel()" class="navArrows left"></div>
                </div>
                <div class="test">
                <div @click="clickedNextCarousel()" class="navArrows right"></div>
                </div>

        </div>

    </div>
</template>

<script>
import firebase from 'firebase/app';
export default {
   props: {
    bellen: Boolean,
    videobellen: Boolean,
    bericht: Boolean,
    spraakbericht: Boolean,
    foto: Boolean,
    voice: Boolean,
    startGesprek: Boolean,
    ophangen: Boolean,
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
    },
    clickedSpraakbericht(){
        this.$store.commit('setSpraakbericht')
    },
    clickedVideobellen(){
        this.$store.commit('setVideobellen')
    },
    clickedStartGesprek(){
      this.$store.commit('setStartGesprek')
    },
    clickedPhoto(){
      this.$store.commit('setPhoto')
    },
    clickedBellen(){
      this.$store.commit('setBellen')
    },
}
}
</script>

<style>
.funcHide{
    display: none;
}

.nav-home {
  padding-left: 2rem;
}

.nav-functions{
    display: flex;
    justify-content: space-around;
}

/* .nav-functions div {
    height: 5rem;
    width: 5rem;
    background-color: #FFC567;
} */

.navBarWrapper{
    height: 15vh;
    position: fixed;
    background-color: #3E35B4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    bottom: 0;
    width: 100vw;
}
.navArrows{
    height: 5rem;
    width: 5rem;

}
.navArrowsWrapper{
    padding-right: 2rem;
    display: flex;
    flex-direction: row;
}

.test{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0 1rem;
}

.test:hover {
  cursor: pointer;
}

.test p {
  color: white;
  font-weight: 600;
}

.bellen {
  background-image: url('../../assets/images/test.svg');
  background-size: cover;
}

.video{
  background-image: url('../../assets/images/video.svg');
  background-size: cover;
}

.text{
  background-image: url('../../assets/images/text.svg');
  background-size: cover;
}

.mic{
  background-image: url('../../assets/images/mic.svg');
  background-size: cover;
}

.photo{
  background-image: url('../../assets/images/photo.svg');
  background-size: cover;
}

.startGesprek{
  background-image: url('../../assets/images/startGesprek.png');
  background-size: cover;
}

.ophangen{
  background-image: url('../../assets/images/afleggen.svg');
  background-size: cover;
}

.home{
  background-image: url('../../assets/images/home.svg');
  background-size: cover;
  width: 4.5rem;
  height: 4.5rem;
  padding-bottom: 5rem;
}

.left {
  background-image: url('../../assets/images/arrowLeft.svg');
  background-size: cover;
  width: 4.5rem;
  height: 4.8rem;
}

.right {
  background-image: url('../../assets/images/arrowRight.svg');
  background-size: cover;
  width: 4.5rem;
  height: 4.8rem;
}

.voice {
  background-image: url('../../assets/images/spraakbericht.svg');
  background-size: cover;
}




</style>

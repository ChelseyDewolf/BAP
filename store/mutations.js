import Vue from 'vue'
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default {

    addBewoner(state,payload){
       state.bewoners.push({bewoner: payload.bewoner, id: payload.id}) 
    },

    setBewoner(state, payload){
      state.bewoners.push(payload);
    },


    prevCarousel(state){
      if (state.carouselPosition <= 0) {
        state.carouselPosition = 0
      } else {
        state.carouselPosition--
      }
    },

    nextCarousel(state){
      state.carouselPosition++
    },

    resetCarousel(state){
      state.carouselPosition = 0;
      this.$router.push({
        path: '/admin/dashboard'
    })
    },

   
    removeBewoner(state, index){
      let fromIndex = state.bewoners.find(el => el.id === index)

      // var desertRef = storageRef.child(fromIndex.foto);

      // // Delete the file
      // desertRef.delete().then(() => {
      //   // File deleted successfully
      //   console.log("gelukt");
      // }).catch((error) => {
      //   // Uh-oh, an error occurred!
      //   console.log("nie gelukt");
      // });


      // console.log(fromIndex);
      let bewonerIndex = state.bewoners.indexOf(fromIndex, 0)
      // console.log(bewonerIndex);
        Vue.delete(state.bewoners, bewonerIndex)
    }
    
}
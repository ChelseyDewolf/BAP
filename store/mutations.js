import Vue from 'vue'
// import * as firebase from 'firebase/app'
import { firebase } from '@firebase/app'
import 'firebase/firestore'

export default {
  addBewoner(state, payload) {
    state.bewoners.push({ bewoner: payload.bewoner, id: payload.id })
  },

  setBewoner(state, payload) {
    state.bewoners.push(payload)
  },

  setContact(state, payload) {
    // state.currentContacts = []
    state.currentContacts.push(payload)
  },

  setCurrentUser(state, payload) {
    // state.currentContacts = []
    state.currentUser = payload
  },

  setPosts(state, payload) {
    state.currentPosts.push(payload)
  },

  clearPosts(state, payload) {
    state.currentPosts = []
  },

  clearContact(state, payload) {
    state.currentContacts = []
  },

  setContacts(state, payload) {
    state.contacten.push(payload)
  },

  prevCarousel(state) {
    if (state.carouselPosition <= 0) {
      state.carouselPosition = 0
    } else {
      state.carouselPosition--
    }
  },

  nextCarousel(state) {
    state.carouselPosition++
  },

  resetCarousel(state) {
    state.carouselPosition = 0
    this.$router.push({
      path: '/bewoner',
    })
  },

  setSpraakbericht(state) {
    this.$router.push({
      path: '/bewoner/voice-record',
    })
  },

  setVideobellen(state) {
    this.$router.push({
      path: '/bewoner/videobellen',
    })
  },

  setStartGesprek(state) {
    this.$router.push({
      path: '/bewoner/videobellen/call',
    })
  },

  setPhoto(state) {
    this.$router.push({
      path: '/bewoner/foto',
    })
  },

  setBellen(state) {
    this.$router.push({
      path: '/bewoner/bellen',
    })
  },

  news(state) {
    state.carouselPosition = 0
    this.$router.push({
      path: '/bewoner/nieuws-pagina',
    })
  },
  contacts(state) {
    state.carouselPosition = 0
    this.$router.push({
      path: '/bewoner/contacten',
    })
  },
  messages(state) {
    state.carouselPosition = 0
    this.$router.push({
      path: '/bewoner/berichten',
    })
  },

  removeBewoner(state, index) {
    let fromIndex = state.bewoners.find((el) => el.id === index)

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
  },
}

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

   
    removeBewoner(state, index){
        Vue.delete(state.bewoners, index)
    }
    
}
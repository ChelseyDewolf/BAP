// import axios from "axios/index";
import firebase from 'firebase/app';

export const actions = {
    async nuxtServerInit ({ commit, req, redirect }) {
        return firebase.firestore().collection('bewoners').get().then((res) => {
            res.forEach(x => {
              const orgData = ({ id: x.id, ...x.data() });
              commit('setBewoner', orgData);
            })
          });
    }
};
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCVrl9kg-kL85pAGtSQ19hpteCQjIKAEf0',
  authDomain: 'bachelorproef-b770d.firebaseapp.com',
  projectId: 'bachelorproef-b770d',
  storageBucket: 'bachelorproef-b770d.appspot.com',
  messagingSenderId: '71550202422',
  appId: '1:71550202422:web:88459119ff499f3f9b9e97',
}
// Initialize Firebase
let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}




const usersCollection = firebase.firestore().collection('bewoners');

// export const createUser = user => {
//   return usersCollection.add(user)
// }

// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }

// export const deleteUser = id => {
//   return usersCollection.doc(id).delete()
// }

export const addBewonerDb = () => {
  
}

// export const useLoadUsers = () => {
//   const users = ref([]);
//   const close = usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//   })
//   onUnmounted(close)
//   return users
// }

export const auth = firebase.auth()
export default firebase

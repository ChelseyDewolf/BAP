import firebase from 'firebase/app'
import 'firebase/auth'

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

export const auth = firebase.auth()
export default firebase

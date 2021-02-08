<template>
        <form @submit.prevent="sub">
          <p>{{ this.bewonerKey }}</p>
        <img :src="`${((!foto.imageUrl) ? 'https://source.unsplash.com/random' : foto.imageUrl)}`"  alt="" class="toon" v-model="foto">
                  <button
                    v-if="!foto.imageUrl"
                    @click="launchImageFile"
                    :disabled="isUploadingImage"
                    type="button"
                  >
                    {{ isUploadingImage ? 'Uploading...' : 'Upload' }}
                  </button>
                  
                  <!-- This is the real file input element. -->
                  <input
                    ref="imageFile"
                    @change.prevent="uploadImageFile($event.target.files)"
                    type="file"
                    accept="image/png, image/jpeg"
                    class="hidden">

            <div class="form-group mt-5">   
              <input type="text" placeholder="voornaam" class="form-control" v-model="voornaamFrom">
              <input type="text" placeholder="achternaam" class="form-control" v-model="achternaamForm">
              <input type="text" placeholder="verdiep" class="form-control" v-model="verdiepFrom">
              <input type="text" placeholder="geboorte" class="form-control" v-model="geboorteFrom">
            </div>
            <div class="form-group mt-5">   
              <input type="text" placeholder="voornaam" class="form-control" v-model="voornaamBevoegdeForm">
              <input type="text" placeholder="achternaam" class="form-control" v-model="achternaamBevoegdeForm">
              <input type="text" placeholder="email" class="form-control" v-model="emailBevoegdeForm">
              <input type="text" placeholder="cell" class="form-control" v-model="cellBevoegdeForm">
            </div>
            <button type="submit" class="btn btn-outline-primary mt-3">Bewoner Toevoegen</button>
      </form>

</template>

<script>
import { getUserFromCookie } from '@/helpers';
import firebase from 'firebase/app';
import 'firebase/firestore';


export default {
    components:{
    },
  data(){
    return{
      loggedIn: false,
      voornaamFrom: '',
      achternaamForm: '',
      verdiepFrom: '',
      geboorteFrom: '',
      voornaamBevoegdeForm: '',
      achternaamBevoegdeForm: '',
      emailBevoegdeForm: '',
      cellBevoegdeForm: '',
      imageUrl: '',
      image: null,
      foto: {},
      isUploadingImage: false,
      isDeletingImage: false,
      bewonerKey: ''
    }
  },
  asyncData({req, redirect}){
    if(process.server){
      const user = getUserFromCookie(req)
      console.log(user);
      if(!user){
        redirect('/admin/login');
      }
    } else {
        let user = firebase.auth().currentUser;
        if(!user){
        redirect('/admin/login');
      }
    }
  },
  methods: {
      uploadImageFile (files) {
        if (!files.length) {
          return
        }
        const file = files[0]
        if (!file.type.match('image.*')) {
          alert('Please upload an image.')
          return
        }

        const metadata = {
          contentType: file.type
        }

        this.isUploadingImage = true

        // Create a reference to the destination where we're uploading
        // the file.
        const storage = firebase.storage()
        const imageRef = storage.ref(`bewoners/${file.name}`)

        const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
          // Once the image is uploaded, obtain the download URL, which
          // is the publicly accessible URL of the image.
          return snapshot.ref.getDownloadURL().then((url) => {
            return url
          })

        }).catch((error) => {
          console.error('Error uploading image', error)
        })

        // When the upload ends, set the value of the foto image URL
        // and signal that uploading is done.
        uploadTask.then((url) => {
          this.foto.imageUrl = url
          this.isUploadingImage = false
        })
      },
      launchImageFile () {
      // Trigger the file input click event.
      this.$refs.imageFile.click()
      },
      onPickFile () {
        this.$refs.fileInput.click()
      },
      onFilePicked (event) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      },
    logout(){
      alert('test');
    },
    sub(){
     if(this){
           firebase.firestore().collection('bewoners').add({
           })
           
           .then((res)=> {
              if (!this.foto.imageUrl) {
                this.foto.imageUrl = "https://source.unsplash.com/random"
              }

                let key = res.id,
                bewonerKey = key
                return key
           })
           .then((key) => {
             firebase.firestore().collection('bewoners').doc(key).set({
               voornaam: this.voornaamFrom,
               achternaam: this.achternaamForm,
               verdiep: this.verdiepFrom,
               geboortedatum: this.geboorteFrom,
               id: key,
               foto: this.foto.imageUrl
             })
            firebase.firestore().collection('bewoners').doc(key).collection('contacten').add({
               id: key,
               voornaam: this.voornaamBevoegdeForm,
               achternaam: this.achternaamBevoegdeForm,
               email: this.emailBevoegdeForm,
               telefoon: this.cellBevoegdeForm,
               bewoners: [key]
             })
            // firebase.firestore().collection('bewoners').doc(res.id).collection('posts').add({
            //    post: this.post,
            //    id: res.id,
            //    qr: [res.id]
            //  })
              .then(() => {
                this.$store.commit('addBewoner', {
                  ...addBewoner,
                  imageUrl: imageUrl,
                  id: key
                })
              })
              .catch((error) => {
                console.log(error)
              })
      
            //  .then(() => {
            //     this.$store.commit('addBewoner',({bewoner: this.bewoner, id: key, voornaam: this.voornaamFrom, achternaam: this.achternaamForm, verdiep: this.verdiepFrom, geboorte: this.geboorteFrom, foto: this.foto}) )
            //     this.voornaamFrom = '',
            //     this.achternaamForm = '',
            //     this.verdiepFrom = '',
            //     this.geboorteFrom = '', 
            //     this.foto = ''
            //  })
           })
     }
    //   if(this.contact){
    //        firebase.firestore().collection('bewoners').add({
    //        }).then((res) => {
    //          firebase.firestore().collection('bewoners').doc(res.id).collection('contacten').doc(res.id).set({
    //            contact: this.contact,
    //            id: res.id
    //          }).then(() => {
    //             this.$store.commit('addBewoner',({contact: this.contact, id: res.id}) )
    //             this.contact = ""
    //          })
    //        })
    //  }
   },
     removeBewoner(bewoner, index){
       firebase.firestore().collection('bewoners').doc(bewoner.id).delete().then(() => {
         console.log('successfully deleted document')
         this.$store.commit('removeBewoner', index)
       })

     }
  }
}
</script>


<style >

</style>
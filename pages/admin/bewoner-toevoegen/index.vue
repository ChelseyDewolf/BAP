<template>
  <div>
    <nuxt-link to="dashboard">Terug</nuxt-link>
    <h1>Bewoner toevoegen</h1>

      <AddBewonerForm />

    <!-- <nuxt-link to="admin/login" @click.native="logout" class="logout-link">Log out</nuxt-link> -->
      <!-- <ContactItem
        v-for="bewoner in bewoners"
        :key="bewoner.id"
        :voornaam="bewoner.voornaam"
        :achternaam="bewoner.achternaam"
        :foto="bewoner.foto"
        :id="bewoner.id"
        :verdiep='bewoner.verdiep'
         /> -->
  </div>
</template>

<script>
import { getUserFromCookie } from '@/helpers';
import firebase from 'firebase/app';
import Cookies from 'js-cookie'
import AddBewonerForm from '@/components/admin/forms/addBewonerForm';


export default {
  components:{
    AddBewonerForm
  },
  data(){
    return{
      loggedIn: false
    }
  },
}
</script>
<style lang="scss">

.toon{
  width: 10rem;
  height: 10rem;
}
</style>

<template>
  <nuxt-link :to="'/bewoner/messages/' + id">
        <h2 class="contact-title">{{voornaam}}</h2>
  </nuxt-link>

</template>

<script>

export default {
  props: ['voornaam', 'achternaam', 'id']
}
</script>


<style>
  .contact-title {
    color: black;
  }
</style>

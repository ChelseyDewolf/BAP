<template>
  <nuxt-link :to="'/bewoner/messages/' + id">
        <h2 class="title">{{voornaam}}</h2>
  </nuxt-link>

</template>

<script>

export default {
  props: ['voornaam', 'achternaam', 'id']
}
</script>


<style>
  .title {
    color: black;
  }
</style>

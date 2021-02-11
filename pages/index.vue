<template>
  <div class="container">
    <div>
      <img class="logo" src="../assets/images/logo.svg" alt="">
      <!-- <h1 class="title">
        Bachelorproef
      </h1> -->
      <p class="sub-title">Via de bewoner tab ga je naar de static html, css, js kant van ons project. We maakten al enkele functies klaar om later in de database toe te voegen.</p>
      <br>
      <p class="sub-title">
        Via de amdin tab bezoek je het deel van ons project die werkt met firebase. Via een bewoner op het admin menu geraak je ook zo op zijn app met database.
        De inloggegevens van de admin zijn 'admin@admin.be' en 'hhadmin'.
      </p>
      <div class="button-wrapper">
        <nuxt-link class="button" to="bewoner">Bewoner</nuxt-link>
        <!-- <nuxt-link to="">Externe</nuxt-link> -->
        <nuxt-link class="button" to="admin/login">Admin</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: #554CCB;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
  padding-bottom: 1rem;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.sub-title {
  width: 50%;
  text-align: center;
  margin: auto;
  color: white;
}

.button-wrapper {
  margin-top: 2rem;
}

.button {
  position:relative;
  text-align:center;
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  background-color:#F6C945;
  color:#FFFFFF;
  font-weight:400;
  text-transform: uppercase;
  text-decoration:none;
  box-sizing: border-box;
  padding:0.7em 1.4em;
  display:inline-block;
  margin:0 0.3em 0.3em 0;
  border-radius:0.3rem;
  font-family:'Roboto',sans-serif;
  font-weight: bolder;
}

.logo {
  padding-bottom: 2rem;
}
</style>

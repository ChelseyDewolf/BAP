<template>

  <div class="card">
    <div class="contact">
      <nuxt-link :to="'/bewoner/test/' + id">
        <!-- <div class="thumbnail" :style="{backgroundImage: 'url(' + foto + ')', height: '200px', width: '200px'}"></div> -->
        <img :style="{content: 'url(' + foto + ')'}" width="250" height="250">
        <h2 class="title">{{naam}}</h2>
        <span class="active">{{actief}}</span>
      </nuxt-link>
    </div>
  </div>

</template>

<script>

export default {
  props: ['naam', 'actief', 'foto', 'id']
}
</script>


<style>
  .card {
    max-width: 30rem;
    height: 30rem;
    background-color: #372EB4;
	  text-align: center;
    border-radius: 2rem;
  }

  .contact {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    color: white;
  }

  a {
   color: black;
   text-decoration: none;
  }
  .title {
    font-size: 2.5rem;
    padding: 2rem 0 1rem 0;
    color: white;
    font-weight: bolder;
  }

  .active {
    font-size: 1.6rem;
    color: white;
    opacity: 50%;
  }

  .card img {
    border-radius: 100%;
  }
</style>

<template>
    <nuxt-link :to="'/admin/dashboard/' + id">
        <article class="bewoner">
            <!-- <div class="thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div> -->
            <div v-if="foto">
            <div class="thumbnail" :style="{backgroundImage: 'url(' + foto + ')'}"></div></div>
            <div class="bewoner-content">
              <h1>{{ voornaam + ' ' + achternaam}}</h1>
              <span>{{ 'Floor' + ' ' + verdiep }}</span>
            </div>
        </article>
    </nuxt-link>
</template>

<script>

export default {
    components:{
    },
    props: ['thumbnail', 'achternaam', 'voornaam', 'id', 'foto', 'verdiep']
}
</script>


<style scoped>



a{
    text-decoration: none;
    color: black;
}


.thumbnail{
    background-position: center;
    background-size: cover;
    width: 5rem;
    height: 5rem;
    border-radius: 500rem;

}

.bewoner{
    box-sizing: border-box;
    width: 23rem;
    padding: 1rem;
    border-radius: .8rem;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f7f7f7;
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
}


.bewoner-content {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
}

.movie:hover{
    transition: all .3s;
        box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;

    }

</style>

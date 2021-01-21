<template>
    <nuxt-link :to="'/admin/dashboard/' + id">
        <article class="movie">
            <!-- <div class="thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div> -->
            <h1>{{ voornaam }}</h1>
            <p>{{ achternaam }}</p>
        </article>
    </nuxt-link>
</template>

<script>

export default {
    components:{
    },
    props: ['thumbnail', 'achternaam', 'voornaam', 'id']
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
    width: 100%;
    height: 20rem;
        border-radius: .8rem;

}

.movie{
    box-sizing: border-box;
    width: 28rem;
    padding: .5rem;
    border-radius: .8rem;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;    
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background-color: #f7f7f7;
    letter-spacing: .1rem;
    text-transform: capitalize;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.movie:hover{
    transition: all .3s;
        box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;    

    }

</style>
<template class="view">
    <div>
        <section class="single-movie">
                <img :src="`${bewoner.foto}`" alt="" srcset="">
                <p class="detail">{{ bewoner.qr }}</p>
                <p class="detail">{{ bewoner.voornaam }}</p>
                <p class="detail">{{ bewoner.achternaam }}</p>
                <button @click="removeBewoner()">verwijder</button>
        </section>
    </div>
</template>

<style>
    .single-movie{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding: 3rem;
        flex-flow: column;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        margin: auto;
        height: 90vh;
        }

        .view{
         height: 100vh;

        }

        .tekst{
            width: 20rem;
        }

        .detail{
            color: grey;
        }

        .movie-thumb{
            width: 80%;
            margin: auto;
            }
</style>

<script>

import firebase from 'firebase/app';
import 'firebase/firestore';

let kaas = [];
export default {

    components:{
    },
        props: ['qr', 'title', 'previewText', 'id'],

    data(){
        return{
        pageId: this.$route.params.slug,
        }
    },
    methods: {
        removeBewoner(){
            // console.log('successfully deleted document')
            // console.log(this.$route.params.id)
        firebase.firestore().collection('bewoners').doc(this.$route.params.id).delete().then(() => {
        
        console.log('successfully deleted document')
        })
         this.$store.commit('removeBewoner', this.$route.params.id)

            this.$router.push({
                path: '/admin/dashboard'
            })
        },
    },
    
        asyncData(context){

                
        return new Promise((resolve, reject) =>{
            
            setTimeout(() => {
                resolve({

                    bewoner: context.store.state.bewoners.find(el => el.id === context.params.id)


                })
            })
        })
    }
}
</script>

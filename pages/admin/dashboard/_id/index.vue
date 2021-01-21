<template class="view">
    <div>
        <Header />
        <section class="single-movie">
            <!-- <div>
                <img class="movie-thumb" :src="movie.posterurl" :alt="movie.title">
            </div> -->
<!--             
            <div>
                <p class="detail">{{ movie.year }}</p>
                <h1>{{ movie.title }}</h1>
            </div> -->
            <p>kaas</p>
            <!-- <!-- <p class="tekst">{{ bewoner.voornaam }}</p> -->

            <div>
                <!-- <p class="detail">{{ l }}</p> -->
                <!-- <p class="detail">{{ bewoner.qr }}</p> -->
            </div>

        </section>
    </div>
</template>

<style scoped>
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
import { getUserFromCookie } from '@/helpers';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { auth } from '~/plugins/firebase.js'
import Cookies from 'js-cookie'
import ContactItem from '@/components/admin/ContactItem';


let kaas = null;
export default {
    
    components:{
    },
    mounted(){
        console.log(this.$store.state.bewoners);  
    },
        asyncData(context){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve({
                    
                    //  k: kaas.state.bewoners.find(el => el.id === context.params.id)
                
            
                })
            })
        })
    }
}
</script>
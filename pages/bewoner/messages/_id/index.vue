<template>
<div class="body">
  <section class="msger">
  <!-- <header class="msger-header">
    <div class="msger-header-title">
      <i class="fas fa-comment-alt"></i> SimpleChat
    </div>
    <div class="msger-header-options">
      <span><i class="fas fa-cog"></i></span>
    </div>
  </header> -->

  <main class="msger-chat">
    <div class="msg left-msg">
      <div
       class="msg-img"
       style="background-image: url(https://gravatar.com/avatar/7c4307327e4940b99fb1d2c49cbf59a9?s=200&d=mp&r=x)"
      ></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">Naam Contact</div>
          <div class="msg-info-time">12:45</div>
        </div>

            <!-- <Message
        v-for="message in showMessages"
        :key="message.id"
        :text="message.bericht"
      /> -->

        <div class="msg-text">
          Bericht contact
        </div>
      </div>
    </div>

    <div class="msg right-msg">
      <div
       class="msg-img"
       style="background-image: url(https://gravatar.com/avatar/7c4307327e4940b99fb1d2c49cbf59a9?s=200&d=mp&r=x)"
      ></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">Ik</div>
          <div class="msg-info-time">12:46</div>
        </div>

        <div class="msg-text">
         Bericht bewoner
        </div>
      </div>
    </div>
  </main>

  <form class="msger-inputarea">
    <input type="text" class="msger-input" placeholder="Enter your message...">
    <button type="submit" class="msger-send-btn">Verzenden</button>
  </form>
</section>
</div>
</template>

<script>

import firebase from 'firebase/app';
import 'firebase/firestore';
export default {
  components: {
  },
  props: [
  ],
  data () {
     return {
       pageId: this.$route.params.slug,
       showMessages: [],
    }
  },
  mounted () {
    this.showMessages = this.$store.state.currentPosts.find(el => el.sendUser === this.$route.params.id);
    console.log(this.showMessages);
    // console.log(this.$store.state.currentUser);
    // this.$store.commit('clearContact');
    // firebase.firestore().collection('bewoners').doc(this.$store.state.currentUser).collection('contacten').doc(this.$route.params.id).get().then((res) => {
    //   console.log(res);
    //   // res.forEach(x => {
    //   //   console.log(x.data());
    //   //   // const orgData = ({ id: x.id, ...x.data() });
    //   //   // this.$store.commit('setContact', orgData);
    //   // })
    // });
    // // console.log(this.$store.state.contacten);

  },
  created () {
  },
  computed: {
    contacten(){
      return this.$store.state.currentPosts
      }
  },
  methods: {
  },
  watch: {
  },
  asyncData(context){


        return new Promise((resolve, reject) =>{

            setTimeout(() => {
                resolve({

                    currentPosts: context.store.state.currentPosts.find(el => el.sendUser === context.params.id)


                })
            })
        })
    }
}
</script>

<style lang="scss">
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);;
    font-family: Helvetica, sans-serif;
  }

  .msger {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 2px solid #ddd;
  border-radius: 5px;
  background: #ffffff;
}

.msger-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 2px solid #ddd;
  background: #eee;
  color: #666;
}

.msger-chat {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}
.msger-chat::-webkit-scrollbar {
  width: 6px;
}
.msger-chat::-webkit-scrollbar-track {
  background: #ddd;
}
.msger-chat::-webkit-scrollbar-thumb {
  background: #bdbdbd;
}
.msg {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.msg:last-of-type {
  margin: 0;
}
.msg-img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background: #ddd;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
}
.msg-bubble {
  max-width: 450px;
  padding: 15px;
  border-radius: 15px;
  background: #ececec;
}
.msg-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.msg-info-name {
  margin-right: 10px;
  font-weight: bold;
}
.msg-info-time {
  font-size: 0.85em;
}

.left-msg .msg-bubble {
  border-bottom-left-radius: 0;
}

.right-msg {
  flex-direction: row-reverse;
}
.right-msg .msg-bubble {
  background: #579ffb;
  color: #fff;
  border-bottom-right-radius: 0;
}
.right-msg .msg-img {
  margin: 0 0 0 10px;
}

.msger-inputarea {
  display: flex;
  padding: 10px;
  border-top: 2px solid #ddd;
  background: #eee;
}
.msger-inputarea * {
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 1em;
}
.msger-input {
  flex: 1;
  background: #ddd;
}
.msger-send-btn {
  margin-left: 10px;
  background: #F6C945;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.23s;
}
.msger-send-btn:hover {
  background: #F6C945;
}

.msger-chat {
  background-color: #766EDB;
}
</style>

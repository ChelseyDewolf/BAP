<template>
  <div>
    <div class="call-wrapper">
      <div class="video-wrapper">
      <video id="player" width=440 height=240 controls autoplay></video>
      <!-- <canvas id="snapshot"></canvas> -->
      </div>
   <NavigationBar ophangen />
   </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: [
  ],
  data () {
    return {
    }
  },
  mounted () {
    const player = document.getElementById('player');
    const handleSuccess = function(stream) {
    player.srcObject = stream;
  };
    navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess);
  },
  created () {
  },
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
  .video-wrapper {
    display: flex;
    justify-content: flex-end;
    padding-top: 2rem;
    padding-right: 3rem;
  }

  .call-wrapper {
    height: 100vh;
    max-width: 100vw;
    background-image: url('../../../assets/images/opa.png');
    background-size: cover;
  }
</style>

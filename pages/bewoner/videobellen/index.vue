<template>
  <div>
      <div class="titel-wrapper">
        <h1 class="titel">Zet de tablet goed, zodat je jezelf duidelijk ziet.</h1>
      </div>
      <video id="player" width=100% controls autoplay></video>
      <!-- <canvas id="snapshot"></canvas> -->
      <NavigationBar startGesprek />
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
  .titel {
    position: absolute;
    text-align: center;
    padding-top: 3rem;
    font-size:3rem;
    color: white;
  }

  .titel-wrapper {
    display: flex;
    justify-content: center;
  }
</style>

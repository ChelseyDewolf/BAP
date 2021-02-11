<template>
  <div>
    <div class="photo-wrapper">
      <div id="container">
        <h1>Neem een foto</h1>
        <video id="player" autoplay></video>
        <div class="button-wrapper">
          <button id="capture-button" class="test navArrows photo"></button>
        </div>
      </div>
      <canvas id="output"></canvas>
    </div>
    <NavigationBar />
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
    const captureButton = document.getElementById('capture-button');
    const outputCanvas = document.getElementById('output');
    const context = outputCanvas.getContext('2d');

  navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    player.srcObject = stream;
  }).catch(error => {
    console.error('Error', error);
  });

  captureButton.addEventListener('click', () => {
  const imageWidth = player.offsetWidth;
  const imageHeight = player.offsetHeight;
  outputCanvas.width = imageWidth;
  outputCanvas.height = imageHeight;
  context.drawImage(player, 0, 0, imageWidth, imageHeight);
  const downloadLink = document.createElement('a');
  downloadLink.setAttribute('download', `bewonder-id-${new Date().getTime()}.jpg`);
  outputCanvas.toBlob((blob) => {
    downloadLink.setAttribute('href', URL.createObjectURL(blob));
    downloadLink.click();
  });
});
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
.photo-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #766edb;
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 3rem;
  padding-top: 3rem;
  text-align: center;
  padding-bottom: 2rem;
}

#container {
  max-width: 80vw;
  max-height: 80vh;
}

#player {
  width: 100%;
}

.photo{
  background-image: url('../../assets/images/photo.svg');
  background-size: cover;
}

.navArrows{
    height: 5rem;
    width: 5rem;
}

.test:hover {
  cursor: pointer;
}

#capture-button {
  display: block;
  cursor: pointer;
  transition: all .15s ease-in-out;
  outline: none;
  &:hover {
    transform: scale(1.1);
  }
}

#output {
  display: none;
}

.button-wrapper {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
</style>

<template>
<div>
  <div class="animation-wrapper">
    <div class="call-animation">
      <img class="img-circle" src="https://placeimg.com/400/400/people" alt=""/>
    </div>
    <div class="content-wrapper">
      <h2><span class="bold">Anton Pycarelle</span> wordt opgebeld</h2>
      <span>Eventjes geduld aub...</span>
    </div>
  </div>
  <NavigationBar ophangen  />
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
  .animation-wrapper {
    background: #766EDB;
    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .call-animation {
      background: #C1B7E7;
      width: 13.5rem;
      height: 13.5rem;
      position: relative;
      margin: 0 auto;
      border-radius: 100%;
      border: solid 5px #C1B7E7;
      animation: play 1.6s ease infinite;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -ms-backface-visibility: hidden;
      backface-visibility: hidden;

  }

  .img-circle {
          width: 13.5rem;
          height: 13.5rem;
          border-radius: 100%;
          position: absolute;
          left: -0.3rem;
          top: -0.3rem;
      }
  @keyframes play {

      0% {
          transform: scale(1);
      }
      15% {
          box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.4);
      }
      25% {
          box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.4), 0 0 0 20px rgba(255, 255, 255, 0.2);
      }
      25% {
          box-shadow: 0 0 0 15px rgba(255, 255, 255, 0.4), 0 0 0 30px rgba(255, 255, 255, 0.2);
      }

  }

  .content-wrapper {
    padding-top: 2rem;
    text-align: center;
    color:white;
  }

  .content-wrapper h2 {
    font-size: 2rem;
  }

  .content-wrapper span {
    font-size: 1.5rem;
  }

  .bold {
    font-weight: bolder;
  }

</style>

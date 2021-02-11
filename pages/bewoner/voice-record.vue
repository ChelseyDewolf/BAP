<template>
<div>
  <div class="wrapper">
    <h1 class="title">Spraakbericht naar Anton Pycarelle</h1>
    <div class="container">
        <div class="content-wrapper">
          <audio id="recorder" muted hidden></audio>
          <audio id="player" controls></audio>
          <div class="button-wrapper">
            <button id="start">Start opname</button>
            <button id="stop">Stop opname</button>
          </div>
        </div>
      </div>
    <NavigationBar voice />
  </div>
</div>
</template>

<script>

import NavigationBar from '@/components/ui/NavigationBar'

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
    class VoiceRecorder {
	    constructor() {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			console.log("getUserMedia is supported")
		} else {
			console.log("getUserMedia is not supported on your browser!")
		}

		this.mediaRecorder
		this.stream
		this.chunks = []
		this.isRecording = false

		this.recorderRef = document.querySelector("#recorder")
		this.playerRef = document.querySelector("#player")
		this.startRef = document.querySelector("#start")
		this.stopRef = document.querySelector("#stop")

		this.startRef.onclick = this.startRecording.bind(this)
		this.stopRef.onclick = this.stopRecording.bind(this)

		this.constraints = {
			audio: true,
			video: false
		}

	}

	handleSuccess(stream) {
		this.stream = stream
		this.stream.oninactive = () => {
			console.log("Stream ended!")
		};
		this.recorderRef.srcObject = this.stream
		this.mediaRecorder = new MediaRecorder(this.stream)
		console.log(this.mediaRecorder)
		this.mediaRecorder.ondataavailable = this.onMediaRecorderDataAvailable.bind(this)
		this.mediaRecorder.onstop = this.onMediaRecorderStop.bind(this)
		this.recorderRef.play()
		this.mediaRecorder.start()
	}

	handleError(error) {
		console.log("navigator.getUserMedia error: ", error)
	}

	onMediaRecorderDataAvailable(e) { this.chunks.push(e.data) }

	onMediaRecorderStop(e) {
			const blob = new Blob(this.chunks, { 'type': 'audio/ogg; codecs=opus' })
			const audioURL = window.URL.createObjectURL(blob)
			this.playerRef.src = audioURL
			this.chunks = []
			this.stream.getAudioTracks().forEach(track => track.stop())
			this.stream = null
	}

	startRecording() {
		if (this.isRecording) return
		this.isRecording = true
		this.startRef.innerHTML = 'Aan het opnemen...'
		this.playerRef.src = ''
		navigator.mediaDevices
			.getUserMedia(this.constraints)
			.then(this.handleSuccess.bind(this))
			.catch(this.handleError.bind(this))
	}

	stopRecording() {
		if (!this.isRecording) return
		this.isRecording = false
		this.startRef.innerHTML = 'Start opname'
		this.recorderRef.pause()
		this.mediaRecorder.stop()
	}

}

window.voiceRecorder = new VoiceRecorder()

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

.wrapper {
  background-color: #766edb;
  width: 100vw;
  height: 100vh;
}

.wrapper h1 {
  text-align: center;
  padding-top: 3rem;
  font-size: 3rem;
  color:white
}

.button-wrapper {
  padding-top: 2rem;
}

.content-wrapper {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

button {
	max-width: 300px;
  position:relative;
  text-align:center;
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  background-color:#F6C945;
  color:#FFFFFF;
  font-weight:400;
  text-transform: uppercase;
  text-decoration:none;
  box-sizing: border-box;
  padding:0.7em 1.4em;
  display:inline-block;
  margin:0 0.3em 0.3em 0;
  border-radius:0.3rem;
  font-family:'Roboto',sans-serif;
  font-weight: bolder;
}
</style>

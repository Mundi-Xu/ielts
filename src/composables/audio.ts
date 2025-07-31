import { ref } from 'vue'

export function useAudio() {
  const audioElement = ref<HTMLAudioElement | null>(null)
  const isPlaying = ref(false)
  const currentTime = ref(0)
  const duration = ref(0)
  const volume = ref(1)
  const playbackRate = ref(1)

  const init = (src: string) => {
    if (audioElement.value) {
      audioElement.value.pause()
      audioElement.value = null
    }

    audioElement.value = new Audio(src)
    audioElement.value.volume = volume.value
    audioElement.value.playbackRate = playbackRate.value

    // Set up event listeners
    audioElement.value.onloadedmetadata = () => {
      if (audioElement.value) {
        duration.value = audioElement.value.duration
      }
    }

    audioElement.value.ontimeupdate = () => {
      if (audioElement.value) {
        currentTime.value = audioElement.value.currentTime
      }
    }

    audioElement.value.onplay = () => {
      isPlaying.value = true
    }

    audioElement.value.onpause = () => {
      isPlaying.value = false
    }

    audioElement.value.onended = () => {
      isPlaying.value = false
      currentTime.value = 0
    }
  }

  const play = () => {
    if (audioElement.value) {
      audioElement.value.play()
    }
  }

  const pause = () => {
    if (audioElement.value) {
      audioElement.value.pause()
    }
  }

  const stop = () => {
    if (audioElement.value) {
      audioElement.value.pause()
      audioElement.value.currentTime = 0
      isPlaying.value = false
    }
  }

  const seek = (time: number) => {
    if (audioElement.value) {
      audioElement.value.currentTime = time
    }
  }

  const setVolume = (vol: number) => {
    if (audioElement.value) {
      volume.value = vol
      audioElement.value.volume = vol
    }
  }

  const setPlaybackRate = (rate: number) => {
    if (audioElement.value) {
      playbackRate.value = rate
      audioElement.value.playbackRate = rate
    }
  }

  const cleanup = () => {
    if (audioElement.value) {
      audioElement.value.pause()
      audioElement.value = null
    }
  }

  return {
    // State
    isPlaying,
    currentTime,
    duration,
    volume,
    playbackRate,

    // Methods
    init,
    play,
    pause,
    stop,
    seek,
    setVolume,
    setPlaybackRate,
    cleanup,
  }
}

// Global audio manager for handling only one audio at a time
class AudioManager {
  private static instance: AudioManager
  private activeAudio: HTMLAudioElement | null = null

  private constructor() {}

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager()
    }
    return AudioManager.instance
  }

  play(src: string): Promise<void> {
    // Stop any currently playing audio
    if (this.activeAudio) {
      this.activeAudio.pause()
      this.activeAudio = null
    }

    return new Promise((resolve, reject) => {
      const audio = new Audio(src)
      this.activeAudio = audio

      audio.onended = () => {
        this.activeAudio = null
        resolve()
      }

      audio.onerror = () => {
        this.activeAudio = null
        reject(new Error('Audio playback failed'))
      }

      audio.play().catch(reject)
    })
  }

  stop() {
    if (this.activeAudio) {
      this.activeAudio.pause()
      this.activeAudio = null
    }
  }
}

export const audioManager = AudioManager.getInstance()

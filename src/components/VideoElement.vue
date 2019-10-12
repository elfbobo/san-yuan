<template>
 <video
   ref="video"
   class="video-element"
   :controls="controls"
   autoplay
   muted
   loop
 >
   <source :src="videoSrc" />
 </video>
</template>

<script>
import xczxg1 from '../assets/xczxg1.mp4'
export default {
  name: 'VideoElement',
  data () {
    return {
      videoSrc: xczxg1,
      controls: false
    }
  }
}
</script>

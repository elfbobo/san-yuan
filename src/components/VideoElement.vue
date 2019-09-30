<template>
  <video
    class="video-element"
    ref="video"
    :controls="controls"
    :loop="loop"
    :autoplay="autoplay"
    :muted="muted"
  >
    <source :src="videoSrc">
  </video>
</template>

<script>

export default {
  name: 'VideoElement',
  props: {
    videoSrc: {
      type: [Object, Boolean, String],
      default: 'http://cdn.lagabu.com/xczxg1.mp4'
    },
    controls: {
      type: [Object, Boolean, String],
      default: false
    },
    loop: {
      type: [Object, Boolean, String],
      default: 'loop'
    },
    autoplay: {
      type: [Object, Boolean, String],
      default: 'autoplay'
    },
    muted: {
      type: [Object, Boolean, String],
      default: 'muted'
    }
  }
}
</script>

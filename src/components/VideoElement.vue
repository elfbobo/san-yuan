<template>
  <video :src="videoSrc" controls loop width="1000"></video>
</template>

<script>

export default {
  name: 'VideoElement',
  props: {
    videoSrc: {
      type: [Object, Boolean, String],
      default: 'http://cdn.lagabu.com/f60f61cbbb6d3369867d9b7dac2524d3.mp4'
    }
  }

}
</script>

<template>
  <div class="container">
    <video-element></video-element>
  </div>
</template>

<script>
import './assets/stylesheets/styles.sass'
import VideoElement from '@/components/VideoElement'

export default {
  name: 'app',
  components: {
    VideoElement

  }
}
</script>

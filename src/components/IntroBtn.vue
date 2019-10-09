<template>
  <div class="intro-btn" @click="onclickBtn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1000" preserveAspectRatio="none">
      <rect id="shape" x="0" y="0" rx="70" ry="100">
      </rect>
    </svg>
    <div id="text">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroBtn',
  props: {
    width: {
      type: [Object, Boolean, String],
      default: '100%'
    },
    height: {
      type: [Object, Boolean, String],
      default: '100%'
    },
    mode: {
      type: [Object, Boolean, String],
      default: 'base'
    },
    link: {
      type: [Object, Boolean, String],
      default: 'http://192.168.26.20/#/beautiful'
    }
  },
  computed: {
    showModal: {
      get () {
        return this.$store.state.showModal
      },
      set (val) {
        this.$store.state.showModal = val
      }
    }
  },
  methods: {
    onclickBtn () {
      if (this.mode === 'base') {
        this.showModal = true
      } else {
        window.location.href = this.link
      }
    }
  }

}
</script>

<style scoped>

</style>

<template>
  <div class="intro-btn" @click="onclickBtn">
    <svg xmlns="http://www.w3.org/2000/svg">
      <rect id="shape" x="10%" y="12%" rx="10" ry="10">
      </rect>
    </svg>
    <div id="text">
      <a>
        <slot></slot>
      </a>
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

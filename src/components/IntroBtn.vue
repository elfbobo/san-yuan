<template>
  <div class="intro-btn" @click="oc">
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
    }
  },
  methods: {
    oc () {
      console.log('fu')
    }
  }

}
</script>

<style scoped>

</style>

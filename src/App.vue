<template>
  <div class="container">
    <video-element></video-element>
    <div class="btn-container">
      <intro-btn
        v-for="(item,i) in btnContent"
        :key="i"
        @click="onclickBtn"
      >{{ item.name }}</intro-btn>
    </div>
    <modal-element v-show="showModal">
    </modal-element>
  </div>
</template>

<script>
import './assets/stylesheets/styles.sass'
import VideoElement from '@/components/VideoElement'
import IntroBtn from '@/components/IntroBtn'
import ModalElement from '@/components/ModalElement'

export default {
  name: 'app',
  components: {
    ModalElement,
    IntroBtn,
    VideoElement
  },
  data: () => ({
    showModal: false,
    btnContent: [
      {
        name: '三园工程',
        type: 'base'
      }, {
        name: '美丽家园',
        type: 'link'
      }, {
        name: '绿色田园',
        type: 'link'
      }, {
        name: '幸福乐园',
        type: 'link'
      }
    ]
  }),
  mounted () {
    this.$nextTick(() => {

    })
  },
  methods: {
    onclickBtn (mode) {
      console.log(this.showModal)

      if (mode === 'link') {
        return
      }

      if (mode === 'base') {
        this.showModal = true
        console.log(this.showModal)
      }
    }
  }
}
</script>

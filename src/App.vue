<template>
  <div class="container">
    <video-element></video-element>
    <div class="btn-container">
      <intro-btn
        v-for="(item,i) in btnContent"
        :key="i"
        :mode="item.type"
        :link="item.link"
      >{{ item.name }}</intro-btn>
    </div>
    <modal-element
      v-show="showModal"
    >
    </modal-element>
  </div>
</template>

<script>
import './assets/stylesheets/styles.sass'
import VideoElement from '@/components/VideoElement'
import IntroBtn from '@/components/IntroBtn'
import ModalElement from './components/ModalElement'

export default {
  name: 'app',
  components: {
    ModalElement,
    IntroBtn,
    VideoElement
  },
  data: () => ({
    btnContent: [
      {
        name: '三园工程',
        type: 'base',
        link: ''
      }, {
        name: '美丽家园',
        type: 'link',
        link: 'http://192.168.26.20/#/beautiful'
      }, {
        name: '绿色田园',
        type: 'link',
        link: 'http://192.168.26.20/#/green'
      }, {
        name: '幸福乐园',
        type: 'link',
        link: 'http://192.168.26.20/#/happiness'
      }
    ]
  }),
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
  mounted () {
    this.$nextTick(() => {

    })
  }
}
</script>

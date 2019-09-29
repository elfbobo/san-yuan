import Vue from 'vue'
import App from './App.vue'
import store from './store'
import videoJs from 'video.js'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.prototype.$video = videoJs
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

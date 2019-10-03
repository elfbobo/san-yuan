<template>
  <div id="modal-container" @click="closeModal">
    <div class="modal-background">
      <div class="modal">
        <h2>{{ title }}</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海市乡村振兴战略，坚持面向全球、面向未来，以推进“三园工程”（以全面提升农村环境面貌为核心的“美丽家园”工程，以全面实现农业提质增效为核心的“绿色田园”工程，以全面促进农民持续增收为核心的“幸福乐园”工程）为重要抓手，争取到2022年，率先基本实现农业农村现代化。</p>
        <ul>
          <li>（一）“美丽家园”工程
            <ul>
              <li>实施“十百千”行动计划。到2022年，全市建设若干乡村振兴示范村、美丽乡村示范村，实现行政居环境整治全覆盖，形成一批可推广、可示范的乡村建设和发展模式。</li>
              <li>实施农居相对集中行动计划。加大推进农民向城镇集中居住力度，推进村落散户向经规划的农民集中居住点平移。</li>
            </ul>
          </li>
          <li>          （二）“绿色田国”工程
            <ul>
              <li>实施都市现代绿色农业发展行动计划。建立以绿色生态为导向的制度体系，全面提升农业绿色生产技术和设施装备水平。
              </li>
              <li>实施构建现代农业经营体系行动计划。完善促进新型农业经营主体发展的制度体系，构建地产绿色农产品产销平台，创新经营模式。</li>
            </ul>
          </li>
          <li>
            （三）“幸福乐园”工程
            <ul>
              <li>实施农民长效增收行动计划。有针对性地对农民开展培训，促进农民非农就业，加快培育职业农民。发展新型集体经济，增加农民财产性收入。</li>
              <li>实施农民美好生活提升行动计划。完善农村公共服务设施布局，提升养老、医疗、教育、文化等公共服务能力，加强和创新乡村治理。</li>
            </ul>
          </li>
        </ul>

        <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
          <rect x="0" y="0" fill="none" width="100%" height="100%" rx="3" ry="3"></rect>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
const words = require('../assets/text.json')
export default {
  name: 'ModalElement',
  data: () => ({
    title: '上海市乡村振兴“三园工程”简介',
    words: words
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
  methods: {
    closeModal () {
      this.showModal = false
      console.log(this.showModal)
    }
  }
}
</script>

<style lang="scss" scoped>
.strong-number :first-letter {
  font-weight: bold;
}
</style>

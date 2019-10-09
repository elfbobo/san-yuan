<template>
  <div id="modal-container" @click="closeModal">
    <div class="modal-background">

      <div class="modal">
        <svg
          class="border1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="6.632cm" height="6.667cm">
          <image  x="0px" y="0px" width="30%" height="30%"  xlink:href="data:img/png;base64,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" />
        </svg>
        <svg
          class="border1 border2"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="6.632cm" height="6.667cm">
          <image  x="0px" y="0px" width="30%" height="30%"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAC9CAMAAAA+y+c8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACiFBMVEX+x3H////+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H+x3H///8OZewsAAAA1nRSTlMAAAECBA0cLDc2HQ8GEWqXsby+uqmKZEQ5OjU7NAMFJGiu2vL8/vv27uTb087P1tLN1crBs5grgfOvJYDcghBj0SMzpgxh1KcZ8AsnpC+jMbusxKsux5/D7IMWWAq/mypULf1sGyDryJJQGjDAtrK0rbWwqqGRdU8mzEwoHxMIxsK9xUhJRUpNRkdLQz8pFAlBEj644efq6e3o4smajHxfV2JzqNDd5diJF3b4+ff1hI2cIojfPJl7Mk4HjiH6t1Xmcg6HhoWLkJaUFVtpcW1nOHega5OdiUSppAAAAAFiS0dEAf8CLd4AAAAHdElNRQfjCggMCgu3JzukAAALFElEQVR42t1di18Uxx3f7h4C4RHFKhI8CMoch3c87FELaG2ipjG5Xq/SQwiIyZ2BBA89TGpyggcCKkaboyThYWyTJm0SNSa+kiZq0CbYprWmbR69v6czu/fcGbNzh3c743xgPjO7s3Pfm5vv/h7z21lBiCZRksRYTfgB+ykC1ZC1KDsnN/u+vHxR+RYMZ6okFeQW3r94SdHSHy5bXpyTs6Ik54GcFaUwK5FLJbkP5MZn8rGEDLZbmVNSGq7K7WJnc8Mn4LUlsWpprnIsJ9ZpiXJt/IfHVZUmOdmLsozx2MvKH6xYtboSAGCqMlevsVhrLLV19fWWtRartW5tHcos9fUws9bX1aJj8Kyc1aBjVkutpR5lqFRXozRBVdhBnVXuBbaT+5O7giV4rTXWAToLe4YnUAfhy+CJGqvcPWpcY5E/fG3dj2wNPy7MLZBi2Nf9xFIVSkwAwH+lFKnGauGS3EZuB8jtgLoYbQiAksf1l9AAhNR9gsixysZVTQ82l0XmTPn6DZUhnlKV5afrwug3/uwhvrDD0d+w/mF55hg3ba5aeHeZRv/Q8o0I/JZHfq43lBRS1aOb0D1n67LH9EaSSlr7yONQrtp/wduMl9Njy7bCe41jsd44UkqmX9pFQXL+Sm8cKSWwzSEJoqMFLLwrHcD/2gVvlq5WLsGbtjdDPc3VpjeOlFL7Ex2QsM4ivXGklOo7dyDwXXrjSCU17nwSCik+CWtqeSoLqQfuVo/eUJLHXrPraaSYQcJyN/KrbYXdsjUF5zwBPPCASAaUEsyxY3IJhKuyzRBrEmsnN0G/LoiaIeEmoejZuMahqA0C4s6GPJGqqeeZZ3t3GxRTxNuHY++x7dlb0eTzNfQ3+fahzCdXYbZXzvY1REt7K55r8DWgLFxtapAzX4NcbVKqe1HVt0/pNNxVQ7SxUvVFPhKW+tG1/eHP8KFefAqM53+z/4UX/VvCZqDoxQkLDgw0++12f7nfPuhvtg/a/c3+wcFohqroBMrKUbtwSWlnj5YGE0r2wbhj5XHHlGtjZwfjPi3WDpXs8Jj/YGAoZsG6h3Hwww5BhInRLM7VRCAsOOTAvCNMJslbhIMfcfICniBhu7wSF+4+KGFx8G0ukQvwJJUYDLv4cLSKDgJhWzgZedKcB11eTsCTVOIuJyeEJUlYXqYNmbBubgiLz3kkYfVGRgMe2rD4yBc5eQGP6/OAHwk7SiCsm4+Rv+ckbKiNF8J6CU4nbgh7z6nEfBM2UcLGTBfRaJRSySQJGs0q+xMdk9DZWBZL1COvqduEOzTkPbxibODwkbEBmB0eUEpHlerY+MDRY5GSUi1+aeA4PHv86NiJE8eKf7sy++Xmg8Ed+UajMX8iq6M893dH4PGB8bFjY+PjYy+NjR8u9ReUJQeeTFgvDt44+cr6V2tfm2o3m6dn2s2z09OzKIOlmZOzyjHlRA86pjQ52T7bPjM10zP1+oY1tade3fz7P7xR+OYfO996e9mfbH+ufefd6Z6ZaXTttNk8e/L194pOj50xJAee4DFTERb1VuY/e2r2fQ++jK+uxFbq8aV8j+ncBx9Wva84yBJCAeS/c7M1571Dd3/alGVfeNcUSnsyTV3MGaIHT3I6eVQSVhCkS5d7MuKP9fTc7zbQj7yLMPIqCSsIG5d/lCFfsuejFzqSISwOSyVhoeq5OGNOfFPDxwZq8E6Cl1hN2B3LT2YKeyj0zq4s6mlDtGETJayw9S+mzIH/8Nn7qAlLI2GzM7no5tn8MqVyQr5Vqtx9YmldBsGDClqvEdmGVTmdpGOrMgn+eTelTkuWsH2JhJVOrMkg+HMXL1FPGwrCSh+/l0HwU58E6CVsq6aEFT+1ZBD86JWrSeg22OVqwgruA5nDbr72mbgwlThRworezEWGzF0vHrqrKrHkHMkY9r4bBUmoxATCqm1YyWnLEHZzf29QTEIldg1rSljRMUzSKT2VaE2/EqpsHtm8QCXg8YSPySVQGV3UB7j9IncAKiPXmv667/OVX4jJGCMElVi9oCZkE0K5qnfOz8/fRH83/zZ/U06oOi9XYQb/b16+fPry6b9f+3L/P7ZXjAxbV001miDkublzH6yuPrB4+z/3Xzgtd4IuPf9JYa+3I/8u2LAqwjoI02b4leBkQTAYKJgMwsJkAJUCSjUwiUqTgVu3YN4B05ndi7qbvaVHev91+6u3//2ft97sPP7fwc8Wbe3oCN4KTgYDKAsGN04YxGQNcMKaVF/iso7kJRB2xBvvqtBIyOkhSpLx6uN5eVuuGmQ3h/h9C9WU04YU6dRGQVhbMuCTTgshrEuTsGA4rfEJCxl5NWG170gaQ7QQjN8z553aNiwkLN7Gpr8bnBympVqHJUrYEf09yWTFDJOwBDOwjwHwNMs6RAk7rP9CM1XgBCRsSOsL6gKeJGFBl5qwhwj3eRYI69UOnCATVv/gCqrACaJXjSPCkua8/tOGyj+f3cooYZ3ayzpcERZTiQmEBUsYmPNkCatNWMAGYWlsWMKcb2WBsKSndVSRTiQbloVQLiovMYmwLIRy3SHSSU1Ywh2JCQmbKmFtDIAnSthWCpWYCcKSVGL1Omy2tpGuC3iiSoxLWBw8qxIWU4m9S/AvyARhU1WJbYxKWA8/KrF2LDFZwrJAWIIAAiM0EpaBkSf5ZNQaI7s2LCmWuM2l7SVmVyWm8BIzImFDWiPPlw1L5XRiYOTJXmIKwhYxQdhUnU4MgE+VsIx4iUmBE7xIWHL8/D2kEpPWrRhZ1tGOdPqUVQnrpiIszgs2JCxhPreoCEvxBXUBfwefjLaEZcLplOKyDmCEsDiwFm5UYpplHWIb/acNzeN1xEgnZgnLzTosxQPsDNuwBEuKZ8JSOZ2YkLCkp3VaeFGJnTShiaxKWDrC4rdKVtdhQzSRTkws67i5lrAUwf88LevgEpYU0coCYUmbsGHLOuyuw2rbsOxK2GFNjZEcS8wEYUleYu11WDZUYtLzsBSBE2wQ1knxeB1RwrJBWHxUMcIyuw7LdWgiVSyxZmSILuApVWJGg/9TfLwOFDEw56mehyVIWGZDEz0cSViOI51StWEZISwOjB+nU4peYiZsWJd2XAHLNixN8D8/hAUj2o/XsbEO6+zTfrzOex1vc50BIUXcFmBUJWHd2/Bfp592R440gqdSiS9dNKnbzFHvyJFG8FQSdvINbGch+h050gj+DkIqEXz++Cg2s8Zpd+TIPPjEPZ3E7mvmxBbmC920O3KkEbzowAYVThvVnk7CUPGeuYQZv+cE9Y4caQRPE+kEYRbc6IpDP9f1FP2OHGkET9QY1cs6giAGe7dFZ87stt6gxAJ4msfr5G0Xvtj0la96DoC5at/nm5LZkSOd4L24hFU/Xqc85p8fdFy5/fXXt684biW1I0cawUMbFh/5NuJmm6JxIi8QyJswJrcjRxrB00jYNO25sHDwxMAJnLBsgicv63h5Aa+9ayKricrpxGqicjqxmqhUYlYTVWgiq4kq+J/VRJSw/Lyqg9FQWyrw5BgzXghLETjBarr3dv7nWsLyRFjNBxtZTVBILcXBL+WFsK7ncAnb5OKEsM3fYO8Br/ymnI+RF86cn1WDn33iDB+EFSY6rWrw1s4JTsBL63auTsTeuPNJiRPwQtaNFlM8dtPojSz9jWtK8NLTu2riOBt537DeyOjAC4bubw81RueM7VvlfcN6I6MELxh29353qh3OHVP7M99F3jesNzJa8IK0xd579suL/9t/9kV75H3DeiOjBg/hDwUO+hPeN6w3siTAC4L6fcN6I6NI/wfSubHNE7lPFQAAAABJRU5ErkJggg==" />
        </svg>
<!--        <img class="border1" :src="border1" alt="" />-->
<!--        <img class="border1 border2" :src="border1" alt="" />-->
        <h2>{{ title }}</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海市乡村振兴战略，坚持面向全球、面向未来，以推进“三园工程”（以全面提升农村环境面貌为核心的“美丽家园”工程，以全面实现农业提质增效为核心的“绿色田园”工程，以全面促进农民持续增收为核心的“幸福乐园”工程）为重要抓手，争取到2022年，率先基本实现农业农村现代化。</p>
        <ul>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）“美丽家园”工程
            <ul>
              <li>实施“十百千”行动计划。到2022年，全市建设若干乡村振兴示范村、美丽乡村示范村，实现行政居环境整治全覆盖，形成一批可推广、可示范的乡村建设和发展模式。</li>
              <li>实施农居相对集中行动计划。加大推进农民向城镇集中居住力度，推进村落散户向经规划的农民集中居住点平移。</li>
            </ul>
          </li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）“绿色田国”工程
            <ul>
              <li>实施都市现代绿色农业发展行动计划。建立以绿色生态为导向的制度体系，全面提升农业绿色生产技术和设施装备水平。
              </li>
              <li>实施构建现代农业经营体系行动计划。完善促进新型农业经营主体发展的制度体系，构建地产绿色农产品产销平台，创新经营模式。</li>
            </ul>
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）“幸福乐园”工程
            <ul>
              <li>实施农民长效增收行动计划。有针对性地对农民开展培训，促进农民非农就业，加快培育职业农民。发展新型集体经济，增加农民财产性收入。</li>
              <li>实施农民美好生活提升行动计划。完善农村公共服务设施布局，提升养老、医疗、教育、文化等公共服务能力，加强和创新乡村治理。</li>
            </ul>
          </li>
        </ul>

<!--        <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">-->
<!--          <rect x="0" y="0" fill="none" width="100%" height="100%" rx="3" ry="3"></rect>-->
<!--        </svg>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalElement',
  data: () => ({
    title: '上海市乡村振兴“三园工程”简介'
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
    }
  }
}
</script>

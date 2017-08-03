<template>
  <div class="wrapper">
      <div class="float-bar" >  
                <router-link to="/recommond">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>                
                </router-link>
                <span>je{{list.id}}</span>
                <a href="https://github.com/zytx121/justice_eternal">
                <img class="tag" slot="icon" src="../assets/image/github.png" width="24" height="24">
                </a>
      </div>
      <div v-for="item in recommond">
          <div v-for="key in item.durl">
              <div >
                    <video controls="controls" :src="list.src" :poster="list.pic" class="video"></video>                  
              </div>   
          </div>        
      </div> 
      <div class="description">
          <div class="bar">
              <ul>
                  <li class="info" >
                     简介
                  </li>
              </ul>              
          </div>
      </div>

      <div class="content">
          <div class="showInfo" >
              <p class="title">{{list.title}}</p>
              <p class="desc">{{list.description}}</p>
          </div>
      </div>
      <div id="gitalk-container" ></div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
  </div>

</template>

<script>

import Gitalk from 'gitalk'

export default {

  data() {
      return {

           recommond: [
            {
                from: "local",
                result: "suee",
                format: "hdmp4",
                timelength: 185481,
                accept_format: "flv,hdmp4,mp4",
                accept_quality: [
                    3,
                    2,
                    1
                ],
                seek_param: "start",
                seek_type: "second",
                durl: [
                {
                    order: 1,
                    length: 185481,
                    size: 20252646,
                    url: "https://cn-sdjn-dx-v-02.acgvideo.com/vg5/e/b2/279786-1-hd.mp4?expires=1496561100&platform=pc&ssig=KJcDtt7zUArRDbaBFTBIGw&oi=1985593072&nfa=oq9sEqY95srmC3Zf+3700A==&dynamic=1&hfa=2063642420",
                    backup_url: [
                        "https://ws.acgvideo.com/8/60/104091-1.mp4?wsTime=1496404518&platform=pc&wsSecret2=bb90a0763d7e3f673ce1edf0bbe1b34b&oi=1985593072&rate=7"
                    ]
                }
             ]
            }
           ],
           videoSrc: '',
           id: '',
           info: ''
           
      }
  },
  computed: {
    recommondList() {
        return this.$store.state.recommondList1
    },
    list() {
        var recommondList1 = this.$store.state.recommondList1
        for(var index = 0; index < recommondList1.length; index++){
            if(recommondList1[index].id == this.$route.params.id) {
                return recommondList1[index]
            }
        }  
    },   
  },
  mounted() {
    var gitalk = new Gitalk({
      clientID: '45a4adb3e60063d0bb7c',
      clientSecret: '6538ec3b188702e9ddaab5899a49a48781e57957',
      repo: 'justice-eternal.github.io',
      owner: 'Justice-Eternal',
      admin: ['zytx121'],
    })

    gitalk.render('gitalk-container')
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/recommondPlay.scss';

</style>

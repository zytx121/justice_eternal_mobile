<template>
  <div class="wrapper">
      <div class="float-bar" >  
                <router-link to="/recommond">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>                
                </router-link>
                <span>av{{list.aid}}</span>
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
                  <li class="info" @click="toggleInfo()">
                     简介
                  </li>
                  <li class="comment" @click="toggleComment()"  >
                      评论({{comment.length}})
                  </li>
              </ul>              
          </div>
      </div>

      <div class="content">
          <div class="showInfo" v-show="isInfoShow">
              <p class="title">{{list.title}}</p>
              <p class="desc">{{list.description}}</p>
              <p class="tagAll"> 
                    <span class="tagAbout">标签相关</span> 
                    <span class="tag" v-for="item in info">{{item.tag_name}}</span>                   
              </p>
          </div>
          <div class="ShowComment" v-show="isCommentShow"   >
              <ul class="cmtList">
                  <li v-for="(cmt, index) in comment">
                      <img src="../assets/image/item10.png" alt="" class="avatar">
                      <span class="name">{{cmt.member.uname}}</span>
                      <p class="comment">{{cmt.content.message}}</p>
                  </li>
              </ul>
          </div>
      </div>
  </div>

</template>

<script>
export default {

  data() {
      return {
           isInfoShow: true,
           isCommentShow: false,
           comment: [ ],
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
           aid: '',
           cmtContent: '',
           info: ''
           
      }
  },
  computed: {
    recommondList() {
        return this.$store.state.recommondList
    },
    list() {
        var recommondList = this.$store.state.recommondList
        for(var index = 0; index < recommondList.length; index++){
            if(recommondList[index].aid == this.$route.params.aid) {
                return recommondList[index]
            }
        }  
    },   
  },
  mounted() {
         let aid =  this.$route.params.aid
        //  this.axios.post('https://api.imjad.cn/bilibili/?aid='+ aid +'&page=1&quality=2').then((res) => {
        //         this.videoSrc = res.data.durl[0].url
        //         console.log(res)
        //      }).catch((error) => {
        //         console.log(error)
        // })
        

         this.axios.get('https://api.imjad.cn/bilibili/v2/?get=comments&aid='+ aid).then(res => {
                this.comment = res.data.data.replies;
                console.log(res.data)
             }).catch((error) => {
                console.log(error)
         })
         this.axios.get('https://api.imjad.cn/bilibili/v2/?aid=' + aid ).then(res => {
                this.info = res.data.data.tag;
                console.log(this.info)
             }).catch((error) => {
                console.log(error)
         })
  },
  created() {
        // let aid =  this.$route.params.aid
         // this.axios.get('/api/comments/' + aid).then(res => {
         //        this.comment = res.data.data.replies;
         //     }).catch((error) => {
         //        console.log(error)
         // })
        //   this.axios.get('/api/search/' + aid).then(res => {
        //         this.info = res.data.data;
        //         console.log(this.info[0].content)
        //      }).catch((error) => {
        //         console.log(error)
        // })
  },
  methods: {
    toggleInfo() {
        this.isInfoShow = true;
        this.isCommentShow = false;
    },
    toggleComment() {
        this.isInfoShow = false;
        this.isCommentShow = true;
     }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/recommondPlay.scss';

</style>

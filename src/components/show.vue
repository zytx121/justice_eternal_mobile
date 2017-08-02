<template>
  <div class="showpage">
<!--       <v-swiper class="swiper" :message= "banner"></v-swiper> -->

      
      <router-view class="cl"/>


<!--       <div class="aboutMe" @click="showMe">
                 <img src="../assets/image/me.png" alt="" class="me">
                 <img src="../assets/image/next.png" alt="" class="next">              
      </div> -->

<!--       <div class="show-content">
        <div class="showItem col-xs-6" @click="showDetail(item.archive.aid)" v-for="item in showList" key="item.archive.aid">
            <img :src="item.pic" alt="" class="showImg">    
            <div class="showInfo">
                <span class="showTag">#{{item.archive.tname}}#</span>
                <span class="showTitle">{{item.archive.title}}</span>
                <div class="showUser">
                    <span class="showAuthor">{{item.archive.owner.name}}</span>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                    <span class="showNum">{{item.archive.stat.view}}</span>
                </div>
            </div>
       </div>
      </div> -->
  </div>
</template>

<script>
import vSwiper from '@/components/swiper.vue'
export default {
    data () {
        return {
            props: {
                banner: Object 
             }
        }
    },
    components: {
        vSwiper
    },
    computed: {
        banner() {
            return this.$store.state.banner;  
        }
    },
    mounted () {

        // this.$store.state.banner = [
        //   {"id":1,"pic":"http://upload-images.jianshu.io/upload_images/2141706-edc791104ab5d06b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"},{"id":2,"pic":"http://upload-images.jianshu.io/upload_images/2141706-4ba8571ca63467f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"},{"id":3,"pic":"http://upload-images.jianshu.io/upload_images/2141706-b120eb7d223c52e8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"},{"id":4,"pic":"http://upload-images.jianshu.io/upload_images/2141706-9054491cb8aaa19a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"}
        // ]
    },
    methods: {

      }
    }


</script>

<style lang="scss" scoped>
@import '../assets/css/show.scss';

</style>
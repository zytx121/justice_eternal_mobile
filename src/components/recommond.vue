<template>
  <div class="wrapper">
  <mu-paper :zDepth="5">
       <v-swiper class="swiper"></v-swiper>
      <p class="totalRecommond">
          <img src="../assets/image/je6.png" alt="" width="50" height="50">
          <span class="recommond">录音专区</span>
      </p>

      <div id="player5" class="aplayer" ref="ap5"></div>
      <div class="author"><a href="http://http://5sing.kugou.com/34713615/default.html">♡ 流萤川小时 ♡</a></div>
      <div id="player1" class="aplayer" ref="ap1"></div>
      <div class="author"><a href="http://5sing.kugou.com/3811857/fc/5.html">♡ 自由姐 ♡</a></div>
      <div id="player2" class="aplayer" ref="ap2"></div>
      <div class="author"><a href="http://5sing.kugou.com/nyarin/lastupdate.html">♡ 猫燐kirin03 ♡</a></div>
      <div id="player3" class="aplayer" ref="ap3"></div>
      <div class="author"><a href="http://5sing.kugou.com/10590245/default.html###">♡ 月光银百合 ♡</a></div>
      <div id="player4" class="aplayer" ref="ap4"></div>
      <div class="author"><a href="http://music.163.com/#/artist?id=1077060">♡ 翎渡 ♡</a></div>
      <div class="line"></div>



       <p class="totalRecommond">
          <img src="../assets/image/je3.png" alt="" width="50" height="50">
          <span class="recommond">教学专区</span>
      </p>

<!--       <div class="show-content">
        <div class="showItem1 col-xs-6" @click="playDetail1(item.id)" v-for="item in recommondList1" key="item.id">
            <img :src="item.pic" alt="" class="showImg">    
            <div class="showInfo">
                <span class="showTag">【{{item.typename}}】</span>
                <span class="showTitle">{{item.title}}</span>
            </div>
       </div>
      </div> -->
        <div class="gridlist-demo-container">
          <mu-grid-list class="gridlist-demo">
            <mu-grid-tile  v-for="item in recommondList1" key="item.aid">
              <img :src="item.pic" @click="playDetail1(item.id)" />
              <span slot="title" @click="playDetail1(item.id)">{{item.title}}</span>
              <span slot="subTitle">by <b>{{item.author}}</b></span>
            </mu-grid-tile>
          </mu-grid-list>
        </div>


       <p class="totalRecommond">
          <img src="../assets/image/je4.png" alt="" width="50" height="50">
          <span class="recommond">视频专区</span>
      </p>
        <div class="gridlist-demo-container">
          <mu-grid-list class="gridlist-demo">
            <mu-grid-tile  v-for="item in recommondList" key="item.aid" >
              <img :src="item.pic" @click="playDetail(item.aid)"/>
              <span slot="title" @click="playDetail(item.aid)">{{item.title}}</span>
              <span slot="subTitle">by <b>{{item.author}}</b></span>
            </mu-grid-tile>
          </mu-grid-list>
        </div>
    
    </mu-paper>
          <br>
      <br>
      <br>
      <br>

  </div>

</template>

<script>
import vSwiper from '@/components/swiper.vue'
import APlayer from 'aplayer'
export default {
    data () {
        return {
          "recommondList": [
            {
            
                "aid": 12667643,
                "typename": "口琴♪·轻爵士",
                "title": "Right☆Eye 惠惠角色歌+MAD(B萌应援)",
                "play": 212,
                "author": "冬夜听雨",
                "description": "惠惠加油！\r\n嗯这次是有趣的爵士向曲子\r\n很有趣哪\r\n真爱票一定要投给惠惠哦！\r\n之后MP3会附在下面。。。\r\n喜欢的观众老爷们求个硬币",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-4c81a784f4fbf495.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/1.%E3%80%90%E5%8F%A3%E7%90%B4%E2%99%AA%C2%B7%E8%BD%BB%E7%88%B5%E5%A3%AB%E3%80%91Right%E2%98%86Eye%20%E6%83%A0%E6%83%A0%E8%A7%92%E8%89%B2%E6%AD%8C+MAD%28B%E8%90%8C%E5%BA%94%E6%8F%B4%29-1.1%28Av12667643,P1%29.mp4"
            },
            {
            
                "aid": 12675741,
                "typename": "口琴",
                "title": "secret base 未闻花名ED",
                "play": 284,
                "author": "傻攀不是傻攀",
                "description": "我觉得没有什么曲子比这首更适合离别了吧\r\n后期做的最好的一次，可惜拯救不了我的魔音，吹毁了\r\n这么催泪的曲子这样厚颜无耻真的好吗！\r\n最后还是希望大家喜欢吧！\r\n用琴 SCX64",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-8ddd7ba610ca53c6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/1.%E3%80%90%E5%8F%A3%E7%90%B4%E3%80%91secret%20base%20%E6%9C%AA%E9%97%BB%E8%8A%B1%E5%90%8DED-1.1%28Av12675741,P1%29.mp4"
            },
            {
            
                "aid": 2348813,
                "typename": "口琴",
                "title": "【四月是你的谎言】若能绽放光芒  半音阶口琴_演奏",
                "play": 21242,
                "author": "一抔清辉",
                "description": "MAD原址：av2158711 感觉会是很棒的番（至今未补）以及现在很喜欢的乐队，于是非常想吹这曲子，可惜CX12坏了…纠结了很久最后用270匆匆的录了TAT视频苦手，直接找了个挺喜欢的视频，感谢同意提供视频的up主~音频地址：https://5sing.kugou.com/fc/14162767.html",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-9757e1c2ed6b2b93.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/1.%E3%80%90%E5%9B%9B%E6%9C%88%E6%98%AF%E4%BD%A0%E7%9A%84%E8%B0%8E%E8%A8%80%E3%80%91%E8%8B%A5%E8%83%BD%E7%BB%BD%E6%94%BE%E5%85%89%E8%8A%92%20%20%E5%8D%8A%E9%9F%B3%E9%98%B6%E5%8F%A3%E7%90%B4-1.1%28Av2348813,P1%29.mp4"
            },
            {
                "aid": 3482446,
                "typename": "口琴",
                "title": "克罗地亚狂想曲 嘴唇已着火！",
                "play": 116584,
                "author": "吹口琴的水",
                "description": "自制 口琴是s64，麦克风sm57，录音软件ce，读高中的时候第一次听到这首曲子就喜欢上了，一直对它的旋律念念不忘，其实对于我而言，可以用自己的方式演奏自己喜欢的音乐是最高兴的了。记得去年八月份也录过一个版本，虽然进步缓慢但是还是会继续加油哒！可惜的是半音阶口琴的双音极其有限，个人能力也很有限，吹成这样各位看官不要笑话我啊....我只是个卖艺的...音频在这里https://pan.baidu.com/s/1c1pjmSg\r\n伴奏在这里https://pan.baidu.com/s/1hrip1KK",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-5bb0d46c11e26f3f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": ""
            },
            {
                "aid": 1303749,
                "typename": "口琴",
                "title": "命运石之门 负荷领域的既视感ED",
                "play": 1303749,
                "author": "苦逼阿昙口琴修炼中",
                "description": "自制 拿到新琴后的磨合第一作，各方面来说其实都是很不满意，但是考虑到是换琴后的第一曲比较有纪念意义就还是献丑上传了_(:з」∠)_天狼星还真难驾驭啊，都吹了半个月了，还是很不习惯。上次投稿：av1303708",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-10809a39da483004.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/1.%E3%80%90%E5%8F%A3%E7%90%B4%E3%80%91%E5%91%BD%E8%BF%90%E7%9F%B3%E4%B9%8B%E9%97%A8%20%E8%B4%9F%E8%8D%B7%E9%A2%86%E5%9F%9F%E7%9A%84%E6%97%A2%E8%A7%86%E6%84%9FED-1.1%28Av1303749,P1%29.mp4"
            },
            {
                "aid": 12319969,
                "typename": "口琴",
                "title": "1.15倍速终端之王与异世界的骑士",
                "play": 197171,
                "author": "Meng月下の炎",
                "description": "表示只会腹断的我已经被虐成狗了(=・ω・=)\r\n整首曲子的难度很大，吹完差点憋死了\r\n感谢@纯音碎梦 提供的mv：12249842\r\n录音我会在下面的评论放出，喜欢的朋友可以关注我哦~~\n另外附上我的嘴速投稿(flower dance):https://www.bilibili.com/video/av12406987",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-9cc8640ca5a79d96.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/1.%E9%AB%98%E8%83%BD%EF%BC%81%E4%BD%A0%E5%8F%AF%E6%9B%BE%E7%9F%A5%E9%81%93%E5%8F%A3%E7%90%B4%E4%B9%9F%E8%83%BD%E5%A6%82%E6%AD%A4%E7%87%83%EF%BC%9F%20%E3%80%90%E5%8F%A3%E7%90%B4%E5%A5%8F%E3%80%911.15%E5%80%8D%E9%80%9F%E7%BB%88%E7%AB%AF%E4%B9%8B%E7%8E%8B%E4%B8%8E%E5%BC%82%E4%B8%96%E7%95%8C%E7%9A%84%E9%AA%91%E5%A3%AB-1.%E5%BA%8F%E5%88%97%2001%28Av12319969,P1%29.mp4"
            },
            {
                "aid": 4205205,
                "typename": "口琴",
                "title": "千本樱【你从未听过如此高能的口琴合奏】",
                "play": 927233,
                "author": "JP是只熊",
                "description": "自制 || 本家：sm15630734 || 口琴：月光银百合、JP是只熊 || 后期：JP是只熊 ||\r\n 一个多月前跟月光提出合奏时就说了，尽情嗨，怎么爽怎么演。\r\n结果风格迥异的两人就这样走上了双排的道路，朝着嘴强王者的越走越远......\r\n联动月光的嘴速单投：flower dance（av4201870）\r\n【月光的画外音：JP是笨蛋】【JP的画外音：对对我最近弱智点数是高了点（弱智+998.jpg）】\r\n【录音存放地：https://pan.baidu.com/s/1qWK4cPI】",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-e62319ba34d5be93.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/1.%E3%80%90%E5%8F%A3%E7%90%B4%E3%80%91%E5%8D%83%E6%9C%AC%E6%A8%B1%E3%80%90%E4%BD%A0%E4%BB%8E%E6%9C%AA%E5%90%AC%E8%BF%87%E5%A6%82%E6%AD%A4%E9%AB%98%E8%83%BD%E7%9A%84%E5%8F%A3%E7%90%B4%E5%90%88%E5%A5%8F%E3%80%91-1.1%28Av4205205,P1%29.mp4"
            },
            {
                "aid": 6695303,
                "typename": "口琴",
                "title": "若宫崎骏动画配乐组曲 没有口琴玩我要死了",
                "play": 70181,
                "author": "那年秋天的梦幻",
                "description": "- 宫崎骏动画配乐组曲 Harmonica version- \n- 音频收藏与下载 @网易云 https://music.163.com/#/song?id=435307395 - \n\n曲目列表：\n1、いのちの名前（生命之名）《千寻千寻》  2、めぐる季节（更替的四季）《魔女急宅便》 3、风のとおり道（风之甬道）《龙猫》  4、君をのせて（伴随着你）《天空之城》 5、同1\n\n心血来潮做了一期视频，这是口琴圈特别受人喜欢的一首曲子。好一段时间没有玩口琴，我快要狗带了。。。\n",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-03d8cfc36613bed0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/1.%E3%80%90%E5%8F%A3%E7%90%B4%E3%80%91%E5%AE%AB%E5%B4%8E%E9%AA%8F%E5%8A%A8%E7%94%BB%E9%85%8D%E4%B9%90%E7%BB%84%E6%9B%B2%20%E6%B2%A1%E6%9C%89%E5%8F%A3%E7%90%B4%E7%8E%A9%E6%88%91%E8%A6%81%E6%AD%BB%E4%BA%86-1.1%28Av6695303,P1%29.mp4"
            }
    ],

"recommondList1": [
            {
            
                "id": 1000001,
                "typename": "排骨大大",
                "title": "八度和音入门与浅谈",
                "author": "sqrsqr32",
                "description": "",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-864e45115c886b37.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/%E5%85%AB%E5%BA%A6%E5%92%8C%E9%9F%B3%E5%85%A5%E9%97%A8%E4%B8%8E%E6%B5%85%E8%B0%88.mp4"
            },
            {
            
                "id": 1000002,
                "typename": "排骨大大",
                "title": "颤音，震音",
                "author": "sqrsqr32",
                "description": "",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-b829195f5ccbf574.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/%E9%A2%A4%E9%9F%B3%EF%BC%8C%E9%9C%87%E9%9F%B3.mp4"
            },
            {
            
                "id": 1000003,
                "typename": "排骨大大",
                "title": "断奏",
                "author": "sqrsqr32",
                "description": "",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-693930646f308805.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/%E6%96%AD%E5%A5%8F.mp4"
            },
            {
            
                "id": 1000004,
                "typename": "排骨大大",
                "title": "花舌",
                "author": "sqrsqr32",
                "description": "",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-de120b8f12fdec7e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/%E8%8A%B1%E8%88%8C.mp4"
            },
            {
            
                "id": 1000005,
                "typename": "排骨大大",
                "title": "快速演奏入门和概述",
                "author": "sqrsqr32",
                "description": "",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-abfad72355b9cd53.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/%E5%BF%AB%E9%80%9F%E6%BC%94%E5%A5%8F%E5%85%A5%E9%97%A8%E5%92%8C%E6%A6%82%E8%BF%B0.mp4"
            },
            {
            
                "id": 1000006,
                "typename": "排骨大大",
                "title": "移琴，推键",
                "author": "sqrsqr32",
                "description": "",
                "pic": "http://upload-images.jianshu.io/upload_images/2141706-b9b5c98e412b388c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                "src": "http://otr48sjv5.bkt.clouddn.com/%E7%A7%BB%E7%90%B4%EF%BC%8C%E6%8E%A8%E9%94%AE.mp4"
            }
            
    ]





           }
    },
    components: {
        vSwiper,
    },
    created () {

      this.$store.state.recommondList = this.recommondList
      this.$store.state.recommondList1 = this.recommondList1
    
    },
    computed: {
        // isrecommondList() {
        //     return this.$store.state.recommondList
        // },
        // isrecommondList1() {
        //     return this.$store.state.recommondList1
        // }
    },
    mounted () {
            var ap1 = new APlayer({
        element: player1,
        narrow: false,
        autoplay: false,
        showlrc: false,
        mutex: true,
        theme: '#7e57c2',
        mode: 'random',
        music: [
            {
                title: '数码宝贝 Brave heart',
                author: 'FREEDOM54',
                url: 'http://link1.5sing.kugou.com/35037559/ApQEAFX0UvqIJm1oAA_ePaYfYPUAABmVgKCjqAAD95V687.mp3',
                pic: 'http://img5.5sing.kgimg.com/force/T1P2bTBXET1R4cSCrK_188_188.png'
            },
            {
                title: '星之所在',
                author: 'FREEDOM54',
                url: 'http://link1.5sing.kugou.com/35037559/Yg0DAFXt30eAGeqCABHLdZiBmeU375.mp3',
                pic: 'http://img5.5sing.kgimg.com/force/T1P2bTBXET1R4cSCrK_188_188.png'
            },
            {
                title: '花名未闻 ED secret base 君がくれたもの',
                author: 'FREEDOM54',
                url: 'http://link1.5sing.kugou.com/35037559/_5MEAFX3bKSAQU2SABYZmeNGqtM935.mp3',
                pic: 'http://img5.5sing.kgimg.com/force/T1P2bTBXET1R4cSCrK_188_188.png'
            },
            {
                title: '火影忍者 萤之光',
                author: 'FREEDOM54',
                url: 'http://link1.5sing.kugou.com/35037559/BJQEAFXz1uSIGw0nAA9MSuYCzZ8AAAKKwNk2h8AD0xi465.mp3',
                pic: 'http://img5.5sing.kgimg.com/force/T1P2bTBXET1R4cSCrK_188_188.png'
            }
        ]
      });
      var ap2 = new APlayer({
        element: player2,
        narrow: false,
        autoplay: false,
        showlrc: false,
        mutex: true,
        theme: '#7e57c2',
        mode: 'random',
        music: [
            {
                title: 'ハイドアンド シーク Hide And Seek ',
                author: '猫燐kirin03',
                url: 'http://link1.5sing.kugou.com/35037559/ApQEAFXsZJeAYIcnABCpWsBgz5c804.mp3',
                pic: 'http://wsing.bssdl.kugou.com/16171fa7eb52fb3036b0a6d876ae58dc.jpg_188x188.jpg'
            },
            {
                title: '告白予行練習',
                author: '猫燐kirin03',
                url: 'http://link1.5sing.kugou.com/35037559/eg0DAFbE4JaIVkdeAAoLb8D6eDsAAAIJwJIIYAACguH110.mp3',
                pic: 'http://wsing.bssdl.kugou.com/16171fa7eb52fb3036b0a6d876ae58dc.jpg_188x188.jpg'
            },
            {
                title: '血界战线ED Sugar Song to Bitter Step',
                author: '猫燐kirin03',
                url: 'http://link1.5sing.kugou.com/35037559/v4YBAFXn1q6IWHe0AAbzxADcV34AAA4fAGdr-EABvPc412.mp3',
                pic: 'http://wsing.bssdl.kugou.com/16171fa7eb52fb3036b0a6d876ae58dc.jpg_188x188.jpg'
            }
        ]
      });
      var ap3 = new APlayer({
        element: player3,
        narrow: false,
        autoplay: false,
        showlrc: false,
        mutex: true,
        theme: '#7e57c2',
        mode: 'random',
        music: [
            {
                title: '六兆年と一夜物語',
                author: '月光银百合',
                url: 'http://link1.5sing.kugou.com/35037559/A5QEAFXmAtWIMhVAAA2nzIC0htgAAAy3AGUtvMADafk974.mp3',
                pic: 'http://wsing.bssdl.kugou.com/c66f82bdb5b49e9b88dcfe898407da93.jpg_188x188.jpg'
            },
            {
                title: '口袋妖怪 XY 天台 BGM',
                author: '月光银百合',
                url: 'http://link1.5sing.kugou.com/35037559/w4YBAFXngBWIThk7AAuvAcbmqGQAAA4yQLVjmoAC68Z330.mp3',
                pic: 'http://wsing.bssdl.kugou.com/c66f82bdb5b49e9b88dcfe898407da93.jpg_188x188.jpg'
            }
        ]
      });
      var ap4 = new APlayer({
        element: player4,
        narrow: false,
        autoplay: false,
        showlrc: false,
        mutex: true,
        theme: '#7e57c2',
        mode: 'random',
        music: [
            {
                title: '爱尔兰画眉',
                author: '翎渡',
                url: 'http://otr48sjv5.bkt.clouddn.com/%E7%BF%8E%E6%B8%A1%20-%20%E7%88%B1%E5%B0%94%E5%85%B0%E7%94%BB%E7%9C%89.mp3',
                pic: 'http://p1.music.126.net/Cu_ikJw5uW7Ez7FfmI2aBQ==/7906588115606542.jpg?param=180y180'
            },
            {
                title: '野蜂飞舞',
                author: '翎渡',
                url: 'http://otr48sjv5.bkt.clouddn.com/%E7%BF%8E%E6%B8%A1%20-%20%E9%87%8E%E8%9C%82%E9%A3%9E%E8%88%9E%20%20-%20%E5%8D%8A%E9%9F%B3%E9%98%B6%E5%8F%A3%E7%90%B4.mp3',
                pic: 'http://p1.music.126.net/Cu_ikJw5uW7Ez7FfmI2aBQ==/7906588115606542.jpg?param=180y180'
            },
            {
                title: 'purple passion',
                author: '翎渡',
                url: 'http://otr48sjv5.bkt.clouddn.com/%E7%BF%8E%E6%B8%A1%20-%20purple%20passion%20%20-%20%E5%8D%8A%E9%9F%B3%E9%98%B6%E5%8F%A3%E7%90%B4.mp3',
                pic: 'http://p1.music.126.net/Cu_ikJw5uW7Ez7FfmI2aBQ==/7906588115606542.jpg?param=180y180'
            }
        ]
      });
      var ap5 = new APlayer({
        element: player5,
        narrow: false,
        autoplay: false,
        showlrc: false,
        mutex: true,
        theme: '#7e57c2',
        mode: 'random',
        music: [
            {
                title: 'letter song.cover',
                author: '流萤川小时',
                url: 'http://otr48sjv5.bkt.clouddn.com/%E6%B5%81%E8%90%A4%E5%B7%9D%E5%B0%8F%E6%97%B6-letter%20song.mp3',
                pic: 'http://wsing.bssdl.kugou.com/35e35d257b628b4735e76f24bc6177ec.jpg_188x188.jpg'
            },
            {
                title: '四月は君の嘘-私の嘘',
                author: '流萤川小时',
                url: 'http://otr48sjv5.bkt.clouddn.com/%E6%B5%81%E8%90%A4%E5%B7%9D%E5%B0%8F%E6%97%B6-%E5%9B%9B%E6%9C%88%E3%81%AF%E5%90%9B%E3%81%AE%E5%98%98-%E7%A7%81%E3%81%AE%E5%98%98.mp3',
                pic: 'http://wsing.bssdl.kugou.com/35e35d257b628b4735e76f24bc6177ec.jpg_188x188.jpg'
            },
            {
                title: '远い空へ',
                author: '流萤川小时',
                url: 'http://otr48sjv5.bkt.clouddn.com/%E6%B5%81%E8%90%A4%E5%B7%9D%E5%B0%8F%E6%97%B6-%E8%BF%9C%E3%81%84%E7%A9%BA%E3%81%B8.mp3',
                pic: 'http://wsing.bssdl.kugou.com/35e35d257b628b4735e76f24bc6177ec.jpg_188x188.jpg'
            }
        ]
      });

        this.$store.state.banner = [
          {"id":1,"pic":"http://upload-images.jianshu.io/upload_images/2141706-edc791104ab5d06b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"},{"id":2,"pic":"http://upload-images.jianshu.io/upload_images/2141706-4ba8571ca63467f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"},{"id":3,"pic":"http://upload-images.jianshu.io/upload_images/2141706-b120eb7d223c52e8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"},{"id":4,"pic":"http://upload-images.jianshu.io/upload_images/2141706-9054491cb8aaa19a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"}
        ]
    },
    methods: {
        playDetail(aid) {
            this.$router.push(
                 {name: 'recommondPlay', params: {'aid': aid}}
             )
        },
        playDetail1(id) {
            this.$router.push(
                 {name: 'recommondPlay1', params: {'id': id}}
             )
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/recommond.scss';
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo{
  width: 500px;
  
  overflow-y: auto;
}

</style>
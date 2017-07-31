<template>
    <div class="headpage">
        <div class="b-header" v-if="($route.name !== 'showPlay' )  && ($route.name !== 'dramaPlay') && ($route.name !== 'recommondPlay') && ($route.name !== 'searchList')" :style="{backgroundColor: skinColor}">
            <i class="fa fa-bars" aria-hidden="true" @click="toggleSidebar"></i>
            <img src="../assets/image/avatar.png" @click="toggleSidebar" alt="" class="b-avatar">
            <span class="b-username" @click="toggleSidebar">Justice_Eternal  (´・ω・`)</span>
            <div class="b-navbar">
                <ul>
                    <li class="b-show">
                        <router-link to="/show">谱曲</router-link>
                    </li>
                    <li class="b-recommond">
                        <router-link to="/recommond">视频</router-link>
                    </li>
                    <li class="b-drama">
                        <router-link to="/drama">录音</router-link>
                    </li>
                </ul>
             </div>
        </div>
        <div class="b-content">
            <router-view></router-view>
        </div>
        <transition name="fold">
            <div class="b-sidebar" v-if="sidebarShow">
                <div class="b-user" :style="{backgroundColor: skinColor}">
                    <img src="../assets/image/avatar.png" alt="">                    
                    <div class="icon" style="color: white">  
                        <i class="fa fa-moon-o" aria-hidden="true" @click="changeColor('black')" v-if="isShowSkin"></i>
                        <i class="fa fa-sun-o" aria-hidden="true" @click="changeColor('#d6504f')" v-if="!isShowSkin"></i>
                    </div>  
                    <div class="user-desc">
                        <div>
                            <span class="user-username">EX咖喱棒</span>
                            <span class="user-grade">LV99</span>
                        </div> 
                        <span class="user-vip" :style="{Color: skinColor}">口技大师</span>
                        <span class="user-vip" :style="{Color: skinColor}">自由姐化身</span>                                      
                        <div class="user-money">
                            <span class="user-coin"> ACG口琴众的大家庭的一员</span>
                        </div> 
                    </div>                    
                </div>
                <div class="b-sideItem">
                    <ul class="side-List" @click="toggleSidebar">
                        <mt-cell-swipe title="首页" to="show" >
                             <span></span>
                             <img class="tag" slot="icon" src="../assets/image/s1.png">
                        </mt-cell-swipe>
                         <mt-cell-swipe title="新手入门" to="start" >
                             <span></span>
                             <img class="tag" slot="icon" src="../assets/image/s3.png" width="24" height="24">
                        </mt-cell-swipe>
                         <mt-cell-swipe title="大神录音" to="drama"   >
                             <span></span>
                             <img class="tag" slot="icon" src="../assets/image/s8.png" width="24" height="24">
                        </mt-cell-swipe>
                         <mt-cell-swipe title="口技视频" to="recommond" >
                             <span></span>
                             <img class="tag" slot="icon" src="../assets/image/s10.png" width="24" height="24">
                        </mt-cell-swipe>
                         <mt-cell-swipe title="使用说明" to="instruction" >
                             <span></span>
                             <img class="tag" slot="icon" src="../assets/image/s11.png" width="24" height="24">
                        </mt-cell-swipe>
                        <mt-cell-swipe title="关于本站" to="about" >
                             <span></span>
                             <img class="tag" slot="icon" src="../assets/image/s7.png" width="24" height="24">
                        </mt-cell-swipe>
                     </ul>
                     <ul class="other-site">
                        <li>
                          <a href="https://tieba.baidu.com/f?ie=utf-8&kw=justice_eternal&fr=search">
                            <img src="../assets/image/tieba.png">
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/zytx121/justice_eternal">
                            <img src="../assets/image/github.png">
                          </a>
                        </li>
                    </ul>                
                </div>
            </div>
        </transition>
        <transition name="fade">
                <div class="mask" v-show="sidebarShow" @click="toggleSidebar"></div>
        </transition>
        

    </div>
</template>

<script>
export default {
    data () {
        return {
            sidebarShow: false,
            isShowSkin: true,
            keywords: '',
        }
    },
    created () {

    },
    computed: {
        skinColor() {
             return this.$store.state.skinColor;
        },
        showList() {
             return this.$store.state.showList;        
        },
        searchList() {
            return this.$store.state.searchList;
        },
        isListShow() {
            return this.$store.state.isListShow;             
        },
        searchbarShow() {
            return this.$store.state.searchbarShow;             
        },
    },
    methods: {
        toggleSidebar () {
            this.sidebarShow = ! this.sidebarShow
        },
        toggleSearchbar () {
            this.$store.state.searchbarShow  = ! this.$store.state.searchbarShow 
        },
        searchShow () {
             this.$router.push(
                 { path: '/#/search'}
             )
             this.$store.state.searchbarShow = ! this.$store.state.searchbarShow
        },
        searchSub () {
             let keywords = this.keywords
             this.util.openIndicator()
             this.axios.post('https://api.imjad.cn/bilibili/?get=search&keyword=' + keywords ).then((res) => {
                this.util.closeIndicator()
                this.$store.state.searchList = res.data.result.video
                this.$store.state.isListShow = true
             }).catch((error) => {
                this.util.pop()
                this.keywords = ''
             })
        },
        searchPlay (aid, title, description) {
             this.$router.push(
                     {name: 'searchList', params: {'aid': aid}}
             )
             this.$store.state.searchTitle = title
             this.$store.state.searchDesc = description
             this.$store.state.isListShow = false;
             this.$store.state.searchbarShow = false;
        },
        changeColor (color) {
            this.$store.commit('changeColor', color)
            this.isShowSkin = ! this.isShowSkin
            localStorage.skinColor = color;
        },
        back () {
            this.$router.push(
                 {name: 'show'}
            )
            this.$store.state.searchbarShow  = false
            this.$store.state.isListShow  = false
            
        },

    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/header.scss';
</style>
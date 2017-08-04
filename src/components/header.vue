<template>

        <div class="headpage">
        <div class="b-header" v-if="($route.name !== 'showPlay' )  && ($route.name !== 'dramaPlay') && ($route.name !== 'recommondPlay') && ($route.name !== 'recommondPlay1') &&($route.name !== 'searchList')" :style="{backgroundColor: skinColor}">
            <i class="fa fa-bars" aria-hidden="true" @click="toggle(true)"></i>
            <img src="../assets/image/avatar.png" @click="toggle(true)" alt="" class="b-avatar">
            <span class="b-username" @click="toggle(true)">Justice_Eternal</span>
        </div>

        <div class="b-content">



            <router-view></router-view>

        </div>

    

    
        <mu-drawer :open="open" :docked="docked" @close="toggle()" >
            <div class="b-siderbar">
                <div class="b-user" :style="{backgroundColor: skinColor}">
                    <img src="../assets/image/avatar.png" alt="">                    
                    <div class="icon" style="color: white">  
                        <i class="fa fa-moon-o" aria-hidden="true" @click="changeColor('black')" v-if="isShowSkin"></i>
                        <i class="fa fa-sun-o" aria-hidden="true" @click="changeColor('#009688')" v-if="!isShowSkin"></i>
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
                <mu-list-item title="首页" to="/show" @click="toggle()">
                  <mu-icon slot="left" value="books"/>
                </mu-list-item>
                <mu-list-item title="新手入门" to="/start" @click="toggle()">
                  <mu-icon slot="left" value="send"/>
                </mu-list-item>
                <mu-list-item title="使用说明" to="/instruction" @click="toggle()">
                  <mu-icon slot="left" value="build"/>
                </mu-list-item>
                <mu-list-item title="关于本站" to="/about" @click="toggle()">
                  <mu-icon slot="left" value="account_circle"/>
                </mu-list-item>
              </mu-list>

                    <ul class="other-site">
                        <li>
                          <mu-icon-button  href="https://tieba.baidu.com/f?ie=utf-8&kw=justice_eternal&fr=search" target="_blank">
                            <img src="../assets/image/tieba.png">
                          </mu-icon-button>
                        </li>
                        <li>
                          <mu-icon-button  href="https://github.com/zytx121/justice_eternal" target="_blank">
                            <img src="../assets/image/github.png">
                          </mu-icon-button>
                        </li>
                    </ul> 
<!--                 <div class="b-sideItem">
                    <ul class="side-List" @click="toggleSidebar">
                        <mt-cell-swipe title="首页" to="show" >
                             <span></span>
                             <img class="tag" slot="icon" src="../assets/image/s1.png">
                        </mt-cell-swipe>
                         <mt-cell-swipe title="新手入门" to="start" >
                             <span></span>
                             <img class="tag" slot="icon" src="../assets/image/s3.png" width="24" height="24">
                        </mt-cell-swipe>
                         <mt-cell-swipe title="佳作欣赏" to="recommond" >
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
                
                </div> -->
            </div>
    </mu-drawer>
        <transition name="fade">
                <div class="mask" v-show="sidebarShow" @click="toggleSidebar"></div>
        </transition>

<!--         <mt-tabbar v-model="selected" fixed=true>
          <mt-tab-item id="搜谱">
            <img slot="icon" src="../assets/image/searchicon.png">
            <router-link to="/show" class="puzi">搜谱</router-link>
          </mt-tab-item>
          <mt-tab-item id="分享">
            <img slot="icon" src="../assets/image/s7.png">
            <router-link to="/recommond" class="puzi">佳作欣赏</router-link>
          </mt-tab-item>
        </mt-tabbar> -->

          <mu-paper class="bottombar" >
            <mu-bottom-nav :value="bottomNav" shift @change="handleChange" style="position:absolute">
              <mu-bottom-nav-item value="books" title="搜谱" icon="books" to="/show"/>
              <mu-bottom-nav-item value="music" title="佳作欣赏" icon="music_note" to="/recommond"/>
            </mu-bottom-nav>
          </mu-paper>

      
    </div>
</template>

<script>
export default {
    data () {
        return {
            sidebarShow: false,
            isShowSkin: true,
            keywords: '',
            selected: '搜谱',
            bottomNav: 'books',
            bottomNavColor: 'books',
            open: false,
            docked: true
        }
    },
    created () {

    },
    computed: {
        skinColor() {
             return this.$store.state.skinColor;
        },
        searchList() {
            return this.$store.state.searchList;
        }
    },
    methods: {
        toggleSidebar () {
            this.sidebarShow = ! this.sidebarShow
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
        handleChange (val) {
          this.bottomNav = val
        },
        toggle (flag) {
          this.open = !this.open
          this.docked = !flag
        }

    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/header.scss';

.bottombar {
    position: fixed;
    bottom: 56px;
    left: 0;
    right: 0;
}

</style>
<template>
  <div class="blog-list-container">
    <input type="text" class="fl query" list="wlmslist" v-model="keyword" placeholder="告诉JE酱~ 你又想要什么奇怪的谱子 →_→"
               @keyup.enter="searchIssues()" />
    <datalist id="wlmslist" style="color: #39C5BB">
        <option value="届かない恋">届かない恋</option>
    </datalist>

    <transition name="fade">
<!--       <labels-list class="label" />  -->
      <div  class="pic" v-show="!listShow">
        <img src="../assets/image/logo.png" width="200px" height="240px">
      </div>
    </transition>

    <transition name="fade">
      <div  v-show="listShow">
        <div class="table-header" v-if="totalNum" >
          <span>乐谱来源</span>
          <span>/ 标签</span>
        </div>

          
          <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}"> 
          <mu-paper :zDepth="1">
            <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" topPullText="上面啥也没有，别看了- -！"  topLoadingText="" topDropText="上面啥也没有，别看了- -！"  bottomPullText="上拉加载更多谱子！"bottomDropText="快放开JE酱 (｡・`ω´･)"  ref="loadmore" style="font-size: 1.5rem; color: #39C5BB">  
              <ul class="issue-list" style="color: #000">
                <li v-for="issue in issues" :key="issue.id">
                  <router-link class="mr30" :to="{name:'showDetail', params: {number: issue.number, issue: issue}}">
                    {{issue.title.trim().substring(0, 19)}}
                  </router-link>
                  <span class="tag tag-small" v-for="label in issue.labels" :key="label.id" @click="setActiveLabel(label)"
                        :style="{ backgroundColor: '#' + label.color}">{{label.name}}</span>
                </li>
                <mu-back-top/>
              </ul>

            </mt-loadmore>
              </mu-paper>
            <div class="slogan" v-if="!totalNum" >
              <p>肥肠抱歉，您要找的谱子暂时还没入库 - -！</p>
              <br>
              <a href="https://github.com/zytx121/justice_eternal/issues" target="_blank" ><p style="color: #39C5BB">欢迎上传！阿里嘎多！</p></a>
            </div>

            <div class="slogan" v-if="moreShow" >
              <p>没有更多了</p>
            </div>
            <div class="slogan" v-else >
              <p>下拉拯救世界！</p>
            </div>
              <br>
              <br>
              <br>
              <br>
        </div>


      </div>
    </transition>
          

  </div>

</template>
<style lang="scss" scoped>
  @import "../assets/css/common";
  $table-header-height: 50px;
  $item-height: 69px;
  $time-width: 240px;
  $title-pdding-left: 67px;
  $bottom-bar-height: 70px;


  .main-body {
    width:98%;
    margin: .5rem auto;
  }

  .pic {
    margin-top:7rem;
    text-align: center;
  }
  .slogan {
      color: #CCC;
      font-weight: 500;
      font-size: 1.6rem;
      text-align: center;
      margin-top: 2rem;
  }

  .tag {
    font-size: 1rem;
    border-radius: 50%;
    padding: 0.2rem .5rem;
    margin-right: .2rem;
  }

  .issue-list {
    margin-left: -4rem;
    .mr30 {
      font-weight: 600;
      margin-right: .5rem;    
    }

    li {
      list-style-type: none;
      height: $item-height;
      border-bottom: solid 1px #eeeeee;
      padding-left: $title-pdding-left;
      a {
        height: $item-height;
        line-height: $item-height;
        font-size: 15px;
        color: #4b595f;
      }
      a:hover {
        color: #3593f2;
      }
    }
  }

  .table-header {
    margin-left: -4rem;
    height: $table-header-height;
    background-color: #f9fafc;
    font-size: 14px;
    color: #888;
    line-height: $table-header-height;
    :first-child {
      padding-left: $title-pdding-left;
    }
    :last-child {
      width: $time-width;
    }
  }

 



  .query {
    margin-top: 11px;
    margin-bottom: 5px;
    margin-left: .3rem;
 

    height: 16px;
    width: 98%;
    border-radius: 3px;
    padding: 15px 30px 15px 15px;
    border: solid 1px #eeeeee;
    font-size: 14px;
    color: #4b595f;
    outline: none;
    background: url("../assets/image/enter-icon.svg") no-repeat calc(100% - 10px) center;
    background-color: #f9fafc;
  }
  .query:focus {   
    border: solid 1px #39C5BB; 
}  


  .query::placeholder {
      color: #bbb;
  }

  .pagination {
    float: right;
    margin: 16px 0px;
  }

  .label {
    margin-bottom: 5rem;
    margin-left: 2rem;
  }

</style>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import LabelsList from './LabelsList.vue'
  export default {
    data () {
      return {
        listShow: false,
        moreShow: false,
        keyword: '',
        totalNum: 0,
        currentPage: 1,
        pageSize: 10,
        issues: [],
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了  
        scrollMode:"auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
      }
    },
    components: {
      LabelsList
    },
    watch: {
      activeLabel: function (label) {
        this.keyword = ''
        
        this.currentPage = 1
        this.pageSize = 10
        this.getIssues()
      }
    },
    computed: {
      ...mapGetters([
        'activeLabel'
      ])
    },
    methods: {
      ...mapActions([
        'updateActiveLabel'
      ]),

      setActiveLabel (label) {
        this.updateActiveLabel(label)
      },
      searchIssues () {
        this.listShow = true
        this.currentPage = 1
        this.getIssues1()
        this.$indicator.open({
          text: 'LCL开始注入...',
          spinnerType: 'double-bounce'
        })

      },
      handleCurrentPageChanged (val) {
        this.currentPage = val
        this.getIssues()
      },
      getIssues () {
        this.$indicator.open({
            text: '変動率 1.048596%',
            spinnerType: 'double-bounce'
        })
        this.$gitHubApi.getIssues(this, {
          label: this.activeLabel ? this.activeLabel.name : '',
          keyword: this.keyword,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }).then(response => {
          this.totalNum = response.data.total_count
          this.issues = response.data.items
          this.isHaveMore((parseInt((this.totalNum - 1) / this.pageSize) + 1)>this.currentPage)
          this.$indicator.close()
        })
      },
      getIssues1 () {
        this.$gitHubApi.getIssues(this, {
          label: '',
          keyword: this.keyword,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }).then(response => {
          this.totalNum = response.data.total_count
          this.issues = response.data.items
          this.isHaveMore((parseInt((this.totalNum - 1) / this.pageSize) + 1)>this.currentPage)
          this.$indicator.close()
        })
      },
      loadTop:function() { //组件提供的下拉触发方法  
        //下拉加载  
        // this.loadPageList();  
        this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位  
      },  
      loadBottom:function() {  
        // 上拉加载  
        this.more();// 上拉触发的分页查询  
        this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位  
      },  
      // loadPageList:function (){  

      //   this.$gitHubApi.getIssues(this, {
      //     label: this.activeLabel ? this.activeLabel.name : '',
      //     keyword: this.keyword,
      //     currentPage: 1,
      //     pageSize: this.pageSize
      //   }).then(response => {
      //     this.totalNum = response.data.total_count

      //     this.isHaveMore((parseInt((this.totalNum - 1) / this.pageSize) + 1) > this.currentPage)
      //     this.issues = response.data.items
      //     this.$nextTick(function () {  
      //       // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，  
      //       // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，  
      //       // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好  
      //       this.scrollMode = "touch";  
      //     });
      //   })
      // },  
      more:function (){  
          // 分页查询  
        this.currentPage = this.currentPage + 1;  
        this.$gitHubApi.getIssues(this, {
          label: this.activeLabel ? this.activeLabel.name : '',
          keyword: this.keyword,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }).then(response => {
          this.totalNum = response.data.total_count
          this.isHaveMore((parseInt((this.totalNum - 1) / this.pageSize) + 1)>this.currentPage)
          this.issues = this.issues.concat(response.data.items)
          this.$nextTick(function () {  
            // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，  
            // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，  
            // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好  
            this.scrollMode = "touch";  
          });
        })
      },  
      isHaveMore:function(isHaveMore){  
        // 是否还有下一页，如果没有就禁止上拉刷新  
        this.allLoaded = true; //true是禁止上拉加载 
        this.moreShow =  true;
        if(isHaveMore){  
          this.allLoaded = false;
          this.moreShow =  false;  
        }  
      } 
    },
    mounted: function () {
      // this.loadPageList()
      // this.$nextTick(function () {
      //   this.getIssues()
      // })
    }
  }
</script>

<template>
  <div class="blog-list-container">
    <input type="text" class="fl query" list="wlmslist" v-model="keyword" placeholder="告诉JE酱~ 你又想要什么奇怪的谱子 →_→"
               @keyup.enter="searchIssues()" />
    <datalist id="wlmslist" style="color: #39C5BB">
        <option value="鸟之诗">鸟之诗</option>
        <option value="届かない恋">届かない恋</option>
        <option value="聖なる日の祈り">聖なる日の祈り</option>
    </datalist>

    <transition name="fade">
<!--       <labels-list class="label" />  -->
      <div  class="pic" v-show="!listShow">
        <img src="../assets/image/logo.png">
      </div>
    </transition>

    <transition name="fade">
      <div  v-show="listShow">
        <div class="table-header" v-if="totalNum" >
          <span>乐谱来源</span>
          <span>/ 标签</span>
        </div>
        <div class="scrollable-container">
          <ul class="issue-list">
            <li v-for="issue in issues" :key="issue.id">
              <router-link class="mr30" :to="{name:'showDetail', params: {number: issue.number, issue: issue}}">
                {{issue.title.trim().substring(0, 35)}}
              </router-link>
              <span class="tag tag-small" v-for="label in issue.labels" :key="label.id" @click="setActiveLabel(label)"
                    :style="{ backgroundColor: '#' + label.color}">{{label.name}}</span>
            </li>
          </ul>
          <div class="slogan" v-if="!totalNum" >
            <p>肥肠抱歉，您要找的谱子暂时还没入库 - -！</p>
            <br>
            <a href="https://github.com/zytx121/justice_eternal/issues"><p style="color: #39C5BB">欢迎上传！阿里嘎多！</p></a>
            
          </div>

          <div class="bottom-bar" v-if="totalNum>=10" >
            <pagination class="pagination" :totalNum="totalNum" :currentPage="currentPage" :pageSize="pageSize"
                        @currentPageChanged="handleCurrentPageChanged"/>
          </div>
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

  .blog-list-container {
    @include excludeLabelListHeightBox();
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
      margin-top: 5rem;
  }

  .tag {
    font-size: 1rem;
    border-radius: 50%;
    padding: 0.2rem .5rem;
    margin-right: .2rem;
  }

  .issue-list {
    margin-left: -2rem;
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
    margin-left: -2rem;
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

  .scrollable-container {
    overflow: scroll;
    @include heightBox($table-header-height);
  }

  .bottom-bar {
    height: $bottom-bar-height;
    margin-top: 50px;
    padding: 0px 40px;
  }

  .query {
    margin-top: 11px;
    margin-bottom: 5px;
    margin-left: .5rem;
    height: 16px;
    width: 84%;
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
    border: solid 2px #39C5BB; 
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
  import Pagination from '../components/Pagination.vue'
  import LabelsList from './LabelsList.vue'
  export default {
    data () {
      return {
        listShow: false,
        keyword: '',
        totalNum: 0,
        currentPage: 1,
        pageSize: 20,
        issues: []
      }
    },
    components: {
      Pagination,
      LabelsList
    },
    watch: {
      activeLabel: function (label) {
        this.keyword = ''
        
        this.currentPage = 1
        this.pageSize = 20
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

      },
      handleCurrentPageChanged (val) {
        this.currentPage = val
        this.getIssues()
      },
      getIssues () {
        this.$gitHubApi.getIssues(this, {
          label: this.activeLabel ? this.activeLabel.name : '',
          keyword: this.keyword,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }).then(response => {
          this.totalNum = response.data.total_count
          this.issues = response.data.items
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
        })
      }
    },
    mounted: function () {
      // this.$nextTick(function () {
      //   this.getIssues()
      // })
    }
  }
</script>

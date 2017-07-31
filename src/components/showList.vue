<template>
  <div class="blog-list-container">
    <div class="table-header">
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
      <div class="bottom-bar">
        <input type="text" class="fl query" v-model="keyword" placeholder="点击这里搜索你想要的谱子"
               @keyup.enter="searchIssues()"/>
        <pagination class="pagination" :totalNum="totalNum" :currentPage="currentPage" :pageSize="pageSize"
                    @currentPageChanged="handleCurrentPageChanged"/>
      </div>
    </div>
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

  .tag {
    border-radius: 50%;
    padding: 0.2rem .5rem;
    margin-right: .3rem;
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

  .query::placeholder {
      color: #bbb;
  }

  .pagination {
    float: right;
    margin: 16px 0px;
  }
</style>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import Pagination from '../components/Pagination.vue'

  export default {
    data () {
      return {
        keyword: '',
        totalNum: 0,
        currentPage: 1,
        pageSize: 10,
        issues: []
      }
    },
    components: {Pagination},
    watch: {
      activeLabel: function (label) {
        this.keyword = ''
        this.totalNum = 0
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
        this.currentPage = 1
        this.getIssues()
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
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getIssues()
      })
    }
  }
</script>

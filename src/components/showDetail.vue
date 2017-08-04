<template>

  <div v-if="issue" class="blog-detail-container">
    <div class="title-container">
      <span class="title">{{issue.title.trim()}}</span>
    </div>
    <div class="title-container1">
      <span class="tag tag-small" v-for="label in issue.labels" :key="label.id" 
            :style="{ backgroundColor: '#' + label.color}">{{label.name}}</span>
    </div>

    <div class="comment-container">
      <comment :comment="issue"/>
      <comment v-for="comment in comments" :key="comment.id" :comment="comment"/>
      <br>
      <br>
      <mu-paper :zDepth="2">
      <div id="gitalk-container" ></div>
      </mu-paper>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/css/common";
  $title-container-height: 3rem;

  .blog-detail-container {
    margin-top:3rem;
    @include excludeLabelListHeightBox();
  }

  .title-container {
    width: 100%;
    display: block;
    height: $title-container-height;
    line-height: $title-container-height;
    background-color: #f9fafc;
    text-align: center;
    span {
      float: none;
    }
    .title {
      width: 100%;
      font-size: 2rem;
      color: #39C5BB;
    }
  }

    .title-container1 {
    width: 100%;
    margin-top: 0rem;
    display: inline-block;
    height: $title-container-height;
    line-height: $title-container-height;
    background-color: #fff;
    padding: 0px 0px;
    text-align: center;
    span {
      float: none;
    }

    .tag {
      backgouond: white;
      font-size: 1.5rem;
      height: 1rem;
      line-height: 1rem;
      margin-right: 1rem;
      border-radius: 50%;
      padding: 0.2rem .4rem;
    }
    
  }

  .comment-container {
    @include heightBox($title-container-height);
    overflow: scroll;
    padding: 0px 20px;
  }

  .remark {
    cursor: pointer;
    user-select: none;
    margin: 30px 0px;
    margin-bottom: 6rem;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 4px;
    font-size: 16px;
    background-color: #eff7ff;
    color: #3593f2;
    &:hover {
      background-color: #3593f2;
      color: #ffffff;
    }
  }
</style>
<script>
  import Gitalk from 'gitalk'
  import { mapActions } from 'vuex'
  import Comment from '../components/Comment.vue'

  export default{
    data () {
      return {
        issue: null,
        number: null,
        comments: []
      }
    },
    components: {Comment},
    methods: {
      ...mapActions([
        'updateActiveLabel'
      ]),
      setActiveLabel (label) {
        this.updateActiveLabel(label)
        this.$router.push('/')
      },
      getComments () {
        if (this.issue && this.issue.comments > 0) {
          this.$gitHubApi.getComments(this, this.issue.comments_url).then(response => {
            this.comments = response.data

          })
        }
      },
      getIssue () {
        this.$gitHubApi.getIssue(this, this.number).then(response => {
          this.issue = response.data
          this.getComments()

        })
      },
      back () {
        this.$router.go(-1)
      },
      remark () {
        window.open(this.issue.html_url)
      }
    },
    created () {
      if (this.$route.params.issue) {
        this.issue = this.$route.params.issue
      } else {
        if (this.$route.params.number) {
          this.number = this.$route.params.number
        } else {
          this.$router.replace('/')
        }
      }
    },
    beforeMount: function () {

    },
    mounted: function () {        

      
      this.$nextTick(function () {
          var gitalk = new Gitalk({
                clientID: '45a4adb3e60063d0bb7c',
                clientSecret: '6538ec3b188702e9ddaab5899a49a48781e57957',
                repo: 'justice-eternal.github.io',
                owner: 'Justice-Eternal',
                admin: ['zytx121'],
              })

              gitalk.render('gitalk-container')

        if (this.issue) {
          this.getComments()
        } else {
          this.getIssue()
        }
      })
    }
  }
</script>

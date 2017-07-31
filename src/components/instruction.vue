<template>
  <div class="wrapper">
    <article class="markdown-body" v-html="renderedMarkdown"/>
  </div>
</template>

<script>
export default {
    data () {
        return {
           renderedMarkdown: ''
        }
    },
    methods: {

    },
    mounted: function () {
        this.axios.get('https://raw.githubusercontent.com/Justice-Eternal/justice-eternal.github.io'  + '/master/instruction.md').then(res => {
            if (res.data) {
                this.renderedMarkdown = this.$marked(res.data)
            }
        }).catch((error) => {
            console.log(error)
      })
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/about.scss';

</style>
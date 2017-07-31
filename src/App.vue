<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import vHeader from '@/components/header.vue'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    vHeader
  },
  computed: {

  },
  methods: {
      ...mapActions([
        'setLabels',
        'setGitHubUser'
      ])
  },
    mounted: function () {
      this.$nextTick(function () {
        this.$gitHubApi.getUserInfo(this).then(this.$http.spread((userResp, labelResp) => {
          this.setGitHubUser(userResp.data)
          this.setLabels(labelResp.data)
          console.log(userResp.data)
          console.log(labelResp.data)
        }))
      })
    }
}
</script>

<style lang="css">
@import 'assets/css/reset.css';

</style>

<template>
  <ul v-if="showLabels" class="label-list">
    <li>
      <span class="tag" v-if="activeLabel == null" style="background-color: #3593f2;">ALL</span>
      <span class="tag tag-unchecked" v-else @click="setActiveLabel(null)">ALL</span>
    </li>
    <li v-for="label in labels1" :key="label.id">
      <span class="tag" v-if="activeLabel != null && activeLabel.name === label.name" @click="setActiveLabel(label)"
            :style="{ backgroundColor: '#' + label.color}">{{label.name}}</span>
      <span v-else class="tag tag-unchecked" @click="setActiveLabel(label)">{{label.name}}</span>
    </li>
    <li>
      <span class="tag tag-unchecked"  @click="setShowLabels">></span>
    </li>
  </ul>
  <ul v-else class="label-list">
    <li>
      <span class="tag" v-if="activeLabel == null" style="background-color: #3593f2;">ALL</span>
      <span class="tag tag-unchecked" v-else @click="setActiveLabel(null)">ALL</span>
    </li>
    <li  v-for="label in labels" :key="label.id">
      <span class="tag" v-if="activeLabel != null && activeLabel.name === label.name" @click="setActiveLabel(label)"
            :style="{ backgroundColor: '#' + label.color}">{{label.name}}</span>
      <span v-else class="tag tag-unchecked" @click="setActiveLabel(label)">{{label.name}}</span>
    </li>
    <li>
      <span class="tag tag-unchecked"  @click="setShowLabels" style="color: #d6504f;"><</span>
    </li>
  </ul>

</template>
<style lang="scss" scoped>
  .label-list {
    padding: 20px 0px 0px 10px;
    display: inline-block;
    list-style: none;
    li {
      float: left;
      margin-bottom: 20px;
      margin-right: 10px;
    }
  }
  .tag {
    border-radius: 50%;
    padding: .6em 1rem;
  }

  .tag-unchecked {
    background-color: #f2f5f8;
    color: #444;
  }
</style>
<script>
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    data: {
    },
    computed: {
      ...mapGetters([
        'labels1',
        'labels',
        'showLabels',
        'activeLabel'
      ])
    },
    methods: {
      ...mapActions([
        'setLabels',
        'setShowLabels',
        'updateActiveLabel'
      ]),
      setActiveLabel (label) {
        this.updateActiveLabel(label)
        this.$router.replace('/show/showList')
      }
    }
  }
</script>

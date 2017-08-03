// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import mint from '@/library/mint'
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown.css'
import UtilJS from './assets/js/util.js'
import account from './modules/account'
import issue from './modules/issue'
import {gitHubApi, isGetUserInfo} from './utils'
import 'gitalk/dist/gitalk.css'



Vue.prototype.util = UtilJS
Vue.prototype.$highlight = highlight
Vue.prototype.$http = axios
Vue.prototype.$gitHubApi = gitHubApi
Vue.prototype.$isGetUserInfo = isGetUserInfo
Vue.use(VueAxios, axios);

Vue.use(Vuex);

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return Vue.prototype.$highlight.highlightAuto(code).value
  }
})
Vue.prototype.$marked = marked


Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        banner: [],
        recommondList: [],
        recommondList1: [],
        skinColor: localStorage.skinColor || '#39C5BB',
        searchList: '',
        dramaList: [],
        searchTitle: '',
        searchDesc: '',
        searchbarShow: false,
        isListShow: false,
        gitHubUsername: 'zytx121',
        gitHubRepositoty: 'justice_eternal'

    },                                                                                                                                                                 
    mutations: {
        changeColor(state, color) {
             state.skinColor = color;
        } 
    },
    actions: {

    },
    modules: {
      account,
      issue
    }

})


/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




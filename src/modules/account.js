/**
 * Created by bingoogolapple on 2017/5/31.
 */
import { makeAction } from '../util'

const SET_GITHUB_USER = 'SET_GITHUB_USER'

const state = {
  gitHubUser: null,  // 这个不要修改，这个不要修改，这个不要修改
  gitHubUsername: 'zytx121',  // 修改成你自己的 GitHub 账号
  
}

const mutations = {
  [SET_GITHUB_USER] (state, gitHubUser) {
    state.gitHubUser = gitHubUser
  }
}

const actions = {
  setGitHubUser: makeAction(SET_GITHUB_USER)
}

const getters = {
  gitHubUsername: (state) => {
    return state.gitHubUsername
  },
  context: (state) => {
    return `${state.gitHubUsername}/justice_eternal`
  },
  gitHubUser: (state) => {
    return state.gitHubUser
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}

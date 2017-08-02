/**
 * Created by bingoogolapple on 2017/5/31.
 */
import { makeAction } from '../util'

const SET_LABELS = 'SET_LABELS'
const SET_ACTIVE_LABEL = 'SET_ACTIVE_LABEL'
const SET_SHOWLABELS = 'SET_SHOWLABELS'
const SET_SWITCH_VIDEO = 'SET_SWITCH_VIDEO'

const state = {
  labels: [],
  activeLabel: null,
  showLabels: true
}

const mutations = {
  [SET_LABELS] (state, labels) {
    state.labels = labels
  },
  [SET_SHOWLABELS] (state, showLabels) {
    state.showLabels = !state.showLabels
  },
  [SET_ACTIVE_LABEL] (state, label) {
    if ((state.activeLabel && label && label.name === state.activeLabel.name) || (!state.activeLabel && !label)) {
      return
    }

    state.activeLabel = label
  }
}

const actions = {
  setLabels: makeAction(SET_LABELS),
  setShowLabels: makeAction(SET_SHOWLABELS),
  updateActiveLabel: makeAction(SET_ACTIVE_LABEL)
}

const getters = {
  labels: (state) => {
    return state.labels
  },
  labels1: (state) => {
    return state.labels.filter(label => label.name.match(/[^A-Z]/))
  },
  showLabels: (state) => {
    return state.showLabels
  },
  activeLabel: (state) => {
    return state.activeLabel
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}

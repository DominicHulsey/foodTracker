import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

Vue.use(Vuex)

let _sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/kenny/logs/',
  timeout: 3000
})

var _nutritionApi = Axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/natural/nutrients/',
  timeout: 3000,
  headers: {
    'x-app-key': "8120134b8a361912934e53e415fffd2c",
    "x-app-id": "814a7db9"
  }
})

export default new Vuex.Store({
  state: {
    logs: [],
    food: []
  },
  mutations: {
    setLogs(state, data) {
      state.logs = data
    },
    addLog(state, data) {
      state.logs.push(data)
    },
    addFood(state, data) {
      state.food = data
    }
  },
  actions: {
    createLog({ commit, dispatch }, payload) {
      _sandboxApi.post('', payload)
        .then(res => {
          commit('addLog', res.data.data)
        })
    },
    getLogs({ commit, dispatch }) {
      _sandboxApi.get('')
        .then(res => {
          commit('setLogs', res.data.data)
        })
    },
    detailedPage({ commit, state }, payload) {
      let data = { payload }
    },
    findFood({ commit, dispatch }, payload) {
      _nutritionApi.post('', { query: payload })
        .then(res => {
          commit('addFood', res.data.data)
        })
    }
  }
})

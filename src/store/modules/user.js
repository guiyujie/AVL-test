import api from 'api/user'


// state
const state = {
  name: null
}

// getters
const getters = {

}

// actions
const actions = {
  async login({ commit }, data) {
    let res = await api.login(data)
    commit('login', res)
  }
}

// mutations
const mutations = {
  login(state, res) {
    state.name = res.data.name
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

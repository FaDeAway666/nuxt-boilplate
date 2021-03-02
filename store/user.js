/**
 * 作为一个module 存在
 */

export const state = () => {
  user: null
}

export const mutations = {
  setUser (state, status) {
    state.user = status
  }
}

export const actions = {
  LOGIN ( {commit} ) {
    commit('setUser', 'user')
  }
}

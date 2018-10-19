const state = () => ({
  count: 0,
  list: [],
  info: {},
  infos: [],
  page_nb: 0,
  page_prev: 0,
  page_next: 0,
  marker_pos: []
})

const mutations = {
  initial(state, infos) {
    state.infos = infos
  },
  set(state, e) {
    state.count = e.target.value
  },
  increment(state) {
    state.count++
  },
  reset(state) {
    state.count = 0
  },
  get_info(state, data) {
    state.info = infos
  },

  get_infos(state, data) {
    state.infos = data
  }
}

export { state, mutations }

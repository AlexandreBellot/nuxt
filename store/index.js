export const state = () => ({
  NavIsOpen: false,
  mouseAnime: false
})


export const mutations = {
  toggleNav (state) {
    state.NavIsOpen = !state.NavIsOpen
  },
  closeNav (state) {
    state.NavIsOpen = false
  },
  openNav (state) {
    state.NavIsOpen = true
  },
  setMouseAnime (state,instance) {
    state.mouseAnime = instance
  }
}

export const getters = {
    getMouseAnime: (state) => state.mouseAnime,
    getNavIsOpen: (state) => state.NavIsOpen
}

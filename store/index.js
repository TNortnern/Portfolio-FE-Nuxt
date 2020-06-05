export const state = () => ({
  navItems: [
    {
      name: 'About',
      to: '#about',
      icon: 'fas fa-info-circle'
    },
    {
      name: 'Projects',
      to: '#projects',
      icon: 'fas fa-th'
    },
    {
      name: 'Contact',
      to: '#contact',
      icon: 'fas fa-id-card-alt'
    }
  ],
  isAuthenticated: false
})
const mutations = {
  isAuthenticated (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  }
}
const actions = {

}

export default {
  state,
  mutations,
  actions
}

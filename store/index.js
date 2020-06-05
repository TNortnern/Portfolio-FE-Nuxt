import gql from 'graphql-tag'
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
  async nuxtServerInit ({ commit }, context) {
    try {
      const apollo = context.app.apolloProvider.clients.defaultClient
      const { data } = await apollo.query({
        query: gql`
              {
                projects {
                  id
                  name
                  images
                  technologies {
                    name
                  }
                }
              }
            `
      })
      commit('projects/setProjects', data.projects)
    } catch (err) {
      console.log('err', err)
    }
  }
}

export default {
  state,
  mutations,
  actions
}

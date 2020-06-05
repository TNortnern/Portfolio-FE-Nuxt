<template>
  <client-only>
    <div>
      <MobileNavigation />
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  </client-only>
</template>

<script>
import gql from 'graphql-tag'
import MobileNavigation from '~/components/layout/mobilenav/MobileNavigation'
import Hero from '~/components/portfolio/hero/Hero'
import Navbar from '~/components/layout/Navbar'
import About from '~/components/portfolio/about/About'
import Projects from '~/components/portfolio/projects/Projects'
import Contact from '~/components/portfolio/contact/Contact'
export default {
  components: {
    MobileNavigation,
    Hero,
    Navbar,
    About,
    Projects,
    Contact
  },
  layout: 'default',
  async fetch () {
    await this.$apollo.query({
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
      .then(({ data }) => {
        this.$store.commit('projects/setProjects', data.projects)
      })
      .catch((err) => {
        console.log('err', err)
      })
  },
  head: () => ({
    title: 'Portfolio'
  })
}
</script>

<template>
  <client-only>
    <div>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  </client-only>
</template>

<script>
import Hero from '~/components/portfolio/hero/Hero'
import Navbar from '~/components/layout/Navbar'
import About from '~/components/portfolio/about/About'
import Projects from '~/components/portfolio/projects/Projects'
import Contact from '~/components/portfolio/contact/Contact'
export default {
  components: {
    Hero,
    Navbar,
    About,
    Projects,
    Contact
  },
  layout: 'default'
}
</script>

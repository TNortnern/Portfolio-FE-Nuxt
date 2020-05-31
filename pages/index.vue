<template>
  <div>
    <Hero />
    <Navbar />
    <About />
  </div>
</template>

<script>
import Hero from '~/components/portfolio/hero/Hero'
import Navbar from '~/components/layout/Navbar'
import About from '~/components/portfolio/about/About'
export default {
  components: {
    Hero,
    Navbar,
    About
  },
  layout: 'default'
}
</script>

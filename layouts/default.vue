<template>
  <v-app>
    <nuxt />
    <client-only>
      <Footer />
    </client-only>
  </v-app>
</template>

<script>
import Footer from '~/components/layout/Footer'
export default {
  components: {
    Footer
  },
  data () {
    return {

    }
  }
}
</script>

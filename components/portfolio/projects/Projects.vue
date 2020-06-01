<template>
  <div id="projects">
    <h1
      data-aos="fade-in"
      class="display-1 text-uppercase text-center mb-0"
    >
      Projects
    </h1>
    <Underline data-aos="fade-in" />
    <v-tabs
      v-model="tab"
      :background-color="$store.state.constants.colors.gray"
      light
      centered
      :slider-color="$store.state.constants.colors.blackish"
      :color="$store.state.constants.colors.blackish"
      data-aos="fade-in"
    >
      <v-tab
        v-for="item in items"
        :key="item.name"
      >
        {{ item.name }}
      </v-tab>
    </v-tabs>
    <ProjectCards v-if="items.length" />
    <div
      v-else
      class="text-center"
    >
      <v-progress-circular
        class="mt-8"
        indeterminate
        color="primary"
      />
    </div>
  </div>
</template>

<script>
import ProjectCards from './ProjectCards'
export default {
  components: {
    ProjectCards
  },
  computed: {
    tab: {
      get () {
        return this.$store.state.projects.tab
      },
      set (val) {
        this.$store.commit('projects/setTab', val)
      }
    },
    items () {
      return this.$store.state.projects.items
    }
  },
  mounted () {
    this.initializeTabs()
  },
  methods: {
    initializeTabs () {
      let techs = []
      this.$store.state.projects.all.forEach((project) => {
        project.technologies.forEach((tech) => {
          const exists = techs.find(t => t.name === tech.name)
          if (!exists) {
            techs = [...techs, tech]
          }
        })
      })
      this.$store.commit('projects/setItems', techs)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
#projects {
  background-color: $gray;
  padding-top: 70px;
  min-height: 900px;
}
</style>

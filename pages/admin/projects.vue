<template>
  <AdminLayout title="Projects">
    <div class="text-center">
      <v-btn
        color="success"
        large
        @click="toggleAdding()"
      >
        Add Project
      </v-btn>
    </div>
    <ProjectForm :open-modal="adding" @toggle="toggleAdding" />
    <ProjectCards :admin="true" />
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/admin/AdminLayout'
import ProjectForm from '@/components/admin/ProjectForm'
import ProjectCards from '@/components/portfolio/projects/ProjectCards'
export default {
  layout: 'flat',
  components: {
    ProjectCards,
    AdminLayout,
    ProjectForm
  },
  data () {
    return {
      routes: [
        {
          name: 'Projects',
          route: 'projects',
          icon: 'fas fa-th'
        },
        {
          name: 'Technologies',
          route: 'technologies',
          icon: 'fas fa-bolt'
        },
        {
          name: 'Back to Portfolio',
          route: '/',
          icon: 'fas fa-arrow-left'
        }
      ],
      adding: false
    }
  },
  methods: {
    toggleAdding () {
      this.adding = !this.adding
    }
  },
  head: () => ({
    title: 'Admin - Projects'
  }),
  middleware: 'isAuth'
}
</script>

<style>
</style>

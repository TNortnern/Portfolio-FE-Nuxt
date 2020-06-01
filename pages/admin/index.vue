<template>
  <div class="admin">
    <client-only>
      <Login />
    </client-only>
  </div>
</template>

<script>
import Login from '@/components/admin/Login'
export default {
  layout: 'flat',
  middleware: 'guest',
  components: {
    Login
  },
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  head: () => ({
    title: 'Admin - Login'
  })
}
</script>

<style>
</style>

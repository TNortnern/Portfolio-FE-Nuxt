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
  components: {
    Login
  },
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  }
}
</script>

<style>
</style>

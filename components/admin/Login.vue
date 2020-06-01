<template>
  <div>
    <v-container
      class="d-flex justify-center align-center"
      style="height: 100vh"
    >
      <ValidationObserver ref="observer">
        <h1 class="text-center">
          Admin Portal
        </h1>
        <span
          v-if="error"
          class="v-messages theme--light error--text"
        >{{ error }}</span>
        <form @submit.prevent="login">
          <ValidationProvider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              required
              class="login__input"
            />
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            name="Password"
            rules="required|min:5"
          >
            <v-text-field
              v-model="password"
              :error-messages="errors"
              label="Password"
              required
              class="login__input"
              type="password"
            />
          </ValidationProvider>
          <v-btn
            :color="$store.state.constants.colors.darkerBlue"
            dark
            type="submit"
            min-width="92px"
            :style="loading ? 'pointer-events: none; opacity: 0.2' : ''"
          >
            <template v-if="!loading">
              submit
            </template>
            <template v-else>
              <v-progress-circular
                indeterminate
                color="white"
                :size="25"
              />
            </template>
          </v-btn>
        </form>
      </ValidationObserver>
    </v-container>
  </div>
</template>

<script>
import { login } from '@/graphql/Mutations'
export default {
  data: () => ({
    email: '',
    password: '',
    error: null,
    loading: false
  }),

  methods: {
    clear () {
      this.email = ''
      this.password = ''
      this.$refs.observer.reset()
    },
    async login () {
      this.error = null
      const isValid = await this.$refs.observer.validate()
      if (!isValid) { return }
      this.loading = true
      await this.$apollo.mutate({
        mutation: login,
        variables: {
          email: this.email,
          password: this.password
        }
      })
        .then((res) => {
          this.loading = false
          this.$store.commit('isAuthenticated', true)
          localStorage.setItem('token', res.data.login.token)
          const user = {
            user: res.data.login.user,
            token: res.data.login.token
          }
          this.$store.commit('auth/setUser', user)
          this.$router.push('admin/projects')
        })
        .catch((err) => {
          this.loading = false
          this.error = err.message.split(':')[1]
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
.login__input {
  width: 400px;
  @include mobile() {
    width: 295px;
  }
}
</style>

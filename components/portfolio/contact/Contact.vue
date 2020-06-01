<template>
  <div id="contact">
    <h1
      data-aos="fade"
      class="display-1 text-uppercase text-center mb-0"
    >
      Contact
    </h1>
    <Underline
      data-aos="fade-in"
      color="white"
    />
    <ValidationObserver ref="observer">
      <form
        data-aos="flip-left"
        class="d-flex flex-column align-center"
        @submit.prevent="sendMessage()"
      >
        <div class="contact__input">
          <ValidationProvider
            v-slot="{ errors }"
            name="Name"
            rules="required"
          >
            <input
              id="name"
              v-model="name"
              type="text"
              name="Name"
              placeholder="Name"
            >
            <span
              v-if="errors"
              class="v-messages theme--light error--text"
            >{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="contact__input">
          <ValidationProvider
            v-slot="{ errors }"
            name="Email"
            rules="required|email"
          >
            <input
              id="email"
              v-model="email"
              type="text"
              name="email"
              placeholder="Email"
            >
            <span
              v-if="errors"
              class="v-messages theme--light error--text"
            >{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="contact__input">
          <ValidationProvider
            v-slot="{ errors }"
            name="Message"
            rules="required"
          >
            <textarea
              id="message"
              v-model="message"
              name="message"
              cols="30"
              rows="7"
              placeholder="Message"
            />
            <span
              v-if="errors"
              class="v-messages theme--light error--text"
            >{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <v-btn
          type="submit"
          class="mt-3"
          dark
          outlined
          @click="sendMessage()"
        >
          Submit
        </v-btn>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>

export default {
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async sendMessage () {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) { return }
      window.location.href = `mailto:traynorthern@yahoo.com?subject=Let's talk&body=${this.message}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
#contact {
  background-color: $blackish;
  color: white;
  padding-top: 75px;
  padding-bottom: 55px;
}
.contact__input {
  @include mobile() {
    width: 90%;
  }
  width: 400px;
  input,
  textarea {
    background: $darkerBlue;
    border: 0;
    box-sizing: border-box;
    color: #fff;
    display: block;
    font-size: 19px;
    margin-bottom: 3px;
    outline: none;
    padding: 10px 15px;
    width: 100%;
    &::placeholder {
      color: #fff;
    }
  }
  textarea {
    resize: none;
  }
}
</style>

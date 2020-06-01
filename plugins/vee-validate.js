import Vue from 'vue'
import { required, email } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
setInteractionMode('eager')

extend('email', {
  ...email,
  message: 'Invalid email address'
})
extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

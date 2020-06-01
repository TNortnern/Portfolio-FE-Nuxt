import Vue from 'vue'
import { required, email, min, max } from 'vee-validate/dist/rules'
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

extend('min', {
  ...min,
  message: '{_field_} must be {length} characters'
})
extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters'
})

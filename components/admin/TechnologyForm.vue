<template>
  <v-dialog
    v-model="modalOpen"
    max-width="600px"
  >
    <v-card class="position--relative">
      <v-card-title class="d-flex justify-center">
        <span
          class="headline"
          :style="`color: ${$store.state.constants.colors.darkerBlue}`"
        >Technology Form</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                label="Name of Technology*"
                required
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="description"
                outlined
                name="description"
                label="Description"
              />
            </v-col>
            <v-col cols="12">
              <v-file-input
                v-model="image"
                chips
                label="Choose Image*"
              />
            </v-col>
            <v-col
              cols="12"
              class="text-center"
            >
              <img
                v-if="src"
                width="175px"
                :src="src"
                alt="preview image"
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          :color="$store.state.constants.colors.darkerBlue"
          dark
          @click="submit"
        >
          Add
        </v-btn>
        <v-btn
          :color="$store.state.constants.colors.darkerBlue"
          dark
          @click="modalOpen = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { addTechnology } from '@/graphql/Mutations'
import TechnologiesQuery from '@/graphql/TechnologiesQuery'

export default {
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    technology: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      name: '',
      description: '',
      image: null,
      src: ''
    }
  },
  computed: {
    modalOpen: {
      get () {
        return this.modal
      },
      set (val) {
        this.$emit('toggle', val)
      }
    }
  },
  watch: {
    image (newval) {
      if (newval) {
        this.src = URL.createObjectURL(newval)
      }
    }
  },
  mounted () {
    if (this.technology) {
      this.name = this.technology.name
      this.description = this.technology.description ? this.technology.description : ''
      this.src = this.technology.image
    }
  },
  apollo: {
    technologies: TechnologiesQuery
  },
  methods: {
    submit () {
      if (this.technology) { this.edit() } else { this.addNew() }
    },
    addNew () {
      this.$apollo.mutate({
        mutation: addTechnology,
        variables: {
          name: this.name,
          description: this.description,
          image: this.image
        },
        update: (store, { data: { addTechnology } }) => {
          const data = store.readQuery({ query: TechnologiesQuery })
          data.technologies.push(addTechnology)
          store.writeQuery({ query: TechnologiesQuery, data })
        },
        optimisticResponse: {
          __typename: 'Mutation',
          addTag: {
            __typename: 'Technology',
            id: -1,
            name: this.name,
            description: this.description,
            image: this.image
          }
        }
      })
        .then(() => {
          this.modalOpen = false
          this.name = ''
          this.description = ''
          this.image = null
          this.src = ''
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>

<style>
</style>

<template>
  <v-container class="mt-8">
    <v-row justify="space-between">
      <v-col
        lg="6"
        sm="6"
        cols="12"
        class="text-center"
        data-aos="fade-right"
        data-aos-duration="350"
      >
        <img
          src="@/assets/other/persontyping.png"
          alt="person typing"
          class="about__description-image"
        >
        <h3 class="display-1">
          Who am I?
        </h3>
        <p>I'm a recent CS Grad that is passionate about Web Development. I enjoy frontend development most, from building UI's to email development. I always stride to get better and learn more everyday.</p>
      </v-col>
      <v-col
        data-aos="fade-left"
        data-aos-duration="350"
        sm="5"
        lg="6"
        cols="12"
      >
        <h3 class="display-1 text-center text-uppercase">
          Technologies
        </h3>
        <Underline styles="margin-bottom: 15px;" />
        <v-container>
          <v-row
            data-aos="fade-left"
            justify="center"
          >
            <AboutTechnologies
              v-for="tech in techs"
              :key="tech.name"
              :name="tech.name"
              :image="tech.image"
            />
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AboutTechnologies from './AboutTechnologies'
export default {
  components: {
    AboutTechnologies
  },
  data () {
    return {
      techs: [
        { name: 'HTML/CSS', image: 'htmlcss.png' },
        { name: 'JavaScript', image: 'javascript.png' },
        { name: 'Vue', image: 'vue.png' },
        { name: 'Nuxt', image: 'nuxt2.png' },
        { name: 'React', image: 'react.png' },
        { name: 'ReactNative', image: 'reactnative.png' },
        { name: 'Redux', image: 'redux.png' },
        { name: 'Node/Express', image: 'node.png' },
        { name: 'PHP', image: 'php.png' },
        { name: 'Laravel', image: 'laravel.png' },
        { name: 'MySQL', image: 'mysql.png' },
        { name: 'MVC', image: 'mvc.png' },
        { name: 'Java', image: 'java.png' },
        { name: 'GraphQL', image: 'graphql.png' },
        { name: 'MJML', image: 'mjml3.png' },
        { name: 'SCSS', image: 'sass.png' },
        { name: 'BEM', image: 'bem.png' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
$width: 380px;
h3 {
  color: $darkerBlue;
}
.about__description-image {
  width: $width;
  border-radius: 50%;
  height: $width;
  border: 2px solid $darkerBlue;
  @include mobile() {
    max-width: 300px;
    height: 300px;
  }
}
p {
  font-size: 20px;
  color: #616161;
  // width: $width;
}
</style>

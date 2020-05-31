<template>
  <div id="hero" class="hero position--relative">
    <HeroContent />
    <vue-particles
      color="#46a29f"
      :particle-opacity="1"
      :particles-number="110"
      shape-type="circle"
      :particle-size="4"
      lines-color="#dedede"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="true"
      click-mode="push"
      style="height: 100%"
    />
  </div>
</template>

<script>
import HeroContent from '@/components/portfolio/hero/HeroContent'
export default {
  components: {
    HeroContent
  },
  methods: {
    randomColor () {
      const listOfColors = ['#ffb84d', '#b300b3', '#000099', '#0000cc']
      return listOfColors[Math.floor(Math.random() * listOfColors.length)]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles';
.hero {
  background-color: $blackish;
  height: 750px;
  width: 100%;
}

</style>

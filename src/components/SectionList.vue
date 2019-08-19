<template>
  <div class=" text-center">
    <h1 id="title">{{ title }}</h1>
    <b-container fluid>
      <b-row align-h="center">
        <section-service-card 
          v-for="(picture, index) in pictures" 
          :key="index" 
          :pic=picture.pic 
          :text=picture.text />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SectionServiceCard from './SectionCard.vue';
export default {
  name: "SectionList",
  components: {
    SectionServiceCard
  },
  props: {
    pictures: Array,
    title: String
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Domine&display=swap');
.tech-card {
    max-width: 20rem;
    margin: .2rem;
}
#title {
  font-family: 'Domine', serif;
  font-weight: 500;
}
</style>

<template>
  <div>
    <section id="repair">
      <section-list 
        :pictures=repairList 
        title="Repair" />
    </section>
    <section id="build">
      <section-list 
        :pictures=repairList 
        title="Build" />
    </section>
    <section id="maintenance">
      <section-list 
        :pictures=repairList 
        title="Maintenance" />
    </section>
  </div>
</template>

<script>
import SectionList from '@/components/SectionList.vue'
export default {
  name: "services-page",
  components: {
    SectionList
  },
  data() {
    return {
      repairList: [
        { pic: '1.jpg', text: 'gambar 1'},
        { pic: '2.jpg', text: 'gambar 2'},
        { pic: '3.jpg', text: 'gambar 3'},
        { pic: '4.jpg', text: 'gambar 4'},
      ]
    }
  }
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

section {
  margin: 10rem 0;
}
</style>
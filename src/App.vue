<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.navbar {
  /* position: relative; */
  /* top: 0%; */
  font-size: 1.4rem;
  min-height: 5rem;
  z-index: 9999;
}
footer {
  height: 180px;
  background-color: aqua;
}
</style>
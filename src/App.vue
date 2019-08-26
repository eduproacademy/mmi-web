<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    <a href="https://api.whatsapp.com/send?phone=6288806956558" id="wa" target="blank">
      <img
        border="0"
        alt="whatsapp"
        src="./assets/wa.png"
        width="80"
        height="80"
      />
    </a>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
.navbar {
  font-size: 1.4rem;
  min-height: 5rem;
  z-index: 9999;
}
footer {
  height: 180px;
  background-color: aqua;
}

#wa {
  position: fixed;
  bottom: .8%;
  right: .3%;
}

</style>
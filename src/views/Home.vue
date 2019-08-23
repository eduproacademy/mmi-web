<template>
  <div style="marginTop: 5vh;">
    <header id="hero">
      <div class="main-title" id="hero-text">
        <div id="rect"></div>
        <h1>Build</h1>
        <h1>Repair</h1>
        <h1>Conversion</h1>
      </div>
    </header>
    <section id="our-story">
      <h1>Our Story</h1>
      <h4>
        We are a shipyard company which provides new-build services and dry docking / repair & maintenance services to third party vessels and to our own group owned vessels. 
      </h4>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Services from "@/components/Services.vue";
export default {
  name: "home",
  components: {
    Services
  },
  data() {
    return {};
  }
};
</script>

<style>
body {
  background-color: aliceblue;
}
@import url("https://fonts.googleapis.com/css?family=Fjalla+One|Open+Sans&display=swap");

#hero {
  margin: 8rem 1rem 0 1rem;
  height: 80vh;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.082),
      rgba(14, 65, 204, 0.37)
    ),
    url("https://www.niesternsander.com/friksbeheer/wp-content/uploads/2018/06/MG_7450-1920x820.jpg");
  background-position: top;
  position: relative;
  background-size: cover;
}

#hero-text {
  position: absolute;
  /* terhadap parent elemnt */
  top: 80%;
  left: 30%;
  text-align: left;
  color: white;

  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  /* terhadap element ini sendiri */
  transform: translate(-50%, -50%);
}
#rect {
  left: -50%;
  position: absolute;
  background-color: #1c90d8;
  height: 29rem;
  width: 20rem;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
}
.main-title h1 {
  font-family: "Fjalla One", sans-serif;
  font-weight: 700;
  font-size: 8rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
}

#our-story {
  background-image: url('../assets/wave.svg');
  background-repeat: no-repeat;
  padding-top: 10rem;
  margin-top: 4rem;
  padding-bottom: 30rem;
  height: 30rem;
}

#our-story h1 {
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  font-size: 7rem;
  letter-spacing: 0.2rem;
  color: white;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: right;
  padding-right: 15%;

}

#our-story h4 {
  font-family: "Fjalla One", sans-serif;

  font-size: 2.5rem;
  padding: 2rem;
    max-width: 80rem;
  color: #26408b;
  text-align: left;

}
#our-story svg {
  position: relative;
  z-index: -999;
}
</style>
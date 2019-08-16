<template>
  <div style="marginTop: 5vh;">
    <carousel :perPage="1" :loop="true">
      <slide id="slide1">
        <b-container>
          <h1 class="headline">Slide 1</h1>
        </b-container>
      </slide>
      <slide id="slide2">
        <b-container class="pb-5 headline-text">
          <div class="headline">AHOY</div>
          <div class="subheadline">The brand new ferry of the Wightlink fleet is delivered.</div>
          <ButtonHero />

        </b-container>
      </slide>
      <slide id="slide3">Slide 3</slide>
      <slide id="slide4">Slide 4</slide>
    </carousel>
    <Services />
    <Clients />
  </div>
</template>

<script>
// @ is an alias to /src
import Services from "@/components/Services.vue";
import Clients from "@/components/Clients.vue";
import ButtonHero from "@/components/ButtonHero.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "home",
  components: {
    Services,
    Clients,
    Carousel,
    Slide,
    ButtonHero,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Viga&display=swap');
.headline-text {
  font-family: 'Viga', sans-serif;
}
.VueCarousel-slide {
  position: relative;
  display: flex;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  align-items: flex-end;
  height: 95vh;
  cursor: pointer;
}
.headline {
  color: white;
  font-size: 8rem;
}

.subheadline {
  font-size: 2rem;
}
@media (min-width: 1281px) {
  #slide1 {
    background-image: url("../assets/1.jpg");
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  #slide1 {
    background-image: url("../assets/2.jpg");
  }
}

#slide2 {
  background-image: url(https://www.cemreshipyard.com/uploads/slide/image/1920x1080/4-5.jpg?=fad872f86ab4218377e85a5ee3a60f54);
}

#slide3 {
  background-image: url(https://www.cemreshipyard.com/uploads/slide/image/1920x1080/1-1.jpg?=d6fe3e2c7afdbe2b3ea153e87a7e03df);
}

#slide4 {
  background-image: url(https://www.cemreshipyard.com/uploads/slide/image/1920x1080/dji-0286-v2-en-son-slider-2.jpg?d6fe3e2c7afdbe2b3ea153e87a7e03df);
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
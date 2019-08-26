<template>
  <div style="marginTop: 5vh;">
    <header id="hero">
      <div class="main-title" id="hero-text">
        <div id="rect"></div>
        <h1>Repair</h1>
        <h1>Build</h1>
        <h1>Conversion</h1>
      </div>
    </header>
    <div id="our-story">
      <h1>Our Story</h1>
      <div id="pharagraph">
        <h4>The sea is our first love! Thus the reason why we immerse ourselves in the maritime business of shipyard.</h4>
        <br />
        <h4>We repair ships for regular maintenance or defects, new shipbuilding as well as ship conversion. Our combined expertise tantamount to 40 years of shipyard repair, build and conversion experience in the region.</h4>
        <br />
        <h4>We aspire to deliver our best services to our valued customers. We believe in forging lifelong relationships with all our stakeholders.</h4>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {},
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
  height: 75vh;
  background-image: url("../assets/photo/Hero.png");
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
  background-image: url("../assets/wave.svg");
  background-repeat: no-repeat;
  padding-top: 10rem;
  margin-top: 4rem;
  margin-bottom: 20rem;
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

#pharagraph {
  margin: 5rem;
  color: #26408b;
  text-align: left;
}
#pharagraph h4 {
  font-family: "Fjalla One", sans-serif;
  font-size: 2.5rem;
  padding: 0 2rem;
  max-width: 80rem;
}
#our-story svg {
  position: relative;
  z-index: -999;
}
</style>
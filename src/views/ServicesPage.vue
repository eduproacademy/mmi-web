<template>
  <div>
    <header></header>
    <div style="marginTop: 5rem;">
      <h1 class="" id="header-text">Services</h1>
      <b-row class="d-flex py-5">
        <div class="service-tab-desc flex-fill">
          <h4>We specialize in repair of steel barges, tugboats, LCT and small passenger/roro ferries.</h4>
          <h4>We have inhouse design and engineering services to meet the demands of our customers.</h4>
          <h4>We strictly abide by the rules of classification and the authorities to ensure safe shipping operations.</h4>
        </div>
        <div class="service-tab-list flex-fill">
          <h1>SHIP REPAIR</h1>
        </div>
      </b-row>
    </div>

    <b-row class="d-flex py-5">
      <div class="service-tab-list flex-fill">
        <h1>SHIP BUILDING</h1>
      </div>
      <div class="service-tab-desc flex-fill">
        <h4>We engage in new ship building of all sizes that meets our launch site water-depth with support from our inhouse design and engineering services.</h4>
      </div>
    </b-row>
    <b-row class="d-flex py-5">
      <div class="service-tab-desc flex-fill">
        <h4>We cater to customer requests for ship redesign so as to meet new technical and functional requirements ensuring customer continued shipping business.</h4>
      </div>
      <div class="service-tab-list flex-fill">
        <h1>SHIP CONVERSION</h1>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Fjalla+One|Open+Sans&display=swap");
h1 {
  font-family: "Fjalla One", sans-serif;
}

h4,
ul > li {
  font-family: "Open Sans", sans-serif;
}

header {
  height: 50vh;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.082),
      rgba(18, 81, 252, 0.205)
    ),
    url("../assets/photo/service_hero.jpg");
  background-position: top;
  position: relative;
  background-size: cover;
}

#header-text {
  position: absolute;
  /* terhadap parent elemnt */
  text-transform: uppercase;
  font-weight: 700;
  font-size: 6rem;
  letter-spacing: 0.5rem;
  top: 30%;
  left: 50%;
  text-align: center;
  text-align: center;
  color: white;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  /* terhadap element ini sendiri */
  transform: translate(-50%, -50%);
}

li {
  font-size: 1.3rem;
}
.service-tab-desc {
  padding: 3rem;
  color: white;
  background-color: #26408b;
}

@media (min-width: 1281px) {
  .service-tab-desc {
    width: 65rem;
  }
}

.service-tab-list {
  color: #26408b;
  padding: 3rem;
  background-color: beige;
}

.main-title {
  padding: 3rem;
  font-size: 4rem;
  font-weight: 400;
  text-transform: uppercase;
  position: absolute;
  top: 4rem;
  left: 4rem;
}
</style>

<template>
  <div>
    <header></header>
    <div style="marginTop: 5rem;">
      <h1 class="" id="header-text">Services</h1>
      <b-row class="d-flex py-5">
        <div class="service-tab-desc flex-fill">
          <h1>Ship Building</h1>
          <h4>We build ships for merchant shipping, inland shipping and offshore.</h4>
          <h4>Ship building is in our genes . We design and build a variety of ships, from Tug Boats and Barges.</h4>
        </div>
        <div class="service-tab-list flex-fill">
          <h1>How we build</h1>
          <ul>
            <li>In-House Design & Engineering</li>
            <li>Different Ship Types</li>
            <li>Efficient Production Process</li>
          </ul>
        </div>
      </b-row>
    </div>

    <b-row class="d-flex py-5">
      <div class="service-tab-list flex-fill">
        <h1>How we repair</h1>
        <ul>
          <li>24/7 Available</li>
          <li>Dock Location Bojonegara</li>
          <li>Graving Dock</li>
        </ul>
      </div>
      <div class="service-tab-desc flex-fill">
        <h1>Ship Repair</h1>
        <h4>Maju Maritim Indonesia has a wide, multi-specialized experience in ship repair. The company has specialists in all existing sub-disciplines.</h4>
        <h4>This is an appropriate response to the demand for surveys, mobilizations, maintenance and repair orders.</h4>
      </div>
    </b-row>
    <b-row class="d-flex py-5">
      <div class="service-tab-desc flex-fill">
        <h1>Ship Conversion</h1>
        <h4>We renew, redesign, and rebuild ships to new technical and functional requirements.</h4>
        <h4>Think of renewal of old ships, the redesign of existing ships or the conversion to new technical and functional requirements.</h4>
      </div>
      <div class="service-tab-list flex-fill">
        <h1>How we do it</h1>
        <ul>
          <li>Here the customer question comes first</li>
          <li>A customer-specific design is created</li>
          <li>Then the engineering takes place</li>
          <li>Customization as it should be</li>
        </ul>
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
    url("https://www.niesternsander.com/friksbeheer/wp-content/uploads/2018/06/MG_7450-1920x820.jpg");
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

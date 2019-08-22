<template>
  <div id="fot">
    <b-container fluid>
      <b-row class="mx-auto d-flex justify-content-around py-3">
        <div>
          <h2>Connect</h2>
          <img src="../assets/twitter.svg" alt="twitter logo" class="icon" />
          <img src="../assets/linkedin.svg" alt="linkedin logo" class="icon" />
        </div>
        <div>
          <h2>Contact</h2>
          <h5>T: +62 (0) 184 630 516</h5>
          <h5>E: info@mmishipyard.com</h5>
        </div>
        <div>
          <h2>Sitemap</h2>
          <h5>Our Story</h5>
          <h5>Services</h5>
          <h5>Facilities</h5>
          <h5>Contact Us</h5>
        </div>
      </b-row>
      <b-col class="text-center cpr">
        <p>Copyright © 2019 Maju Maritim Indonesia</p>
      </b-col>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Fjalla+One|Open+Sans&display=swap");
h2 {
  letter-spacing: 0.1rem;
  font-family: "Fjalla One", sans-serif;
}

h5,
p {
  font-family: "Open Sans", sans-serif;
}
#fot {
  margin-top: 5rem;
  background-color: transparent;
  color: #26408b;
}
.icon {
  width: 3rem;
  margin-right: 1rem;
}

.cpr {
  letter-spacing: .2rem;
  color: #1c90d8;
}
</style>

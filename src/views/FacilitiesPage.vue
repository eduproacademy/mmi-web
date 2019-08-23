<template>
  <div>
    <header></header>
    <h1 class="title main-title" id="header-text">Facilities</h1>
    <b-container fluid class="text-center facilist" style="marginTop: 5rem;">
      <b-row class="mx-auto d-flex justify-content-around py-3">
        <b-card
          no-body=""
          class="border-0 shadow"
          style="width: 30rem; height: 20rem;"
          img-src="https://www.cemreshipyard.com/assets/img/facilities/physical-investments.jpg"
          img-alt="Image"
          img-top
        >
          <h1 class="title caption">Dock 1</h1>
        </b-card>
        <b-card
          no-body
          class="border-0 shadow"
          style="width: 30rem; height: 20rem;"
          img-src="https://www.cemreshipyard.com/assets/img/facilities/innovative-investments.jpg"
          img-alt="Image"
          img-top
        >
          <h1 class="title caption">Dock 2</h1>
        </b-card>
        <b-card
          no-body
          class="border-0 shadow"
          style="width: 30rem; height: 20rem;"
          img-src="https://www.cemreshipyard.com/assets/img/facilities/hr-investments.jpg"
          img-alt="Image"
          img-top
        >
          <h1 class="title caption">Airbag Way</h1>
        </b-card>
      </b-row>
      <h1 class="title main-title">Map</h1>
      <img src="../assets/photo/Denah.jpg" alt width="100%" />
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Fjalla+One&display=swap");
header {
  height: 50vh;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.082),
      rgba(18, 81, 252, 0.205)
    ),
    url("https://www.carena.ci/ADM_CAR/wp-content/uploads/2019/05/Vue-dessus-VO-00000003-002@1.jpg");
  background-position: top;
  position: relative;
  background-size: cover;
}

#header-text {
  position: absolute;
  /* terhadap parent elemnt */
  font-weight: 700;
  font-size: 6rem;
  letter-spacing: 0.5rem;
  top: 30%;
  left: 50%;
  text-align: center;
  color: white;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  /* terhadap element ini sendiri */
  transform: translate(-50%, -50%);
}

.main-title {
  padding: 3rem;
  font-size: 4rem;
  font-weight: 400;
  text-transform: uppercase;
}

.caption {
  color: #26408b;
  padding: 1rem;
  background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.082),
      rgba(18, 81, 252, 0.205)
    );
}
.title {
  color: #26408b;
  font-family: "Fjalla One", sans-serif;
}

.facilist {
  background-image: url('../assets/wave.svg');
  background-repeat: no-repeat;
}
</style>
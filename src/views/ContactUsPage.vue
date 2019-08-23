<template>
  <div>
    <header></header>
    <h1 class="title main-title" id="header-text">Contact Us</h1>
      <h1 class="title main-title">Form</h1>


    <div class="shadow">
    <iframe
      id
      allowtransparency="true"
      allowfullscreen="true"
      allow="geolocation; microphone; camera"
      src="https://forms.app/form/5d5e65c8c8aa4c22eb0e7ad1"
      frameborder="0"
      style="width: 100%; height:56.6rem; border:none;"
    ></iframe>

    </div>
      <h1 class="title main-title">Map</h1>
    <div class="shadow">

    <iframe
      width="100%"
      height="450"
      frameborder="0"
      style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB4c9oRJROyKDrB1PwKkppNxZ_SeM7Fb8I&q=PT+Maju+Maritim+Indonesia+(Dok+Kapal)"
      allowfullscreen
    ></iframe>
    </div>
  
    <img src="../assets/wave.svg" alt width style="marginTop: 4rem;"/>
  </div>
</template>

  <script>
export default {};
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
  font-family: "Fjalla One";
  text-transform: uppercase;
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

#address {
  height: 50rem;
  width: 50rem;
  margin: 2rem;
}
#free-form {
  margin-left: 3rem;
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
  text-align: center;
  padding: 2rem;
  font-size: 4rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #26408b;
  font-family: "Fjalla One", sans-serif;
}
</style>
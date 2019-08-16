<template>
  <div id="fot">
    <b-container>
      <b-row class="" align-v="center pt-3">
        <b-col lg="4" id="left">
          <h2>Connect</h2>
        </b-col>
        <b-col lg="4" id="middle">
          <h2>Contact</h2>
          <p>Blablabla</p>
        </b-col>
        <b-col leg="4" id="right">
          <h2>Sitemap</h2>
          <ul style="listStyle: square;">
              <li>About Us</li>
              <li>Services</li>
              <li>Facilities</li>
              <li>Contact Us</li>
          </ul>
        </b-col>
      </b-row>
      <b-col class="text-center">
          Copyright © 2019 Maju Maritim Indonesia
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
#fot {
  background-color: black;
  color: azure;
}

</style>

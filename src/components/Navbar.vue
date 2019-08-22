<template>
  <div>
    <b-navbar toggleable="lg" type="light" fixed="top" style="backgroundColor: white;" class="shadow-sm">
        <router-link to="/">
      <b-navbar-brand>
        <img src="../assets/MMI_Logo.png" class="m-3 ml-4 d-inline-block" alt="Kitten">MMI SHIPYARD
        </b-navbar-brand>
        </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="mr-3">
            <router-link to="/services">SERVICES</router-link>
          </b-nav-item>
          <b-nav-item class="mr-3">
            <router-link to="/facilities">FACILITIES</router-link>
          </b-nav-item>
          <b-nav-item class="mr-3">
            <router-link to="/contactUs">CONTACT US</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Fjalla+One|Open+Sans&display=swap");
img {
  width: 7rem;
}
a .navbar-brand {
  font-family: "Fjalla One", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: .07rem;
  color: #26408b;
}
a.nav-link  {
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: .05rem;
  color: #26408b;
  
}

a.nav-link :after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: .2rem;
  left: 50%;
  position: absolute;
  background: #1c90d8;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a.nav-link :hover:after { 
  width: 100%; 
  left: 0; 
}
a.nav-link :hover { 
  width: 100%; 
  left: 0;
  text-decoration: none;
}
</style>

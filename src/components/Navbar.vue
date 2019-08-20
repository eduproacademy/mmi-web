<template>
  <div>
    <b-navbar toggleable="lg" type="light" fixed="top" style="backgroundColor: white;" class="shadow-sm">
      <b-navbar-brand href="#">MMI</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/">Us</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/services">Services</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/facilities">Facilites</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/">Contact Us</router-link>
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

<style>

</style>

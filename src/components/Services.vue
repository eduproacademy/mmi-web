<template>
  <div>
    <TitleSection title="Services" />
    <b-row align-h="center" class="mx-auto my-5">
      <ServiceCard title="Repair" />
      <ServiceCard title="Build" />
      <ServiceCard title="Maintenance" />
    </b-row>
  </div>
</template>

<script>
import ServiceCard from "./ServiceCard";
import TitleSection from "./TitleSection";
export default {
  name: "Services",
  components: {
    ServiceCard,
    TitleSection,
  }
};
</script>

<style>
</style>

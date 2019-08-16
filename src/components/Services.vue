<template>
  <div class="pt-5">
    <TitleSection class="pb-3" title="Services" />
    <b-row align-h="center" class="mx-auto">
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

<template>
  <div class="my-5 py-5">
    <TitleSection title="Clients" class="pb-3"/>
    <b-row align-h="center" class="mx-auto text-center">
      <ClientCard v-for="i in 6" :key="i" />
    </b-row>
  </div>
</template>

<script>
import ClientCard from "./ClientCard";
import TitleSection from "./TitleSection";
export default {
  name: "Clients",
  components: {
    ClientCard,
    TitleSection,
  },
};
</script>

<style>

</style>

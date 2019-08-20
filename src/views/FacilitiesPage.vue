<template>
  <div style="marginTop: 5rem;">
    <header></header>
    <b-container fluid class="text-center">
      <div>
        <h1 class="title main-title">Dock Facilities</h1>
      </div>
      <b-row class="mx-auto d-flex justify-content-around py-3">
        <b-card
          class="border-0"
          style="width: 30rem; height: 20rem;"
          img-src="https://www.cemreshipyard.com/assets/img/facilities/physical-investments.jpg"
          img-alt="Image"
          img-top
        >
          <h1 class="title">Deck 1</h1>
        </b-card>
        <b-card
          class="border-0"
          style="width: 30rem; height: 20rem;"
          img-src="https://www.cemreshipyard.com/assets/img/facilities/innovative-investments.jpg"
          img-alt="Image"
          img-top
        >
          <h1 class="title">Deck 2</h1>
        </b-card>
        <b-card
          class="border-0"
          style="width: 30rem; height: 20rem;"
          img-src="https://www.cemreshipyard.com/assets/img/facilities/hr-investments.jpg"
          img-alt="Image"
          img-top
        >
          <h1 class="title">Airbag Way</h1>
        </b-card>
      </b-row>

      <div>
        <h1 class="title main-title">Workshop & Equipment</h1>
      </div>
      <b-container fluid>
        <div class="px-4 py-4">
          <b-table striped hover :items="items"></b-table>
        </div>
      </b-container>
      <h1 class="title main-title">Map</h1>
      <img src="../assets/photo/Denah.jpg" alt="" width="100%">
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { Machines: `Lathe (mesin bubut) "Dragon" L `, HeavyEquipment: `Crane "P & H"`, Winch: `Portable Winch made by MMI up to 30 T` },
        { Machines: `Lathe "DMTG, L max 2 m, diameter max 4"`, HeavyEquipment: `Crane "Hitachi KH 180`, Winch: `Slipway Main Winch made by MMI, Gearbox: Hansen Patent, up to 120 T` },
        { Machines: `Shaft Lathe "San Shing"`, HeavyEquipment: `Crane "Groove"`, Winch: `Winch made by MMI, Gearbox: Valk, up to 100 T` },
        { Machines: `Drilling and Milling Machine "West Lake"`, HeavyEquipment: `Forklift up to 5 T` },
        { Machines: `Radial Drilling Machine "Ooya"`, HeavyEquipment: `Forklift "TCM" up to 10 T` },
        { Machines: `Shaping Machine "San Hou"`, HeavyEquipment: `Dozer "Komatsu D85A"` },
        { Machines: `Cutting Machine "Standard"`, HeavyEquipment: `Excavators: "Hyundai"` },
        { Machines: `Gantry Crane`, HeavyEquipment: `Excavators: "Sumimoto"`},
        { Machines: `Sandblast and Painting`, HeavyEquipment: `Long Arm "Hitachi"`},
        { Machines: `Centralized Screw Air Compressor`}
      ]
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Fjalla+One&display=swap");
header {
  height: 40rem;
  background-image: url("https://www.carena.ci/ADM_CAR/wp-content/uploads/2019/05/Vue-dessus-VO-00000003-002@1.jpg");
}
.main-title {
  padding: 3rem;
  font-size: 4rem;
  font-weight: 400;
  text-transform: uppercase;
}
.title {
  font-family: "Fjalla One", sans-serif;
}
</style>
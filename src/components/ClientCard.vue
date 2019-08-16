<template>
  <div>
    <b-card
      img-src="https://www.cemreshipyard.com/uploads/project/thumbnail/960x560/nb57-1030x400-v2-thumbnail-960x560-78.jpg?=b310c78ff8d33dd1bd08cd10d3df5494"
      img-alt="Image"
      img-top
      tag="article"
      class="mx-4 my-2 client-card rounded-0 shadow-sm"
    >
      <h3>Titanic</h3>
      <br>
      <b-button href="#" variant="outline-secondary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ClientCard"
};
</script>

<style scoped>
.btn-outline-secondary {
  border-radius: 0;
}
.client-card {
  overflow: hidden;
  width: 12.9rem;
  height: 17.5rem;
}

img.card-img-top {
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: transform .5s ease;
}

img.card-img-top:hover  {
  transform: scale(1.1)
}
</style>

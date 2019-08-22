<template>
    <b-card
      :title="title"
      class="service-card shadow border-0 rounded-0"
    >
    </b-card>
</template>

<script>
export default {
    name: "ServiceCard",
    props: {
      title: String,
      img: String
    }
}
</script>

<style>
.card-title {
  transform: translate();
  font-size: 4rem;
  color: white;
  font-weight: 700;
}

.service-card {
  transition: transform ease .3s;
}
.service-card:hover {
  transform: scale(1.03);

}

.service-card {
  width: 38rem; 
  height: 35rem; 
  background-image: url('../assets/1.jpg');
}
</style>

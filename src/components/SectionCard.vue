<template>
    <b-card
          :img-src="require('../assets/photo/' + pic)"
          img-alt="Image"
          overlay
          class="tech-card border-0 rounded-0 shadow"
        >
          <b-card-text>
            <p>{{ text }}</p>
          </b-card-text>
    </b-card>
</template>

<script>
export default {
    name: 'SectionServiceCard',
    props: {
        pic: String,
        text: String,
    },
};
</script>

<style scoped>
.card-body.card-img-overlay {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.082), rgba(18, 81, 252, 0.205))
}
.card-body {
    color: white;
    font-size: 1.3rem;
    font-weight: 800;
    display: flex;
    align-items:flex-end;
    justify-content: center;
}
</style>

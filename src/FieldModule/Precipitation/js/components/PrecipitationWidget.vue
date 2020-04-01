<template>
  <farm-widget>
    <h4 class="card-title">Precipitation Module</h4>
    <h5
      @click="openPrecipitation"
      class="clickable">
      Record Precipitation
      <IconRaindrops class="inline-svg"/>
    </h5>
  </farm-widget>
</template>

<script>
export default {
  methods: {
    openPrecipitation() {
      this.$router.push({ path: '/precipitation' });
    },
  },
};
</script>

<style scoped>

.clickable:hover {
  background-color: #eee;
  cursor: pointer;
}

</style>

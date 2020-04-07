<template>
  <div>
      <h5
        @click="openPrecipitation"
        class="clickable">
        Record Precipitation
        <IconRaindrops class="inline-svg"/>
      </h5>
  </div>
</template>

<script>
export default {
  methods: {
    openPrecipitation(e) {
      e.stopPropagation();
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

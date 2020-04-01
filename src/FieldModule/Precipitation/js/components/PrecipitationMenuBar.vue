<template>
  <farm-menu-bar :more="false">
    <template #left-menu>
      <li @click="$emit('toggleDrawer')">
        <icon-menu/>
      </li>
      <li>Precipitation</li>
    </template>
  </farm-menu-bar>
</template>

<script>
export default {
  name: 'PrecipitationMenuBar',
};
</script>

<style>

</style>

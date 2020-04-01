<template>
  <farm-drawer-list>
    <router-link :to="{ name: 'precipitation' }">
      <farm-drawer-list-item>Record Precipitation</farm-drawer-list-item>
    </router-link>
  </farm-drawer-list>
</template>

<style >
  a, a:hover {
    text-decoration: none;
    color: inherit;
  }
</style>

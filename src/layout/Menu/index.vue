<template>
  <nav>

    <MenuItem
        v-for="item of basicRoutes"
        :item="item"
        :depth="1"
        :fullPath="item.path"
    />

  </nav>
</template>

<script lang="ts" setup>
import { basicRoutes } from "@/router/routes";
import MenuItem from "@/layout/Menu/MenuItem.vue";
// console.log('basicRoutes:', basicRoutes)
</script>

<style scoped>
nav {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: auto;
  border-right: 1px solid #999;
  background-color: #001529;
}
</style>
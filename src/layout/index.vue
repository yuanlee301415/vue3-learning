<template>
    <div id="main" class="main">
        <div class="side">
          <Menu/>
        </div>

        <div class="content">
          <router-view v-slot="{ Component, route }">
            <transition name="fade-slide" mode="out-in">
              <component :is="Component" :key="route.path" />
            </transition>
          </router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
  import Menu from './Menu/index.vue'
</script>

<style scoped>
.side {
  position: absolute;
  width: 300px;
  height: 100vh;
}
.content {
  padding:20px 20px 20px 320px;
}
</style>

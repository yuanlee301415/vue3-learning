<template>
    <div id="main" class="main">
        <div class="side">
          <router-link to="/">Home</router-link>
          | <router-link to="/about">About</router-link>
          | <router-link to="/test">Test</router-link>
          | <router-link to="/test/a">TestA</router-link>
          | <router-link to="/test/b">TestB</router-link>
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

<script lang="ts">
  export default {
    name: "Layout"
  }
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

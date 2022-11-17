<template>
  <section class="layout">
    <aside>
      <div class="logo" @click="$router.push(ROOT_ROUTE)">
        <img src="@/assets/logo.svg" alt="Logo" width="32" height="32" />
        <h2>Vue3-TS-Template</h2>
      </div>
      <nav>
        <Menu />
      </nav>
    </aside>

    <section class="main">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </section>
  </section>
</template>

<script lang="ts" setup>
import Menu from "./Menu/index.vue";
import { ROOT_ROUTE } from "@/router/routes";
</script>

<style scoped lang="less">
@sideWidth: 210px;
@logoHeight: 48px;

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background-color: #f0f2f5;
  aside {
    position: fixed;
    width: @sideWidth;
    height: 100vh;
    background-color: #001529;
    .logo {
      display: flex;
      align-items: center;
      height: @logoHeight;
      padding: 10px 0 10px 10px;
      cursor: pointer;
      h2 {
        font-weight: 700;
        color: #fff;
        font-size: 16px;
        line-height: normal;
        margin-left: 0.5rem;
      }
    }
    nav {
      height: calc(100% - @logoHeight);
      overflow-y: auto;
    }
  }
  .main {
    margin-left: @sideWidth + 2px;
  }
}
</style>

<template>
  <dl
    v-if="item.meta && item.meta.hiddenMenu !== true"
    :class="{ open: open }"
    :style="{ textIndent: depth + 'em' }"
  >
    <template v-if="item.children && item.meta.hiddenChildrenInMenu !== true">
      <dt @click="handleToggleOpen">
        <span>{{ item.meta.title }}</span
        ><i />
      </dt>
      <dd>
        <MenuItem
          v-for="child of item.children"
          :key="child.name"
          :item="child"
          :depth="depth + 1"
          :fullPath="[fullPath, child.path].join('/')"
        />
      </dd>
    </template>
    <template v-else>
      <dt>
        <router-link :to="{ name: item.name }">{{
          item.meta.title
        }}</router-link>
      </dt>
    </template>
  </dl>
</template>

<script lang="ts" setup>
import type { AppRouteRecordRaw } from "@/router/types";

import { ref, watchEffect, unref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  item: AppRouteRecordRaw;
  depth: number;
  fullPath?: string;
}>();

const open = ref<boolean>();
const { currentRoute } = useRouter();

watchEffect(() => {
  if (open.value !== void 0) return;
  open.value = initOpen();
});

function handleToggleOpen() {
  open.value = !open.value;
}

function initOpen() {
  const routeFullPathList = unref(currentRoute).fullPath.split("/");
  const fullPathList = props.fullPath?.split("/") || [];
  for (let i = 0; i < fullPathList.length; i++) {
    if (fullPathList[i] !== routeFullPathList[i]) return false;
  }
  return true;
}
</script>

<style scoped>
dt {
  position: relative;
  cursor: pointer;
}
dt > a,
dt > span {
  color: white;
  text-decoration: none;
  font-size: 16px;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 40px;
  overflow: hidden;
  line-height: 40px;
  padding-right: 10px;
}
dt > i {
  text-indent: 0 !important;
  box-sizing: border-box;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  right: 10px;
  top: 50%;
  opacity: 1;
  transition: all 0.3s;
  color: rgba(0, 0, 0, 0.85);
  transform: translateY(-50%);
  line-height: 40px;
  background: rgba(255, 255, 255, 0.2);
}
dt > i::before {
  background-color: #fff;
  transform: rotate(-45deg) translateX(2.5px);
  position: absolute;
  left: 43.33%;
  top: 43.33%;
  width: 6px;
  height: 1.5px;
  border-radius: 2px;
  content: "";
  box-sizing: border-box;
}
dt > i:after {
  background-color: #fff;
  transform: rotate(45deg) translateX(-2.5px);
  position: absolute;
  left: 43.33%;
  top: 43.33%;
  width: 6px;
  height: 1.5px;
  content: "";
  border-radius: 2px;
  box-sizing: border-box;
}
dl > dd {
  display: none;
}
dl.open > dt > i:before {
  transform: rotate(45deg) translateX(2.5px);
}
dl.open > dt > i:after {
  transform: rotate(-45deg) translateX(-2.5px);
}
dl.open > dd {
  display: block;
}
</style>

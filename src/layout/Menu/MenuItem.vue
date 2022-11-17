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

<style scoped lang="less">
@import "./MenuItem.less";
</style>

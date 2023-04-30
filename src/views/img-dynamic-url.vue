<template>
  <div>
    <button v-for="_ of NAMES" :key="_" @click="handleChoose(_)" :disabled="_ === name"
            :class="[_ === name && 'disabled:cursor-not-allowed disabled:opacity-50']"
            class="px-2 py-1 m-1 rounded border bg-blue-100 text-blue-500 hover:opacity-70"
    >
      {{ _ }}
    </button>
    <hr />
    <!--    <img src="@/assets/images/spring.jpg"/>-->
    <img :src="url" class="rounded-md" />
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";

const NAMES = ["1", "2", "3", "4"];
const name = ref(NAMES[0])
const url = computed(() => {
  console.log('import.meta.url:', import.meta.url)
  const url = new URL(`../assets/images/${name.value}.jpg`, import.meta.url)
  console.log('url:', url)
  return url.href
})

function handleChoose(imgName: string) {
  name.value = imgName
}
</script>

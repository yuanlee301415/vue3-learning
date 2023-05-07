<template>
  <div>
    <Demo :count="count" :count2="count2"/>
    <hr>
    <button class="bg-blue-300 border rounded px-1 mr-1 hover:bg-blue-100" @click="count++">Inc `count`</button>
    <button class="bg-blue-300 border rounded px-2 mr-1 hover:bg-blue-100" @click="count2++">Inc `count2`</button>
  </div>
</template>

<script lang="ts" setup>
import Demo from "./Demo.vue";
import {ref} from "vue";

const count = ref(0)
const count2 = ref(10)
</script>

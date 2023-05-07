<template>
  <div>
    <p>count：{{ count }}</p>
    <p>count2：{{ count2 }}</p>
    <p>doubleCount：{{ doubleCount }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";
import {ref, watchEffect} from "vue";

const props = withDefaults(defineProps<{
  count: number
  count2: number
}>(), {
  count: 0,
  count2: 0
})

function useDouble<P extends object, K extends keyof P>(props: P, key: K): Ref<number> {
  const doubleValue = ref<number>(Number(props[key]) * 2)
  watchEffect(() => {
    doubleValue.value = Number(props[key]) * 2
    console.log('doubleValue:', doubleValue.value)
  })
  return doubleValue
}
const doubleCount = useDouble(props, 'count')

// 1: 不会变
// const doubleCount = ref(props.count * 2)

// 2: 会变
/*
const doubleCount = ref(props.count)
watchEffect(() => {
  doubleCount.value = props.count * 2
})
*/

// 3: 不会变
/*
function useDouble(count: number) {
  const doubleCount = ref(count * 2)
  watchEffect(() => {
    doubleCount.value = count * 2
  })
  return doubleCount
}
const doubleCount = useDouble(props.count)
*/

// 4：会变
// const doubleCount = computed(() => props.count * 2)

// 5：不会变
/*
function useDouble(count: number) {
  const doubleCount = computed(() => count * 2)
  return doubleCount
}
const doubleCount = useDouble(props.count)
*/

</script>

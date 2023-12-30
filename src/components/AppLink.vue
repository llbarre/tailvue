<script setup>
import { RouterLink } from "vue-router"

const props = defineProps({
  ...RouterLink.props,
  to: {
    type: String,
    default: "",
  },
})

const isHref = computed(() => props.to && typeof props.to === "string" && props.to.startsWith("http"))

// Determine the component type based on 'isHref'
const componentType = computed(() => isHref.value ? "a" : RouterLink)
</script>

<template>
  <component :is="componentType" :to="isHref ? undefined : to" :href="isHref ? props.to : undefined" v-bind="$attrs">
    <slot />
  </component>
</template>

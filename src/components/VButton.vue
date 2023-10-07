<template>
  <component
    :is="RouterLink"
    v-if="!isHref"
    :to="to"
    v-bind="$attrs"
    class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
    ><slot />
  </component>
  <component
    v-else
    :is="'a'"
    v-bind="$attrs"
    class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
    ><slot />
  </component>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  to: {
    type: String,
    default: "",
  },
  isPrimary: {
    type: Boolean,
    default: false,
  },
  ...RouterLink.props,
});

const isHref = computed(
  () => props.to && typeof props.to === "string" && props.to.startsWith("http")
);
</script>

<script setup>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <div id="app" class="flex min-h-screen flex-col justify-between">
    <HeaderVue />
    <router-view class="flex-grow"></router-view>
    <FooterVue />
  </div>
</template>

<style></style>

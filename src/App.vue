<script setup>
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue';

</script>

<template>
  <div id="app" class="min-h-screen flex flex-col justify-between">
    <HeaderVue />
    <router-view class="flex-grow"></router-view>
    <FooterVue />
  </div>
</template>

<style>
</style>

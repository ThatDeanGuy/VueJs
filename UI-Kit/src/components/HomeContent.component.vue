<script setup lang="ts">
import { ref } from "vue";

let title = ref('Hello')
</script>

<template>
  <div id="home-content-container">
    <h2>{{title}}</h2>
  </div>
</template>

<style>
  #home-content-container {
    padding: 1em;
  }
</style>

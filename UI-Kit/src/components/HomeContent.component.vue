
<script setup lang="ts">
import {reactive, ref} from "vue";

let title = ref('Hello')
let test = ref('Test')

let userData = reactive({
  id: 1,
  name: 'Deon'
})


</script>

<template>
  <div id="home-content-container">
    <h2>{{title}}</h2>
    <button>Click me</button>
  </div>
</template>

<style>
  #home-content-container {
    padding: 1em;
  }
</style>

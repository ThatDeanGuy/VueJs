<script setup>
const props = defineProps({
  label: String,
  nav: String,
  color: String,
  hover: Boolean
})
</script>

<template>
  <RouterLink :to="nav || '#'">
    <a class="menu-item"
       :class="{ 'menu-item:hover' : !hover }"
       :style="{color: color || 'hsla(160, 100%, 37%, 1)'}">
      {{ label }}
    </a>
  </RouterLink>
</template>

<style>
a,
  .menu-item {
    text-decoration: none;
    padding: 0.5em;
    display: block;
    transition: 0.4s;
  }

  .menu-item:hover {
    padding: 0.5em;
    background-color: #00000029;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
  }
</style>

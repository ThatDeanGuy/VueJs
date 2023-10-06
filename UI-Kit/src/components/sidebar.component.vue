<script setup lang="ts">

import MenuItem from "@/components/ui/MenuItem.vue";
</script>

<template>
  <div id="sidebar">
    <div id="sidebar-logo">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
      <h3>UI-Toolkit</h3>
    </div>
    <div id="sidebar-content">
      <MenuItem
          label="Dean"
          nav="/about"
          color="green"
      />
    </div>
  </div>
</template>

<style>
  #sidebar {
    padding: 1em;
    width: 1fr;
    height: 100vh;
    background-color: #2b2b2b;
  }

  #sidebar-logo {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    padding-bottom: 2em;
  }



</style>

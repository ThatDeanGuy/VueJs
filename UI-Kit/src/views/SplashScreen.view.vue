<script setup lang="ts">
import SplashScreen from "@/components/splashScreen.component.vue";
</script>

<template>
  <div class="splash-screen-container">
  <section>
    <SplashScreen />
  </section>
  <section>
    <div class="divider"></div>
  </section>
  <section>
    <router-link to="/home">
      <button class="get-started">Get Started!</button>
    </router-link>
  </section>
  </div>
</template>
<style>

.divider{
  height: 400px;
  border-left: 1px solid #EBEBEBA3;
}

.splash-screen-container {
  width: 70vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}

.get-started {
 padding: 15px 70px 15px 70px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #00bd7e;
  background-color: #00000000;
  color: #00bd7e;
}

.get-started:hover {
  box-shadow: 0 0 10px #00bd7e;
}

@media (max-width: 1024px) {
  .divider {
    border-left: 0;
    height: 0;
    width: 400px;
    border-bottom: 1px solid #EBEBEBA3;
  }
}

</style>

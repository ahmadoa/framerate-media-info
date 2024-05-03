<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="flex flex-col">
    <NavBar></NavBar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
main {
  @apply w-full h-[calc(100vh-4rem)];
}
</style>

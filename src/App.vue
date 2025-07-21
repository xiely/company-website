<!-- src/App.vue -->
<template>
  <div id="app">
      <main>
        <TopBar />
        <router-view />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
/* #app {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100vh;
}

main {
    flex: 1;
    overflow-y: scroll;
    height: calc(100% - 380px);
} */
</style>
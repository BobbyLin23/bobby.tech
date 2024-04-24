<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <NavBar />
    <main class="of-x-hidden px-7 py-10">
      <NuxtPage />
      <TheFooter :key="route.path" />
    </main>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheHeader',
})
</script>

<template>
  <header class="grid w-full grid-flow-col grid-cols-3 sm:grid-cols-4">
    <TheAvatar />
    <TheNavbar />
  </header>
</template>

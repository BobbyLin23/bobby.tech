<script setup lang="ts">
const val = ref(1)
</script>

<template>
  <div class="h-full">
    {{ val }}
    <Button>Click</Button>
    <ModeToggle />
  </div>
</template>

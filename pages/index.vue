<script setup lang="ts">
const val = ref(1)
</script>

<template>
  <div class="p-2 bg-red-500 dark:bg-orange-600">
    <UButton @click="val++">
      Button
    </UButton>
    {{ val }}
  </div>
</template>

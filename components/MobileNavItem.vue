<script lang="ts" setup>
defineProps<{
  href: string
}>()
</script>

<template>
  <li>
    <NuxtLink :to="href" class="block">
      <Button variant="ghost" class="w-full">
        <slot />
      </Button>
    </NuxtLink>
  </li>
</template>

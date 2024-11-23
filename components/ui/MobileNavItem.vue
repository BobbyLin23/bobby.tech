<script lang="ts" setup>
defineProps<{
  href: string
}>()
</script>

<template>
  <li>
    <Button variant="ghost" as="link" :href="href" class="block py-2">
      <slot />
    </Button>
  </li>
</template>

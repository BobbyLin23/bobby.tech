<script lang="ts" setup>
const props = defineProps<{
  href: string
}>()

const route = useRoute()

const isActive = computed(() => route.path === props.href)
</script>

<template>
  <li>
    <NuxtLink
      :to="href"
      :class="cn(
        'relative block whitespace-nowrap px-3 py-2 transition',
        isActive ? 'text-lime-600 dark:text-lime-400' : 'hover:text-lime-600 dark:hover:text-lime-400',
      )"
    >
      <slot />
    </NuxtLink>
  </li>
</template>

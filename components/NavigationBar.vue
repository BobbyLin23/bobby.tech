<script setup lang="ts">
import { navigationItems } from '~/config'

const navRef = ref<HTMLElement | null>(null)
const { elementX, elementY, isOutside } = useMouseInElement(navRef)

const radius = computed(() => {
  if (!navRef.value)
    return 0
  const bounds = navRef.value.getBoundingClientRect()
  return Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2.5
})

const background = computed(() => {
  return `radial-gradient(${radius.value}px circle at ${elementX.value}px ${elementY.value}px, var(--spotlight-color) 0%, transparent 65%)`
})

const spotlightStyle = computed(() => {
  return {
    background: background.value,
    opacity: isOutside.value ? 0 : 1,
  }
})
</script>

<template>
  <nav
    ref="navRef"
    :class="cn(
      'group relative',
      'rounded-full bg-gradient-to-b from-zinc-50/70 to-white/90',
      'shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md',
      'dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10',
      '[--spotlight-color:rgb(236_252_203_/_0.6)] dark:[--spotlight-color:rgb(217_249_157_/_0.07)]',
    )"
  >
    <div
      class="pointer-events-none absolute -inset-px rounded-full transition-opacity duration-500"
      :style="spotlightStyle"
      aria-hidden="true"
    />
    <ul class="flex bg-transparent px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
      <NavItem v-for="item in navigationItems" :key="item.href" :href="item.href">
        {{ item.text }}
      </NavItem>
    </ul>
  </nav>
</template>

<style scoped>
.dark {
  --spotlight-color: rgb(217 249 157 / 0.07);
}
</style>

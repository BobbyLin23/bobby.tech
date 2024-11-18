<script setup lang="ts">
const route = useRoute()
const page = computed(() => route.path.split('/').slice(0, 2).join('/'))
</script>

<template>
  <div class="bg-bg-image flex flex-col items-center max-w-4xl px-4 pt-10 mx-auto lg:max-w-5xl sm:px-12 md:px-20 lg:px-12 xl:max-w-7xl min-h-svh">
    <TheHeader />
    <main :class="cn('duration-1000 w-full min-h-[calc(100svh-350px)]', page === '/' ? 'translate-y-20 mt-20 mb-20' : 'mt-16')">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

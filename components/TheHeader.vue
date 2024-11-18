<script setup lang="ts">
import { GithubIcon } from 'lucide-vue-next'

defineOptions({
  name: 'TheHeader',
})
</script>

<template>
  <header class="grid w-full grid-flow-col grid-cols-3 sm:grid-cols-4">
    <TheAvatar />
    <TheNavbar />
    <div class="flex items-center justify-end gap-2">
      <NuxtLink
        href="https://github.com/bobbylin23/bobby.tech"
        target="_blank"
        class="opacity-80 hover:opacity-100"
      >
        <GithubIcon />
      </NuxtLink>
    </div>
  </header>
</template>

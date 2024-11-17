<script setup lang="ts">
const route = useRoute()
const page = computed(() => route.path.split('/').slice(0, 2).join('/'))
</script>

<template>
  <div class="flex items-center justify-start col-span-1">
    <NuxtLink to="/">
      <div class="flex flex-col items-start justify-end">
        <NuxtImg
          src="/images/avatar.png"
          width="60"
          alt="avatar"
          :class="cn('duration-1000 rounded-full opacity-60 hover:opacity-90', page === '/' ? 'scale-150 translate-y-20' : '')"
        />
      </div>
    </NuxtLink>
  </div>
</template>

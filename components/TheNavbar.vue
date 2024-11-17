<script setup lang="ts">
const navigationItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Project',
    href: '/project',
  },
  {
    name: 'Message',
    href: '/message',
  },
]

const route = useRoute()
const page = computed(() => route.path.split('/').slice(0, 2).join('/'))
</script>

<template>
  <div class="justify-center hidden col-span-2 mt-0.5 sm:flex h-14">
    <ul class="items-center justify-center hidden bg-[#f2f2f21a] rounded-full sm:flex px-2 py-1 ">
      <li v-for="item in navigationItems" :key="item.name" class="relative">
        <NuxtLink
          :to="item.href"
          :class="cn('duration-1000 px-3 py-2 rounded-full hover:bg-[#f2f2f21a] hover:text-primary', page === item.href ? 'bg-[#f2f2f21a] text-primary' : '')"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

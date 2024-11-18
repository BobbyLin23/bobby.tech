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

const transition = {
  beforeEnter(el: HTMLElement) {
    el.style.transform = 'translateX(-100%)'
  },
  enter(el: HTMLElement) {
    el.style.transform = 'translateX(0)'
  },
  leave(el: HTMLElement) {
    el.style.transform = 'translateX(100%)'
  },
}
</script>

<template>
  <div class="justify-center hidden col-span-2 mt-0.5 sm:flex h-14">
    <ul class="items-center justify-center hidden  bg-[#f2f2f21a] rounded-full sm:flex px-2 py-1">
      <li v-for="item in navigationItems" :key="item.name" class="relative">
        <Transition v-bind="transition">
          <div v-if="page === item.href" class="absolute dark:border-muted-foreground left-1/4 w-1/2 mx-auto border-t-[3px] rounded-full shadow-[0_20px_100px_8px_#fff]" />
        </Transition>
        <Transition v-bind="transition">
          <div v-if="page === item.href" class="absolute top-0.5 bottom-0.5 w-full bg-[#f2f2f20d] rounded-full" />
        </Transition>
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

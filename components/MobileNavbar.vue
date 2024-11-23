<script setup lang="ts">
import { ArrowDownIcon, XIcon } from 'lucide-vue-next'
import { navigationItems } from '~/config'

import MobileNavItem from './ui/MobileNavItem.vue'
</script>

<template>
  <Popover>
    <PopoverTrigger>
      <button class="group flex items-center rounded-full bg-gradient-to-b from-zinc-50/20 to-white/80 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md focus:outline-none focus-visible:ring-2 dark:from-zinc-900/30 dark:to-zinc-800/80 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 dark:focus-visible:ring-yellow-500/80">
        Go To
        <ArrowDownIcon class="ml-3 size-4 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </button>
    </PopoverTrigger>
    <PopoverContent class="-top-2 z-50 origin-top rounded-3xl bg-gradient-to-b from-zinc-100/75 to-white p-8 ring-1 ring-zinc-900/5 dark:from-zinc-900/50 dark:to-zinc-900 dark:ring-zinc-800">
      <div class="flex flex-row-reverse items-center justify-between">
        <Button variant="ghost" aria-label="关闭菜单" size="icon">
          <XIcon class="size-10 stroke-zinc-500 dark:stroke-zinc-400" />
        </Button>
        <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Navigation
        </h2>
      </div>
      <nav class="mt-6">
        <ul class="-my-2 divide-y divide-zinc-500/20 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
          <MobileNavItem v-for="item in navigationItems" :key="item.href" :href="item.href">
            {{ item.text }}
          </MobileNavItem>
        </ul>
      </nav>
    </PopoverContent>
  </Popover>
</template>

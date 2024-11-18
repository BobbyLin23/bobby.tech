<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

defineProps<{
  navigationItems: Array<{
    name: string
    href: string
  }>
}>()

const route = useRoute()
const page = computed(() => route.path.split('/').slice(0, 2).join('/'))
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button class="bg-secondary text-muted-foreground shadow-[0_0px_3px_0.5px_#2f2f2f] hover:bg-[#f2f2f20d] rounded-full pr-2">
        <span class="pr-1">
          {{ page === "/" ? "Home" : page.slice(1)[0].toUpperCase() + page.slice(2) }}
        </span>
        <ChevronDown :size="15" />
      </Button>
    </SheetTrigger>
    <SheetContent
      class="mt-10 ml-6 mr-10 border-none text-muted-foreground rounded-xl"
      side="top"
    >
      <ul class="flex flex-col pl-5 mt-5 space-y-1">
        <li v-for="item in navigationItems" :key="item.name">
          <NuxtLink
            :to="item.href"
            :class="cn(page === item.href && 'font-bold', 'flex items-center py-3')"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </SheetContent>
  </Sheet>
</template>

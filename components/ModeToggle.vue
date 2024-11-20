<script setup lang="ts">
import { MoonIcon, SunIcon } from 'lucide-vue-next'

const colorMode = useColorMode()

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <ClientOnly>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <button
            type="button"
            aria-label="Toggle dark mode"
            class="group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/50 px-3 py-2
          shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-gradient-to-b
          dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10
          dark:hover:ring-white/20 backdrop-blur transition"
            @click="toggleTheme"
          >
            <component
              :is="colorMode.value === 'dark' ? SunIcon : MoonIcon"
              class="h-6 w-6 stroke-zinc-500 p-0.5 transition group-hover:stroke-zinc-700
            dark:group-hover:stroke-zinc-200"
            />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {{ colorMode.value === 'dark' ? 'Light mode' : 'Dark mode' }}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </ClientOnly>
</template>

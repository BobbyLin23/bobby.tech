<template>
  <div class="pointer-events-none fixed inset-0 select-none bg-[url('/grid-black.svg')] bg-top bg-repeat dark:bg-[url('/grid.svg')]" />
  <span class="pointer-events-none fixed top-0 block h-[800px] w-full select-none bg-[radial-gradient(103.72%_46.58%_at_50%_0%,rgba(5,5,5,0.045)_0%,rgba(0,0,0,0)_100%)] dark:bg-[radial-gradient(103.72%_46.58%_at_50%_0%,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0)_100%)]" />
  <div class="fixed inset-0 flex justify-center sm:px-8">
    <div class="flex w-full max-w-7xl lg:px-8">
      <div class="w-full bg-zinc-50/90 ring-1 ring-zinc-100 dark:bg-zinc-900/80 dark:ring-zinc-400/20" />
    </div>
  </div>
  <div class="relative text-zinc-800 dark:text-zinc-200">
    <TheHeader />
    <main class="mx-auto max-w-7xl px-8 mt-16">
      <slot />
    </main>
    <div class="mt-32">
      <TheFooter />
    </div>
  </div>
</template>

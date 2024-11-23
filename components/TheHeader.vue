<script setup lang="ts">

</script>

<template>
  <TheContainer>
    <header class="flex items-center justify-between py-4">
      <TheAvatar />
      <div class="pointer-events-auto relative z-50 md:hidden">
        <ClientOnly>
          <MobileNavbar />
        </ClientOnly>
      </div>
      <div class="pointer-events-auto relative z-50 hidden md:block">
        <NavigationBar />
      </div>
      <ModeToggle />
    </header>
  </TheContainer>
</template>

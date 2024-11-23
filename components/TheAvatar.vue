<script setup lang="ts">

</script>

<template>
  <div class="flex items-center justify-start col-span-1">
    <NuxtLink to="/">
      <div class="flex flex-col items-start justify-end">
        <NuxtImg
          src="/images/avatar.png"
          width="40"
          alt="avatar"
          :class="cn('duration-1000 rounded-full opacity-80 hover:opacity-50')"
        />
      </div>
    </NuxtLink>
  </div>
</template>

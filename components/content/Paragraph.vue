<script lang="ts" setup>

</script>

<template>
  <div>
    <ContentSlot :use="$slots.default" unwrap="p" class="leading-7 [&:not(:first-child)]:mt-6" />
  </div>
</template>

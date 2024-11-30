<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import type { BlogContent } from '~/types'

const query: QueryBuilderParams = {
  path: '/blogs',
  sort: [{ date: -1 }],
  limit: 3,
}
</script>

<template>
  <ContentList v-slot="{ list }" :query="query">
    <div class="grid grid-cols-2 gap-4">
      <BlogCard v-for="blog in list" :key="blog._path" :post="blog as BlogContent" />
    </div>
  </ContentList>
</template>

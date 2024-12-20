<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

const query: QueryBuilderParams = {
  path: '/blogs',
  sort: [{ date: -1 }],
  limit: 4,
}
</script>

<template>
  <TheContainer>
    <div class="py-16 animate-fade-in">
      <!-- Header -->
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-3xl font-bold">
          Recent Posts
        </h2>
        <NuxtLink
          to="/blogs"
          class="text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-2"
        >
          View All
          <Icon name="mdi:arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

      <!-- Posts Grid -->
      <ContentList v-slot="{ list }" :query="query">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(post, index) in list"
            :key="post._id"
            class="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up"
            :style="{ animationDelay: `${index * 200}ms` }"
          >
            <!-- Image -->
            <div class="relative h-48 overflow-hidden">
              <NuxtImg
                :src="post.coverImage"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <!-- Content -->
            <div class="p-6 space-y-4">
              <time class="text-sm text-muted-foreground">
                {{ formatDate(post.createdAt) }}
              </time>

              <h3 class="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-200">
                {{ post.title }}
              </h3>

              <p class="text-muted-foreground line-clamp-3">
                {{ post.description }}
              </p>

              <NuxtLink
                :to="post._path"
                class="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-200"
              >
                Read More
                <Icon name="mdi:arrow-right" class="w-4 h-4 ml-2" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </ContentList>
    </div>
  </TheContainer>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  opacity: 0;
  animation: slide-up 1s ease-out forwards;
}
</style>

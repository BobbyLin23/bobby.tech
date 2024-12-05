<script setup lang="ts">
import { customComponents } from '~/config'
</script>

<template>
  <TheContainer>
    <ContentDoc>
      <template #default="{ doc }">
        <div class="max-w-4xl mx-auto p-4 text-gray-800 dark:text-gray-200">
          <article>
            <!-- Banner Section -->
            <div
              class="relative bg-cover bg-center h-80 rounded-lg"
              :style="{ backgroundImage: `url(${doc.coverImage})` }"
            >
              <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 class="text-white text-4xl md:text-6xl font-bold">
                  {{ doc.title }}
                </h1>
              </div>
            </div>

            <!-- Metadata -->
            <div class="flex justify-between items-center mt-6 text-sm text-gray-500">
              <div class="space-x-2">
                <span>{{ doc.createdAt }} -</span>
                <span>{{ doc.categories.join(', ') }} -</span>
                <span>{{ doc.readingTime }} min read</span>
              </div>
            </div>
            <div class="mt-8 prose-lg dark:prose-invert mx-auto">
              <ContentRenderer :value="doc">
                <ContentRendererMarkdown :value="doc" :components="customComponents" />
              </ContentRenderer>
            </div>
          </article>
        </div>
      </template>
      <template #not-found>
        <h1 class="text-center text-xl font-bold">
          Document not found
        </h1>
      </template>
    </ContentDoc>
  </TheContainer>
</template>

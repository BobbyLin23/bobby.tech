<script setup lang="ts">
import { ExternalLinkIcon } from 'lucide-vue-next'

interface Props {
  project: {
    title: string
    description: string
    tags: string[]
    image: string
    link: string
    github?: string
  }
}

defineProps<Props>()
</script>

<template>
  <div class="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-lg">
    <!-- 项目图片 -->
    <div class="relative aspect-video overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="object-cover transition-transform duration-300 group-hover:scale-105"
      >
    </div>

    <!-- 项目信息 -->
    <div class="p-6 space-y-4">
      <h3 class="text-xl font-semibold">
        {{ project.title }}
      </h3>
      <p class="text-muted-foreground line-clamp-2">
        {{ project.description }}
      </p>

      <!-- 技术标签 -->
      <div class="flex flex-wrap gap-2">
        <Badge
          v-for="tag in project.tags"
          :key="tag"
        >
          {{ tag }}
        </Badge>
      </div>

      <!-- 链接按钮 -->
      <div class="flex items-center gap-4 pt-2">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <Icon name="mdi:github" class="size-4" />
          Source Code
        </a>
        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ExternalLinkIcon class="size-4" />
          Preview
        </a>
      </div>
    </div>
  </div>
</template>

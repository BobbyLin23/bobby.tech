<script lang="ts" setup>
import type { BlogContent } from '~/types'
import { BookIcon, CalendarIcon, HourglassIcon, MousePointerClickIcon } from 'lucide-vue-next'

defineProps<{
  post: BlogContent
}>()
</script>

<template>
  <NuxtLink
    :href="post._path"
    :prefetch="false"
    class="group relative flex w-full transform-gpu flex-col rounded-3xl bg-transparent ring-2 transition-transform hover:-translate-y-0.5"
  >
    <div class="relative aspect-[240/135] w-full">
      <NuxtImg
        :src="post.coverImage"
        alt=""
        class="rounded-t-3xl object-cover"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      />
    </div>
    <span class="relative z-10 flex w-full flex-1 shrink-0 flex-col justify-between gap-0.5 rounded-b-[calc(1.5rem+1px)] bg-cover bg-bottom bg-no-repeat p-4 bg-blend-overlay [background-image:var(--post-image)] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:select-none before:rounded-b-[calc(1.5rem-1px)] before:bg-[--post-image-bg] before:opacity-70 before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:z-10 after:select-none after:rounded-b-[calc(1.5rem-1px)] after:bg-gradient-to-b after:from-transparent after:to-[--post-image-bg] after:backdrop-blur after:transition-opacity group-hover:before:opacity-30 md:p-5">
      <h2 class="z-20 text-base font-bold tracking-tight text-[--post-image-fg] opacity-70 transition-opacity group-hover:opacity-100 md:text-xl">
        {{ post.title }}
      </h2>

      <span class="relative z-20 flex items-center justify-between opacity-50 transition-opacity group-hover:opacity-80">
        <span class="inline-flex items-center space-x-3">
          <span class="inline-flex items-center space-x-1 text-[12px] font-medium text-[--post-image-fg] md:text-sm">
            <CalendarIcon />
            <span>
              {{ post.createdAt }}
            </span>
          </span>

          <span v-if="Array.isArray(post.categories)" class="inline-flex items-center space-x-1 text-[12px] font-medium text-[--post-image-fg] md:text-sm">
            <BookIcon />
            <span>{{ post.categories.join(', ') }}</span>
          </span>
        </span>
        <span class="inline-flex items-center space-x-3 text-[12px] font-medium text-[--post-image-fg] md:text-xs">
          <span class="inline-flex items-center space-x-1">
            <MousePointerClickIcon />
            <!-- <span>{prettifyNumber(views, true)}</span> -->
          </span>

          <span class="inline-flex items-center space-x-1">
            <HourglassIcon />
            <span>Reading Time:{{ post.readingTime.toFixed(0) }} min</span>
          </span>
        </span>
      </span>
    </span>
  </NuxtLink>
</template>

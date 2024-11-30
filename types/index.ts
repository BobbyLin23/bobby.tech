import type { ParsedContent } from '@nuxt/content'

export interface BlogContent extends ParsedContent {
  categories: string | string[]
  readingMinutes: number
  createdAt: string
  coverImage: string
}

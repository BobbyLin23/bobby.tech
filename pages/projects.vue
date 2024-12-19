<script lang="ts" setup>
interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  github?: string
}

const projects: Project[] = [
  {
    title: '个人博客',
    description: '使用 Nuxt 3 构建的个人博客网站，支持暗黑模式、文章分类和搜索功能',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind'],
    image: '/images/avatar.png',
    link: 'https://blog.example.com',
    github: 'https://github.com/example/blog',
  },
  {
    title: '个人博客1',
    description: '使用 Nuxt 3 构建的个人博客网站，支持暗黑模式、文章分类和搜索功能',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind'],
    image: '/images/avatar.png',
    link: 'https://blog.example.com',
    github: 'https://github.com/example/blog',
  },
  {
    title: '个人博客2',
    description: '使用 Nuxt 3 构建的个人博客网站，支持暗黑模式、文章分类和搜索功能',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind'],
    image: '/images/avatar.png',
    link: 'https://blog.example.com',
    github: 'https://github.com/example/blog',
  },
  {
    title: '个人博客3',
    description: '使用 Nuxt 3 构建的个人博客网站，支持暗黑模式、文章分类和搜索功能',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind'],
    image: '/images/avatar.png',
    link: 'https://blog.example.com',
    github: 'https://github.com/example/blog',
  },
]

const categories = ['All', 'Web', 'Mobile', 'Tools', 'Other']
const selectedCategory = ref('All')

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All')
    return projects
  return projects.filter(project => project.tags.includes(selectedCategory.value))
})
</script>

<template>
  <TheContainer>
    <div class="space-y-16">
      <div class="space-y-6">
        <h1 class="text-4xl font-bold tracking-tight animate-fade-in">
          Projects
        </h1>
        <p class="text-lg text-muted-foreground max-w-2xl animate-slide-up">
          Here are some of my recent projects. Each project represents my exploration and growth in the technology field.
        </p>
      </div>

      <div class="flex gap-2 animate-slide-up [animation-delay:200ms]">
        <Button
          v-for="category in categories"
          :key="category"
          :variant="selectedCategory === category ? 'default' : 'outline'"
          @click="selectedCategory = category"
        >
          {{ category }}
        </Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          :project="project"
          class="animate-slide-up"
          :style="{ animationDelay: `${(index + 3) * 100}ms` }"
        />
      </div>
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

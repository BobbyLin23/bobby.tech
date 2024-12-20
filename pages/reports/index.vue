<script lang="ts" setup>
interface WeeklyReport {
  id: string
  weekNumber: number
  year: number
  title: string
  description: string
  createdAt: string
}

const weeklyReports: WeeklyReport[] = [
  {
    id: '2024-11',
    weekNumber: 12,
    year: 2024,
    title: '第12周周报',
    description: '本周主要完成了个人网站的基础架构搭建...',
    createdAt: '2024-03-24',
  },
  {
    id: '2024-12',
    weekNumber: 11,
    year: 2024,
    title: '第11周周报',
    description: '本周主要进行了项目的性能优化...',
    createdAt: '2024-03-17',
  },
  {
    id: '2024-13',
    weekNumber: 11,
    year: 2024,
    title: '第11周周报',
    description: '本周主要进行了项目的性能优化...',
    createdAt: '2024-03-17',
  },
  {
    id: '2024-14',
    weekNumber: 11,
    year: 2024,
    title: '第11周周报',
    description: '本周主要进行了项目的性能优化...',
    createdAt: '2024-03-17',
  },
  {
    id: '2024-15',
    weekNumber: 11,
    year: 2024,
    title: '第11周周报',
    description: '本周主要进行了项目的性能优化...',
    createdAt: '2024-03-17',
  },
  {
    id: '2024-16',
    weekNumber: 11,
    year: 2024,
    title: '第11周周报',
    description: '本周主要进行了项目的性能优化...',
    createdAt: '2024-03-17',
  },
  {
    id: '2024-17',
    weekNumber: 11,
    year: 2024,
    title: '第11周周报',
    description: '本周主要进行了项目的性能优化...',
    createdAt: '2024-03-17',
  },
  {
    id: '2024-18',
    weekNumber: 11,
    year: 2024,
    title: '第11周周报',
    description: '本周主要进行了项目的性能优化...',
    createdAt: '2024-03-17',
  },
  {
    id: '2024-19',
    weekNumber: 11,
    year: 2024,
    title: '第11周周报',
    description: '本周主要进行了项目的性能优化...',
    createdAt: '2024-03-17',
  },
  {
    id: '2024-20',
    weekNumber: 11,
    year: 2024,
    title: '第11周周报',
    description: '本周主要进行了项目的性能优化...',
    createdAt: '2024-03-17',
  },
  {
    id: '2024-21',
    weekNumber: 11,
    year: 2024,
    title: '第11周周报',
    description: '本周主要进行了项目的性能优化...',
    createdAt: '2024-03-17',
  },
  {
    id: '2024-22',
    weekNumber: 11,
    year: 2024,
    title: '第11周周报',
    description: '本周主要进行了项目的性能优化...',
    createdAt: '2024-03-17',
  },
]
</script>

<template>
  <TheContainer>
    <div class="space-y-16">
      <!-- 页面标题 -->
      <div class="space-y-6">
        <h1 class="text-4xl font-bold tracking-tight animate-fade-in">
          Weekly Reports
        </h1>
        <p class="text-lg text-muted-foreground max-w-2xl animate-slide-up">
          记录每周的工作和生活，保持持续进步。
        </p>
      </div>

      <!-- 时间轴 -->
      <div class="relative space-y-8">
        <div class="absolute left-9 top-2 h-full w-0.5 bg-muted-foreground/20" />

        <div
          v-for="report in weeklyReports"
          :key="report.id"
          class="group relative flex items-start animate-slide-up hover:cursor-pointer"
          @click="navigateTo(`/reports/${report.id}`)"
        >
          <!-- 时间轴圆点 -->
          <div class="absolute left-0 flex h-20 w-20 items-center justify-center">
            <div class="relative h-10 w-10">
              <div class="absolute inset-0 rounded-full border-2 border-muted-foreground/20 group-hover:border-primary transition-colors" />
              <div class="absolute inset-2 rounded-full bg-background group-hover:bg-primary transition-colors" />
            </div>
          </div>

          <!-- 内容卡片 -->
          <div class="ml-20 flex-1">
            <div class="rounded-lg border bg-card p-6 transition-all hover:shadow-lg">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
                  {{ report.year }}-W{{ report.weekNumber.toString().padStart(2, '0') }}
                </h3>
                <time class="text-sm text-muted-foreground">
                  {{ report.createdAt }}
                </time>
              </div>
              <p class="mt-2 text-muted-foreground">
                {{ report.description }}
              </p>
            </div>
          </div>
        </div>
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

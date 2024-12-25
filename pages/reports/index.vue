<script lang="ts" setup>
import { Loader2 } from 'lucide-vue-next'

interface WeeklyReport {
  id: string
  title: string
  description: string
  createdAt: string
  icon: string
}

const { data, status } = await useFetch('/api/notion/docs')

const weeklyReports = computed<WeeklyReport[]>(() => {
  return (data.value ?? []).map((page: any) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      description: '',
      createdAt: new Date(page.last_edited_time).toLocaleDateString(),
      icon: page.icon?.external.url ?? '',
    }
  })
})
</script>

<template>
  <TheContainer>
    <div class="space-y-16">
      <div class="space-y-6">
        <h1 class="text-4xl font-bold tracking-tight animate-fade-in">
          Weekly Reports
        </h1>
        <p class="text-lg text-muted-foreground max-w-2xl animate-slide-up">
          Record my weekly work and progress, and share it with your team.
        </p>
      </div>

      <div v-if="status === 'success'" class="relative space-y-8">
        <div class="absolute left-9 top-2 h-full w-0.5 bg-muted-foreground/20" />

        <div
          v-for="report in weeklyReports"
          :key="report.id"
          class="group relative flex items-start animate-slide-up hover:cursor-pointer"
          @click="navigateTo(`/reports/${report.id}`)"
        >
          <div class="absolute left-0 flex h-20 w-20 items-center justify-center">
            <div class="relative h-10 w-10">
              <div class="absolute inset-0 rounded-full border-2 border-muted-foreground/20 group-hover:border-primary transition-colors" />
              <div class="absolute inset-2 rounded-full bg-background group-hover:bg-primary transition-colors" />
            </div>
          </div>

          <div class="ml-20 flex-1">
            <div class="rounded-lg border bg-card p-6 transition-all hover:shadow-lg">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                  <NuxtImg v-if="report.icon" :src="report.icon" width="36" height="36" />
                  {{ report.title }}
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
      <div v-if="status === 'pending'" class="flex items-center justify-center h-96">
        <Loader2 class="w-12 h-12 animate-spin" />
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

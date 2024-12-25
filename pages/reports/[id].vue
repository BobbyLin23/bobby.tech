<script lang="ts" setup>
const route = useRoute()
const id = route.params.id as string

const { data } = await useFetch(`/api/notion/docs/${id}`)
</script>

<template>
  <TheContainer>
    <div class="max-w-4xl mx-auto space-y-8">
      <Button
        variant="ghost"
        class="mb-8"
        @click="$router.back()"
      >
        <Icon name="mdi:arrow-left" class="w-4 h-4 mr-2" />
        Back
      </Button>

      <article class="prose dark:prose-invert max-w-none">
        <h1>Weekly Report {{ id }}</h1>
        <ContentRenderer :value="data">
          <ContentRendererMarkdown :value="data" />
        </ContentRenderer>
      </article>
    </div>
  </TheContainer>
</template>

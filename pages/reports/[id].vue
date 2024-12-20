<script lang="ts" setup>
const route = useRoute()
const id = route.params.id as string

// 这里可以根据id获取具体的周报内容
// const report = ref(null)
// 实际使用时替换为真实的数据获取逻辑
// const { data: report } = await useFetch(`/api/reports/${id}`)
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
        返回
      </Button>

      <article class="prose dark:prose-invert max-w-none">
        <h1>Weekly Report {{ id }}</h1>
        <!-- 周报详细内容 -->
      </article>
    </div>
  </TheContainer>
</template>

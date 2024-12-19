<script lang="ts" setup>
</script>

<template>
  <TheContainer>
    <div class="min-h-[60vh] flex flex-col md:flex-row items-center justify-between py-12 gap-8">
      <!-- Left Content -->
      <div class="flex-1 space-y-6 animate-fade-in">
        <div class="space-y-2">
          <h2 class="text-sm md:text-base font-medium text-primary animate-slide-up">
            👋 Welcome to my corner of the web
          </h2>
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight animate-slide-up [animation-delay:200ms]">
            Bobby Lin
          </h1>
          <p class="text-xl md:text-2xl text-muted-foreground font-medium animate-slide-up [animation-delay:400ms]">
            Full Stack Developer
          </p>
        </div>

        <div class="space-y-4 max-w-2xl animate-slide-up [animation-delay:600ms]">
          <p class="text-base md:text-lg leading-relaxed">
            Hi there! I'm Bobby Lin, a passionate software developer with a keen interest in building impactful web applications. I specialize in modern web technologies and love creating elegant solutions to complex problems.
          </p>
          <p class="text-base md:text-lg leading-relaxed">
            Currently, I focus on full-stack development, crafting seamless user experiences with Vue.js and other cutting-edge technologies. When I'm not coding, I'm constantly learning and exploring new ways to push the boundaries of what's possible in web development.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 pt-2 animate-slide-up [animation-delay:1000ms]">
          <NuxtLink to="/projects">
            <Button size="lg">
              View Projects
              <Icon name="i-heroicons-arrow-right" class="ml-2 w-4 h-4" />
            </Button>
          </NuxtLink>
          <NuxtLink to="/blogs">
            <Button size="lg">
              View Blogs
              <Icon name="mdi:file-document" class="ml-2 w-4 h-4" />
            </Button>
          </NuxtLink>
        </div>
      </div>

      <!-- Right Content - Avatar/Image -->
      <div class="relative flex-1 flex justify-center items-center animate-fade-in [animation-delay:1200ms]">
        <div class="relative w-64 h-64 md:w-80 md:h-80">
          <div class="w-full h-full">
            <NuxtImg src="/images/avatar.png" alt="avatar" class="object-cover rounded-full shadow-2xl animate-float" />
          </div>
          <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  </TheContainer>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  opacity: 0;
  animation: slide-up 1s ease-out forwards;
}
</style>

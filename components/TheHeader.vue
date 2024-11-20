<script setup lang="ts">
const route = useRoute()

const isHomePage = computed(() => route.path === '/')
const headerRef = ref<HTMLElement | null>(null)
const avatarRef = ref<HTMLElement | null>(null)
const isInitial = ref(true)
const isShowingAltAvatar = ref(false)

const headerPosition = computed(() => 'var(--header-position)')
const headerInnerPosition = computed(() => 'var(--header-inner-position)')

function toggleAltAvatar() {
  isShowingAltAvatar.value = !isShowingAltAvatar.value
}

function updateStyles() {
  const downDelay = avatarRef.value?.offsetTop ?? 0
  const upDelay = 64

  const setProperty = (property: string, value: string) => {
    document.documentElement.style.setProperty(property, value)
  }

  const removeProperty = (property: string) => {
    document.documentElement.style.removeProperty(property)
  }

  const updateHeaderStyles = () => {
    if (!headerRef.value)
      return

    const { top, height } = headerRef.value.getBoundingClientRect()
    const scrollY = Math.min(
      Math.max(window.scrollY, 0),
      document.body.scrollHeight - window.innerHeight,
    )

    if (isInitial.value) {
      setProperty('--header-position', 'sticky')
    }

    setProperty('--content-offset', `${downDelay}px`)

    if (isInitial.value || scrollY < downDelay) {
      setProperty('--header-height', `${downDelay + height}px`)
      setProperty('--header-mb', `${-downDelay}px`)
    }
    else if (top + height < -upDelay) {
      const offset = Math.max(height, scrollY - upDelay)
      setProperty('--header-height', `${offset}px`)
      setProperty('--header-mb', `${height - offset}px`)
    }
    else if (top === 0) {
      setProperty('--header-height', `${scrollY + height}px`)
      setProperty('--header-mb', `${-scrollY}px`)
    }

    if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
      setProperty('--header-inner-position', 'fixed')
      removeProperty('--header-top')
      removeProperty('--avatar-top')
    }
    else {
      removeProperty('--header-inner-position')
      setProperty('--header-top', '0px')
      setProperty('--avatar-top', '0px')
    }
  }

  updateHeaderStyles()
  isInitial.value = false
}

onMounted(() => {
  updateStyles()
  window.addEventListener('scroll', updateStyles, { passive: true })
  window.addEventListener('resize', updateStyles)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateStyles)
  window.removeEventListener('resize', updateStyles)
})
</script>

<template>
  <header
    class="pointer-events-none relative z-50 mb-[var(--header-mb,0px)] flex flex-col" :class="[
      isHomePage ? 'h-[var(--header-height,180px)]' : 'h-[var(--header-height,64px)]',
    ]"
  >
    <template v-if="isHomePage">
      <div
        ref="avatarRef"
        class="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
      />
      <TheContainer
        class="top-0 order-last -mb-3 pt-3"
        :style="{ position: headerPosition as any }"
      >
        <div
          class="top-[var(--avatar-top,theme(spacing.3))] w-full select-none"
          :style="{ position: headerInnerPosition as any }"
        >
          <div
            class="relative inline-flex"
            @contextmenu.prevent="toggleAltAvatar"
          >
            <div
              class="absolute left-0 top-3 origin-left opacity-[var(--avatar-border-opacity,0)] transition-opacity"
            >
              <TheAvatar />
            </div>

            <div class="block h-16 w-16 origin-left">
              <TheAvatar />
            </div>
          </div>
        </div>
      </TheContainer>
    </template>

    <TheContainer
      ref="headerRef"
      class="top-0 z-10 h-16 pt-6"
      :style="{ position: headerPosition as any }"
    >
      <div
        class="top-[var(--header-top,theme(spacing.6))] w-full"
        :style="{ position: headerInnerPosition as any }"
      >
        <div class="relative flex gap-4">
          <div class="flex flex-1">
            <template v-if="!isHomePage">
              <TheAvatar />
            </template>
          </div>
          <div class="flex flex-1 justify-end md:justify-center">
            Navbar
          </div>
          <div class="flex justify-end gap-3 md:flex-1">
            <div class="pointer-events-auto">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </TheContainer>
  </header>
  <div v-if="isHomePage" class="h-[--content-offset]" />
</template>

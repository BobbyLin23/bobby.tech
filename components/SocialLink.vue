<script lang="ts" setup>
const menuList = [
  {
    href: 'https://github.com/bobbylin',
    icon: 'mdi:github',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/bobbylin',
    icon: 'mdi:twitter',
    label: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/bobbylin/',
    icon: 'mdi:linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.linkedin.com/in/bobbylin/',
    icon: 'mdi:instagram',
    label: 'Instagram',
  },
  {
    href: 'https://www.instagram.com/bobbylin/',
    icon: 'mdi:email',
    label: 'Email',
  },
  {
    href: 'https://www.instagram.com/bobbylin/',
    icon: 'mdi:rss',
    label: 'RSS',
  },
]
</script>

<template>
  <TheContainer>
    <ul class="flex items-center">
      <li
        v-for="item in menuList"
        :key="item.href"
        class="flex items-center"
      >
        <a
          :href="item.href"
          class="flex items-center justify-center gap-2 p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon :name="item.icon" class="h-5 w-5" />
          <span class="hidden md:inline-block">
            {{ item.label }}
          </span>
        </a>
      </li>
    </ul>
  </TheContainer>
</template>

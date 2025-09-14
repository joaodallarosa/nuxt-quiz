<script setup lang="ts">
definePageMeta({
  colorMode: "dark",
});
</script>
<template>
  <UContainer>
    <div class="w-full px-4 sm:px-6 lg:px-8 text-center">
      <h1
        class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold lg:mt-16 text-primary"
      >
        Free Mode
      </h1>
      <Quiz />
      <UDrawer title="Statistics">
        <UButton
          label="Display Statistics"
          color="neutral"
          variant="subtle"
          trailing-icon="i-lucide-chevron-up"
          class="absolute bottom-2 right-2"
        />
        <template #body>
          <Placeholder class="h-48" />
        </template>
      </UDrawer>
    </div>
  </UContainer>
</template>

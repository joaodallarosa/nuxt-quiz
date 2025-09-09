<script setup lang="ts">
const { answersRatio, answeredCount } = useQuiz()
</script>
<template>
    <UContainer>
        <div class="w-full text-center">
            <h1 class="text-2xl sm:text-7xl text-pretty tracking-tight font-bold lg:mt-16">
                <span class="text-primary">Freeflow</span> Mode
            </h1>
            <Quiz />
            <UDrawer title="Statistics">
                <UButton label="Display Statistics" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"
                    class="absolute bottom-2 right-2" />
                <template #body>
                    <p>Questions Answered: {{ answeredCount || 0 }}</p>
                    <p>Accuracy: {{ Number.parseInt(answersRatio) }}%</p>
                    <UProgress class="mt-2" v-model="answersRatio" />
                </template>
            </UDrawer>
        </div>
    </UContainer>
</template>

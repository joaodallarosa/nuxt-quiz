<script setup lang="ts">
const { getQuestion } = useQuiz()
const teste = getQuestion()
</script>
<template>
    <h1 class="text-5xl">Nuxt 3 Quiz</h1>
    <QuizQuestion />
</template>
<script setup lang="ts">
const { setAllQuestions } = useQuiz();
const { data } = await useAsyncData("quiz", () => $fetch("/api/questions/all"));
setAllQuestions(data.value || []);
</script>
<template>
    <QuizQuestion />
</template>
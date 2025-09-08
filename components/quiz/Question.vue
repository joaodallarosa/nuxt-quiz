<script setup lang="ts">
const {
  question,
  getQuestion,
  isDisplayingAnswer,
  selectedOption,
  isCorrectAnswer,
  hasSelectedCorrectAnswer,
  displayAnswer,
  answersRatio
} = useQuiz();
useAsyncData("quiz", () => {
  return getQuestion();
});
async function onNextQuestion() {
  await getQuestion();
}
function getNextButtonText(): string {
  if (selectedOption.value) {
    return 'Verify'
  }
  return 'Continue'
}
</script>

<template>
  <UCard v-if="question" class="mt-8 drop-shadow-xl text-left" :ui="{ body: '' }">
    <template #header>
      <div class="flex items-center w-full justify-between">
        <CodeText class="font-semibold text-base md:text-2xl" :text="question.title" />
      </div>
    </template>
    <URadioGroup v-if="!isDisplayingAnswer" variant="table" v-model="selectedOption" value-key="id"
      :items="question.options" size="md" :ui="{ item: 'p-6' }">
      <template #label="{ item }">
        <CodeText v-if="item" :text="item.text" />
      </template>
    </URadioGroup>
    <div v-else>
      <UCard v-for="item in question.options" :class="{
        'border-green-700 border-3':
          isCorrectAnswer(item.id) && item.id === selectedOption,
        'border-red-700 border-2':
          !isCorrectAnswer(item.id) && item.id === selectedOption,
      }">
        <div class="flex gap-4 align-middle items-center">
          <UIcon :name="`uil:${isCorrectAnswer(item.id) ? 'check-circle' : 'multiply'
            }`" class="size-5" :class="{
              'text-green-700':
                isCorrectAnswer(item.id),
              'text-red-700':
                !isCorrectAnswer(item.id),
            }" />

          <pre><code>{{ item.text }}</code></pre>
        </div>
      </UCard>
      <div class="group relative px-4 py-3 rounded-md text-sm/6 my-5 last:mb-0 flex">
        <UIcon name="uil-lightbulb-alt" class="size-5" />
        <CodeText class="inline ml-2" :text="question.explanation" />
      </div>
    </div>
    <template #footer>

      <div class="flex justify-between">
        <UButton to="/" class="text-sm" variant="subtle" color="error">
          <span class="truncate">Exit</span>
        </UButton>
        <div class="flex gap-4">
          <UButton v-if="isDisplayingAnswer" size="md" variant="subtle" :color="selectedOption ? 'primary' : 'neutral'"
            @click="onNextQuestion" :disabled="!selectedOption" class="secondary">
            Continue
          </UButton>
          <UButton v-else size="md" variant="subtle" :color="selectedOption ? 'primary' : 'neutral'"
            @click="displayAnswer" :disabled="!selectedOption" class="secondary">
            {{ getNextButtonText() }}
          </UButton>
        </div>
      </div>
    </template>
  </UCard>
</template>

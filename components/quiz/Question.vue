<script setup lang="ts">
const {
  question,
  getQuestion,
  isDisplayingAnswer,
  selectedOption,
  isCorrectAnswer,
  displayAnswer,
  isLoading
} = useQuiz();
if (import.meta.client) {
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
        <USkeleton v-if="isLoading" class="h-4 w-[250px]" />
        <CodeText v-else class="font-semibold text-base md:text-2xl" :text="question.title" />
      </div>
    </template>
    <div v-if="isLoading" class="grid gap-4">
      <USkeleton class="h-4 w-[300px]" />
      <USkeleton class="h-4 w-[300px]" />
      <USkeleton class="h-4 w-[300px]" />
      <USkeleton class="h-4 w-[300px]" />
    </div>
    <URadioGroup v-else-if="!isDisplayingAnswer" variant="table" v-model="selectedOption" value-key="id"
      :items="question.options" size="md" :ui="{ item: 'p-4 lg:p-6' }">
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
        <div class="flex items-center">
          <UIcon :name="`uil:${isCorrectAnswer(item.id) ? 'check-circle' : 'multiply'
            }`" class="size-5 flex-none" :class="{
              'text-green-700':
                isCorrectAnswer(item.id),
              'text-red-700':
                !isCorrectAnswer(item.id),
            }" />
          <span class="ml-2">
            {{ item.text }}
          </span>
        </div>
      </UCard>
      <div class="group relative px-4 py-3 rounded-md text-sm/6 my-5 last:mb-0 flex">
        <UIcon name="uil-lightbulb-alt" class="size-5 flex-none" />
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
            @click="getQuestion()" :disabled="!selectedOption" class="secondary">
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

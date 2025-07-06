<script setup lang="ts">
import type { RadioGroupValue } from '@nuxt/ui'
const validated = ref<Boolean>(false)
const { data: question } = await useFetch('/api/question')
const value = ref<RadioGroupValue>()
function validateQuestion() {
    validated.value = true
}
function isCorrectAnswer(index: number) {
    return index === question.value?.correctIndex
}
async function onNextQuestion() {
    const newQuestion = await $fetch('/api/question')
    console.log('newQuestion:', newQuestion)
    question.value = newQuestion
    value.value = null
    validated.value = false
}
const hasSelectedRightAnswer = computed(() => {
    return question.value?.options[question.value.correctIndex] === value.value
})
</script>

<template>
    <UCard v-if="question" class="mt-8">
        <template #header>
            <CodeText class="font-semibold" :text="question.title" />
        </template>
        <URadioGroup v-if="question && !validated" variant="table" v-model="value" :items="question.options" size="xl"
            :ui="{ item: 'p-6' }">
            <template #label="{ item }">
                <CodeText v-if="item" :text="item.value" />
            </template>
        </URadioGroup>
        <div v-else-if="question">
            <UCard v-for="(item, index) in question.options" :class="{
                'border-green-700 border-3': isCorrectAnswer(index) && item === value,
                'border-red-700 border-3': !isCorrectAnswer(index) && item === value
            }">
                <div class="flex gap-4 align-middle items-center">
                    <UIcon
                        :name="`material-symbols-${isCorrectAnswer(index) ? 'check-circle-rounded' : 'close-small-outline-rounded'}`"
                        class="size-5" />

                    <pre><code>{{ item }}</code></pre>
                </div>
            </UCard>
            <div v-if="!hasSelectedRightAnswer"
                class="group relative block px-4 py-3 rounded-md text-sm/6 my-5 last:mb-0 [&amp;_code]:text-xs/5 [&amp;_code]:bg-default [&amp;_pre]:bg-default [&amp;&gt;div]:my-2.5 [&amp;_ul]:my-2.5 [&amp;_ol]:my-2.5 [&amp;&gt;*]:last:!mb-0 [&amp;_ul]:ps-4.5 [&amp;_ol]:ps-4.5 [&amp;_li]:my-0 transition-colors border border-warning/25 bg-warning/10 text-warning-600 dark:text-warning-300 [&amp;_a]:text-warning [&amp;_a]:hover:border-warning [&amp;_code]:text-warning-600 dark:[&amp;_code]:text-warning-300 [&amp;_code]:border-warning/25 [&amp;_a]:hover:[&amp;&gt;code]:border-warning [&amp;_a]:hover:[&amp;&gt;code]:text-warning [&amp;&gt;ul]:marker:text-warning/50">
                {{ question.explanation }}
            </div>
        </div>
        <template #footer>
            <div class="flex gap-4 justify-end">
                <!-- <UButton icon="solar-skip-next-broken" size="md" color="primary" variant="outline">Skip
                </UButton> -->
                <UButton icon="heroicons:document-check-16-solid" size="md" color="primary" variant="solid"
                    :disabled="!value" @click="validateQuestion">Check Answer
                </UButton>
                <UButton icon="heroicons:document-check-16-solid" size="md" color="primary" variant="solid"
                    @click="onNextQuestion">Next Question
                </UButton>
            </div>

        </template>
    </UCard>
</template>

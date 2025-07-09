export default function () {
  const questionIds = ref<number[]>([]);
  const question = ref<any>({});
  const selectedOption = ref<string | null>(null);
  const isDisplayingAnswer = ref<Boolean>(false);
  const hasSelectedCorrectAnswer = computed(
    () =>
      question.value?.options[question.value.correctIndex] ===
      selectedOption.value
  );

  return {
    question,
    selectedOption,
    isDisplayingAnswer,
    hasSelectedCorrectAnswer,
    isCorrectAnswer,
    getQuestion,
    displayAnswer,
  };
  async function getQuestion() {
    selectedOption.value = null;
    isDisplayingAnswer.value = false;
    const data = await $fetch("/api/question");
    question.value = data;
    // questionIds.value.push(question?.value?.id);
  }
  function displayAnswer() {
    isDisplayingAnswer.value = true;
  }
  function isCorrectAnswer(index: number) {
    return index === question.value?.correctIndex;
  }
}

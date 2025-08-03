export default function () {
  const answeredQuestions = ref<number[]>([]);
  const question = ref<any>({});
  const selectedOption = ref<string | null>(null);
  const isDisplayingAnswer = ref<Boolean>(false);
  const hasSelectedCorrectAnswer = computed(
    () =>
      question.value?.options[question.value.correctIndex] ===
      selectedOption.value
  );
  const questionsLength = ref<number>(0);
  const hasNoMoreQuestions = ref<boolean>(false);

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
    const questionIndex = await getRandomNewQuestionIndex();
    const data = await $fetch(`/api/questions/${questionIndex}`);
    question.value = data;
    answeredQuestions.value.push(questionIndex as number);
  }
  function displayAnswer() {
    isDisplayingAnswer.value = true;
  }
  function isCorrectAnswer(index: number) {
    return index === question.value?.correctIndex;
  }
  async function getRandomNewQuestionIndex() {
    if (!questionsLength.value) {
      const { data } = await useFetch("/api/questionsLength");
      questionsLength.value = data.value as number;
    }
    if (answeredQuestions.value.length >= questionsLength.value) {
      console.log("No more new questions to get...");
      return;
    }
    const randomIndex = generateRandom(1, questionsLength.value);
    return randomIndex;
  }
  function generateRandom(min: number, max: number): number {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return answeredQuestions.value.indexOf(num) >= 0
      ? generateRandom(min, max)
      : num;
  }
}

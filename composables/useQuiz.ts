export default function () {
  const loadedQuestions = useState("loadedQuestions", () => []);
  const answeredCorrectly = useState("answeredCorrectly", () => 0);
  const answeredCount = useState("answeredCount", () => 0);
  const question = ref<any>({});
  const selectedOption = ref<string | null>(null);
  const isDisplayingAnswer = ref<Boolean>(false);
  const hasSelectedCorrectAnswer = computed(
    () => question.value?.correctId === selectedOption.value
  );
  const questionsLength = ref<number>(0);
  const hasNoMoreQuestions = ref<Boolean>(false);
  const answersRatio = useState("answersRatio", () => 0);
  const isLoading = ref<Boolean>(false);

  return {
    question,
    selectedOption,
    isDisplayingAnswer,
    hasSelectedCorrectAnswer,
    isCorrectAnswer,
    getQuestion,
    displayAnswer,
    answersRatio,
    loadedQuestions,
    answeredCount,
    isLoading,
  };
  async function getQuestion() {
    isLoading.value = true;
    selectedOption.value = null;
    isDisplayingAnswer.value = false;
    const questionIndex = await getRandomNewQuestionIndex();
    const data = await $fetch(`/api/questions/${questionIndex}`);
    question.value = { ...data, options: shuffle(data.options) };
    loadedQuestions.value.push(questionIndex as number);
    isLoading.value = false;
  }
  function displayAnswer() {
    isDisplayingAnswer.value = true;
    answeredCount.value++;
    if (
      question.value &&
      selectedOption.value &&
      hasSelectedCorrectAnswer.value
    ) {
      answeredCorrectly.value++;
    }
    answersRatio.value = (answeredCorrectly.value / answeredCount.value) * 100;
  }
  function isCorrectAnswer(id: string) {
    return id === question.value?.correctId;
  }
  async function getRandomNewQuestionIndex() {
    if (!questionsLength.value) {
      const { data } = await useFetch("/api/questionsLength");
      questionsLength.value = data.value as number;
    }
    if (loadedQuestions.value.length >= questionsLength.value) {
      console.log("No more new questions to get...");
      return;
    }
    const randomIndex = generateRandom(1, questionsLength.value);
    return randomIndex;
  }
  function generateRandom(min: number, max: number): number {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return loadedQuestions.value.indexOf(num) >= 0
      ? generateRandom(min, max)
      : num;
  }
  function shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // pick a random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }
}

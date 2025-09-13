export default function () {
  const loadedQuestionsCookie = useCookie("loadedQuestions");
  const loadedQuestions = useState("loadedQuestions", () =>
    loadedQuestionsCookie.value ? loadedQuestionsCookie.value : []
  );
  const answeredCorrectlyCookie = useCookie("answeredCorrectly");
  const answeredCorrectly = useState("answeredCorrectly", () =>
    answeredCorrectlyCookie.value ? parseInt(answeredCorrectlyCookie.value) : 0
  );
  const answeredCountCookie = useCookie("answeredCount");
  const answeredCount = useState("answeredCount", () =>
    answeredCountCookie.value ? parseInt(answeredCountCookie.value) : 0
  );
  const question = ref<any>({});
  const selectedOption = ref<string | null>(null);
  const isDisplayingAnswer = ref<Boolean>(false);
  const hasSelectedCorrectAnswer = computed(
    () => question.value?.correctId === selectedOption.value
  );
  const questionsLength = ref<number>(0);
  const questionIndex = ref<number | undefined>(undefined);
  const hasNoMoreQuestions = ref<Boolean>(false);
  const answersRatioCookie = useCookie("answersRatio");
  const answersRatio = useState("answersRatio", () =>
    answersRatioCookie.value ? parseInt(answersRatioCookie.value) : 0
  );
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
    clearCookies,
  };
  function clearCookies() {
    loadedQuestionsCookie.value = null;
    answeredCountCookie.value = null;
    answersRatioCookie.value = null;
    answeredCorrectlyCookie.value = null;
  }
  async function getQuestion() {
    isLoading.value = true;
    selectedOption.value = null;
    isDisplayingAnswer.value = false;
    questionIndex.value = await getRandomNewQuestionIndex();
    const data = await $fetch(`/api/questions/${questionIndex.value}`);
    question.value = { ...data, options: shuffle(data.options) };
    isLoading.value = false;
  }
  function displayAnswer() {
    loadedQuestions.value.push(questionIndex.value as number);
    loadedQuestionsCookie.value = JSON.stringify(loadedQuestions.value);
    isDisplayingAnswer.value = true;
    answeredCount.value++;
    answeredCountCookie.value = JSON.stringify(answeredCount.value);
    if (
      question.value &&
      selectedOption.value &&
      hasSelectedCorrectAnswer.value
    ) {
      answeredCorrectly.value++;
      answeredCorrectlyCookie.value = JSON.stringify(answeredCorrectly.value);
    }
    answersRatio.value = (answeredCorrectly.value / answeredCount.value) * 100;
    answersRatioCookie.value = JSON.stringify(answersRatio.value);
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

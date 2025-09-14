import jsonData from "~/public/data/quiz.json";

export default defineEventHandler(() => {
  const { questions } = jsonData;
  return questions;
});

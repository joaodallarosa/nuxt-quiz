import jsonData from "~/public/data/quiz.json";

export default defineEventHandler(() => {
  return jsonData.questions.length;
});

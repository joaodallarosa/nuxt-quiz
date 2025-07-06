import jsonData from "~/public/data/quiz.json";

export default defineEventHandler((event) => {
  const { questions } = jsonData;
  const position = Math.floor(Math.random() * jsonData.questions.length);
  return questions[position];
});

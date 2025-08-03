import jsonData from "~/public/data/quiz.json";

export default defineEventHandler((event) => {
  const id = parseInt(getRouterParam(event, "id") as string);
  const { questions } = jsonData;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer",
    });
  }
  if (id > jsonData.questions.length) {
    throw createError({
      statusCode: 400,
      statusMessage: `Question doesn't exist, max is ${jsonData.questions.length}`,
    });
  }
  return questions[id];
});

import { createClient } from "@supabase/supabase-js";
export default defineEventHandler(async (event) => {
  const { questionIndex } = await readBody(event);
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabasePublishableKey
  );
  try {
    const data = await supabase
      .from("flagged-questions")
      .insert({ question_index: questionIndex });
    console.log("from database insert:", data);
    return data;
  } catch (err) {
    setResponseStatus(event, 500, "deu ruim");
    return err;
  }
});

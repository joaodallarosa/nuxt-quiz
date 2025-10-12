import { createClient } from "@supabase/supabase-js";
export default defineEventHandler(async (event) => {
  const { questionId } = await readBody(event);
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabasePublishableKey
  );
  return await supabase
    .from("flagged-questions")
    .insert({ question_id: questionId });
});

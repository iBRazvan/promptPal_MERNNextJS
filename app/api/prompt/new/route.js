import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  // GETTING PROPS
  const { userId, prompt, tag } = await req.json();
  // CONNECTING TO DB TO CREATE A POST
  try {
    await connectToDB();
    // CREATING NEW PROMPT FUNCTION
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    // SAVING IN DB THE NEWPROMPT
    await newPrompt.save();

    console.log(newPrompt);

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
  }
};

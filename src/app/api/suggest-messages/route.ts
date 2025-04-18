import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextResponse } from "next/server";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    // const { messages } = await req.json();
    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be seperated by '||'. These questions are for anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensetive topics., focusing instead on universal themes that encourage friendly interaction. ";

    // Give prompt to the openai
    const result = streamText({
      model: openai("gpt-4o"),
      prompt,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    // if (error instanceof openai.) {
    //   const { name, status, headers, message } = error;
    //   return NextResponse.json({ name, status, headers, message });
    // } else {
    console.error("An unexpected error occured", error);
    throw error;
    // }
  }
}

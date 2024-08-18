"use server";

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function sendMessage(input:string) {
  const chatCompletion = await getGroqChatCompletion(input);
  // Print the completion returned by the LLM.
  return(chatCompletion.choices[0]?.message?.content);
}

export async function getGroqChatCompletion(input:string) {
  return groq.chat.completions.create({
    "messages": [
      {
        "role": "system",
        "content": "You are the assistant of Med Aziz Ben Hmidene, a software engineer. Your role is to guide users through his portfolio by replying with the appropriate path they should look at. You must respond with one of the following paths: About Me, Personal Projects, Professional Experiences, Volunteering Experience, Contact, or Study. Only respond to queries related to Med Aziz Ben Hmidene. If the user's prompt begins with \"Chat:\", you may respond normally as an AI assistant, without restrictions on your responses.\n"
      },
      {
        "role": "user",
        "content": input
      }
    ],
    "model": "llama3-70b-8192",
    "temperature": 0.43,
    "max_tokens": 1024,
    "top_p": 1,
    "stream": false,
    "stop": null
  });
}

import { streamText } from "ai";
import { createOllama } from "ollama-ai-provider";

const ollama = createOllama();
const model = ollama("llama3.1:8b");

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model,
    messages,
    system:
      "You are Brazilian, you speak Portuguese, and you are a helpful assistant. You are aware of the coolest events in Rio de Janeiro.",
  });

  return result.toDataStreamResponse();
}

import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()
  const { text } = await generateText({
    model: "openai/gpt-5-mini",
    prompt: `You are BlueCarbon's helpful assistant. Be concise and specific.\n\nUser: ${prompt}\nAssistant:`,
  })
  return NextResponse.json({ text })
}

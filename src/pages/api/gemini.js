// pages/api/gemini.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { message, modelName } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Message is required' });
  }

  try {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Gemini API key not found.  Please set the NEXT_PUBLIC_GEMINI_API_KEY environment variable.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "hello" }],
        },
        {
          role: "model",
          parts: [{ text: "Hello there! Before I can assist you, could you please provide your name? I only assist users who provide their names." }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    res.status(200).json({ content: responseText });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ message: 'Failed to generate response', error: error.message });
  }
}
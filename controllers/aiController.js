const OpenAI = require("openai").default;

const explainCar = async (req, res) => {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: "https://openrouter.ai/api/v1",
    });

    const { car, userPreferences, alternatives } = req.body;

    console.log("OPENROUTER KEY:", process.env.OPENROUTER_API_KEY);

    const completion = await client.chat.completions.create({
      model: "meta-llama/llama-3.3-70b-instruct",
      messages: [
        {
          role: "user",
          content: `
User Preferences:
${JSON.stringify(userPreferences)}

Selected Car:
${JSON.stringify(car)}

Alternatives:
${JSON.stringify(alternatives)}

Explain:
1. Why this car matches
2. Pros
3. Cons
4. Hidden trade-offs
5. Final advice
`,
        },
      ],
    });

    res.json({
      success: true,
      explanation: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("OpenRouter Error:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { explainCar };
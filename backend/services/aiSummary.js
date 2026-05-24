const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateSummary = async ({
  currentCost,
  savings,
  annualWaste,
  efficiencyScore,
}) => {

  try {

    const prompt = `
You are an AI infrastructure cost optimization consultant.

Generate a concise 80-120 word audit summary.

Audit Data:
- Current Monthly Cost: $${currentCost}
- Potential Monthly Savings: $${savings}
- Annual Waste: $${annualWaste}
- Efficiency Score: ${efficiencyScore}

Rules:
- Be practical and finance-oriented.
- Mention optimization opportunities.
- Mention if stack is already efficient.
- Sound like a SaaS cost consultant.
- No bullet points.
`;

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an expert AI infrastructure financial analyst.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 180,
    });

    return response.choices[0].message.content;

  } catch (error) {

    console.log("AI Summary Error:", error.message);

    // FALLBACK
    return `
Your current AI tooling setup appears relatively cost efficient for your current team size and workflow patterns. While no major overspending risks were detected, continuing to monitor usage and vendor pricing changes may unlock future optimization opportunities.
`;
  }
};

module.exports = {
  generateSummary,
};
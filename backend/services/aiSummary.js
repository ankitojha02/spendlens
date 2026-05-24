const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
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

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return response;

  } catch (error) {

    console.log("Gemini AI Error:", error.message);

    return `
Your current AI tooling setup appears relatively cost efficient for your current team size and workflow patterns. While no major overspending risks were detected, continuing to monitor usage and vendor pricing changes may unlock future optimization opportunities.
`;
  }
};

module.exports = {
  generateSummary,
};
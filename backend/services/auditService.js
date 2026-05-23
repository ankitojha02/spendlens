const calculateAudit = (toolData) => {
  let currentCost = Number(toolData.spend);
  let savings = 0;

  const recommendations = [];

  // ChatGPT Logic
  if (
    toolData.tool === "ChatGPT" &&
    toolData.plan === "Team" &&
    Number(toolData.seats) <= 5
  ) {
    savings += 20 * Number(toolData.seats);

    recommendations.push({
      tool: "ChatGPT",
      action: "Downgrade from Team to Plus",
      save: `$${20 * Number(toolData.seats)}/month`,
    });
  }

  // Cursor Logic
  if (
    toolData.tool === "Cursor" &&
    Number(toolData.seats) <= 2
  ) {
    savings += 15 * Number(toolData.seats);

    recommendations.push({
      tool: "Cursor",
      action: "Use Pro instead of Business",
      save: `$${15 * Number(toolData.seats)}/month`,
    });
  }

  // Generic high spend optimization
  if (currentCost > 500) {
    savings += 100;

    recommendations.push({
      tool: toolData.tool,
      action: "Optimize unused licenses",
      save: "$100/month",
    });
  }

 const efficiencyScore = Math.max(
  100 - Math.floor((savings / currentCost) * 100),
  52
);

return {
  currentCost,
  savings,
  annualWaste: savings * 12,
  efficiencyScore,
  recommendations,
};
};

module.exports = {
  calculateAudit,
};
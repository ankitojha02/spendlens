const pricing = require("../data/pricingData");

const generateAudit = async (req, res) => {
  try {
    const { tools } = req.body;

    if (!tools || tools.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No tools provided",
      });
    }

    let currentCost = 0;
    let totalSavings = 0;

    const recommendations = [];

    tools.forEach((item) => {
      const spend = Number(item.spend) || 0;
      const seats = Number(item.seats) || 1;

      currentCost += spend;

      let recommendedPlan = item.plan;
      let recommendedCost = spend;
      let action = "Current plan looks optimized.";
      let savings = 0;

      /* RULES */

      // Team too small for Team/Business
      if (
        seats <= 2 &&
        ["Team", "Business"].includes(item.plan)
      ) {
        recommendedPlan = "Pro";
        recommendedCost = 20 * seats;

        savings = spend - recommendedCost;

        action = `Downgrade from ${item.plan} to Pro. Small teams usually don't need collaborative enterprise features.`;
      }

      // Enterprise too expensive
      else if (
        seats < 10 &&
        item.plan === "Enterprise"
      ) {
        recommendedPlan = "Team";

        recommendedCost = 30 * seats;

        savings = spend - recommendedCost;

        action =
          "Enterprise plan appears oversized for your current team size.";
      }

      // Huge API spend
      else if (
        item.plan === "API Direct" &&
        spend > 500
      ) {
        recommendedCost = spend * 0.7;

        savings = spend - recommendedCost;

        action =
          "Consider usage optimization, caching, or startup credits to reduce API costs.";
      }

      // Already optimized
      else {
        action =
          "Your current setup appears cost efficient for your usage.";
      }

      if (savings > 0) {
        totalSavings += savings;
      }

      recommendations.push({
        tool: item.tool,
        currentPlan: item.plan,
        recommendedPlan,
        currentSpend: spend,
        optimizedSpend: Math.round(recommendedCost),
        save: `$${Math.round(savings)}/mo`,
        action,
      });
    });

    const annualWaste = totalSavings * 12;

    let efficiencyScore = "A";

    if (totalSavings > 1000) {
      efficiencyScore = "D";
    } else if (totalSavings > 500) {
      efficiencyScore = "C";
    } else if (totalSavings > 200) {
      efficiencyScore = "B";
    }

    return res.status(200).json({
      success: true,

      data: {
        currentCost,
        savings: Math.round(totalSavings),
        annualWaste: Math.round(annualWaste),
        efficiencyScore,
        recommendations,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  generateAudit,
};
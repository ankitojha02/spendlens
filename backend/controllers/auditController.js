const { generateSummary } = require("../services/aiSummary");

const pricing = require("../data/pricingData");

const supabase = require("../config/supabaseClient");

const crypto = require("crypto");

const { sendAuditEmail } = require("../services/emailService");

const generateAudit = async (req, res) => {
  try {
    const { tools, teamSize, useCase } = req.body;

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

      /* RULE 1 — Small team overpaying */
      if (seats <= 2 && ["Team", "Business"].includes(item.plan)) {
      recommendedPlan = "Plus";

recommendedCost =
  pricing[item.tool]?.Plus * seats || spend;

        savings = spend - recommendedCost;

        action = `Downgrade from ${item.plan} to Plus. Small teams rarely need advanced collaboration features.`;
      } else if (seats < 10 && item.plan === "Enterprise") {
        /* RULE 2 — Enterprise oversized */
        recommendedPlan = "Team";

        recommendedCost =
  pricing[item.tool]?.Team * seats || spend;

        savings = spend - recommendedCost;

        action =
          "Enterprise pricing appears oversized for your current team size.";

      }
      else if (
  useCase === "coding" &&
  item.tool === "ChatGPT" &&
  spend > 50
) {

  recommendedPlan = "Cursor Pro";

  recommendedCost = 20 * seats;

  savings = spend - recommendedCost;

  action =
    "Cursor Pro may provide better coding-focused ROI compared to higher ChatGPT spend for engineering workflows.";
}
      
      else if (item.plan === "API Direct" && spend > 500) {
        /* RULE 3 — Expensive API usage */
        recommendedCost = spend * 0.7;

        savings = spend - recommendedCost;

        action =
          "Implement caching, usage caps, or startup credits to reduce API burn.";
      }  else if (seats >= 20 && ["Pro", "Plus"].includes(item.plan)) {
        /* RULE 5 — Large teams not using enterprise */
        action =
          "Your team may benefit from centralized billing and admin controls available in enterprise plans.";
      } else {
        /* DEFAULT */
        action = "Your current setup appears cost efficient for your usage.";
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

    const optimized =
  totalSavings < 100;


const savingsPercentage =
  currentCost > 0
    ? (totalSavings / currentCost) * 100
    : 0;

let efficiencyScore = "A";

if (savingsPercentage >= 50) {
  efficiencyScore = "D";
} else if (savingsPercentage >= 30) {
  efficiencyScore = "C";
} else if (savingsPercentage >= 15) {
  efficiencyScore = "B";
}
   

    const summary = await generateSummary({
      currentCost,
      savings: Math.round(totalSavings),
      annualWaste: Math.round(annualWaste),
      efficiencyScore,
    });

    const auditId = crypto.randomUUID().slice(0, 8);

   await supabase.from("audits").insert([
  {
    audit_id: auditId,
    tools,
    currentCost,
    savings: Math.round(totalSavings),
    annualWaste: Math.round(annualWaste),
    efficiencyScore,
    recommendations,
    summary,
  },
]);
    return res.status(200).json({
      success: true,

      data: {
        auditId,
        currentCost,
        savings: Math.round(totalSavings),
        annualWaste: Math.round(annualWaste),
        efficiencyScore,
        recommendations,
        summary,
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

const getAuditById = async (req, res) => {
  try {

    const { id } = req.params;

    const { data, error } = await supabase
      .from("audits")
      .select("*")
      .eq("audit_id", id)
      .single();

    if (error || !data) {
      return res.status(404).json({
        success: false,
        message: "Audit not found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
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
  getAuditById,
};

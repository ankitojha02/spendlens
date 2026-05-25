const { generateSummary } = require("../services/aiSummary");

const pricing = require("../data/pricingData");

const supabase = require("../config/supabaseClient");

const crypto = require("crypto");

const { sendAuditEmail } = require("../services/emailService");

const getRetailCost = (tool, plan, seats) => {
  return pricing?.[tool]?.[plan]
    ? pricing[tool][plan] * seats
    : 0;
};

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

  const retailCost = getRetailCost(
  item.tool,
  item.plan,
  seats
);

  currentCost += spend;

  let recommendedPlan = item.plan;
  let recommendedCost = spend;
  let savings = 0;

  let action =
    "Your current setup appears cost efficient for your usage.";



       if (
    useCase === "coding" &&
    item.tool === "ChatGPT" &&
    ["Plus", "Team", "Enterprise", "API Direct"].includes(item.plan) &&
    spend > 100
  ) {
    recommendedPlan = "Cursor Pro";

    recommendedCost = 20 * seats;

    savings = spend - recommendedCost;

    action =
      "Cursor Pro may deliver better engineering ROI for coding-heavy workflows.";
  }
  /*
    RULE 1
    SMALL TEAM OVERPAYING
  */
  else if (
    seats <= 3 && spend > retailCost &&
    ["Team", "Business", "Enterprise"].includes(item.plan)
  ) {
    if (pricing[item.tool]?.Pro) {
      recommendedPlan = "Pro";
      recommendedCost = pricing[item.tool].Pro * seats;
    } else if (pricing[item.tool]?.Plus) {
      recommendedPlan = "Plus";
      recommendedCost = pricing[item.tool].Plus * seats;
    } else if (pricing[item.tool]?.Individual) {
      recommendedPlan = "Individual";
      recommendedCost = pricing[item.tool].Individual * seats;
    }

    savings = spend - recommendedCost;

    action =
      "Small teams rarely benefit from enterprise collaboration features.";
  }

  /*
    RULE 2
    ENTERPRISE TOO EARLY
  */
else if (
  item.plan === "Enterprise" &&
  seats < 15
) {

  if (pricing[item.tool]?.Team) {

    recommendedPlan = "Team";

    recommendedCost =
      pricing[item.tool].Team * seats;

  } else if (
    pricing[item.tool]?.Business
  ) {

    recommendedPlan = "Business";

    recommendedCost =
      pricing[item.tool].Business * seats;
  }

  if (recommendedCost < spend) {

    savings = spend - recommendedCost;

    action =
      "Enterprise pricing appears oversized for your current team size.";
  }
}

  /*
    RULE 3
    CODING USE CASE
  */


  /*
    RULE 4
    API OVERSPEND
  */
  else if (
    item.plan === "API Direct" &&
    spend > 500
  ) {
    recommendedPlan = "Optimized API Usage";

    recommendedCost = Math.round(spend * 0.7);

    savings = spend - recommendedCost;

    action =
      "Caching, batching, and usage limits can significantly reduce API burn.";
  }

  /*
    RULE 5
    LARGE TEAM ON INDIVIDUAL PLANS
  */
  else if (
    seats >= 20 &&
    ["Plus", "Pro", "Individual"].includes(item.plan)
  ) {
    action =
      "Centralized billing and admin controls may justify enterprise plans.";
  }

  /*
    RULE 6
    CURSOR TEAM OVERPAYING
  */
  else if (
    item.tool === "Cursor" &&
    item.plan === "Team" &&
    seats <= 3
  ) {
    recommendedPlan = "Pro";

    recommendedCost = 20 * seats;

    savings = spend - recommendedCost;

    action =
      "Cursor Team is usually unnecessary for very small engineering teams.";
  }

  if (savings < 0) {
    savings = 0;
  }

  totalSavings += savings;

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

  

    const savingsPercentage =
      currentCost > 0 ? (totalSavings / currentCost) * 100 : 0;

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

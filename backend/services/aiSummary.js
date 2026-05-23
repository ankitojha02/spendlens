const generateSummary = async ({
  currentCost,
  savings,
  annualWaste,
  efficiencyScore,
}) => {
  try {
    let summary = "";

    if (savings > 1000) {
      summary =
        `Your AI stack shows major overspending opportunities. With optimized plan selection and smarter tooling alignment, your team could save approximately $${annualWaste} annually. Your current setup appears oversized relative to actual operational needs. Consolidating enterprise subscriptions and improving usage efficiency could dramatically reduce recurring AI infrastructure costs.`;
    }

    else if (savings > 300) {
      summary =
        `Your team has moderate optimization opportunities across its AI tooling stack. Several subscriptions appear slightly oversized for your current usage profile. By adjusting plans and improving cost allocation, your organization could meaningfully reduce monthly operational spend while maintaining productivity.`;
    }

    else {
      summary =
        `Your current AI tooling setup appears relatively cost efficient for your current team size and workflow patterns. While no major overspending risks were detected, continuing to monitor usage and vendor pricing changes may unlock future optimization opportunities.`;
    }

    return summary;

  } catch (error) {
    console.log(error);

    return "Unable to generate AI summary.";
  }
};

module.exports = {
  generateSummary,
};
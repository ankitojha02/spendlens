const runAudit = async (req, res) => {
  try {
    const { tools } = req.body;

    const result = {
      currentCost: 1240,
      savings: 420,
      recommendations: [
        {
          tool: "ChatGPT Team",
          action: "Downgrade to Plus",
          save: "$120/year",
        },
        {
          tool: "Cursor Business",
          action: "Switch to Pro",
          save: "$240/year",
        },
      ],
    };

    res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  runAudit,
};
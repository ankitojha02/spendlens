const {
  calculateAudit,
} = require("../services/auditService");

const runAudit = async (req, res) => {
  try {
    const toolData = req.body.tools[0];

    const result = calculateAudit(toolData);

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
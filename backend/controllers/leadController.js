const supabase = require("../config/supabaseClient");
const { sendAuditEmail } = require("../services/emailService");
const saveLead = async (req, res) => {
  try {
    const { email, website, company, role, team_size, savings, auditId } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    if (website) {
  return res.status(400).json({
    success: false,
    message: "Spam detected",
  });
}

   const { data, error } = await supabase
  .from("leads")
  .insert([
    {
      email,
      company,
      role,
      team_size,
    },
  ]);

if (error) {
  console.log(error);

  return res.status(500).json({
    success: false,
    message: "Failed to save lead",
  });
}

await sendAuditEmail({
  email,
  company,
  savings,
  auditId,
});

    return res.status(201).json({
      success: true,
      message: "Lead saved successfully",
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
  saveLead,
};

const saveLead = async (req, res) => {
  try {
    const {
      email,
      company,
      role,
      teamSize,
    } = req.body;

    console.log("NEW LEAD:");
    console.log({
      email,
      company,
      role,
      teamSize,
    });

    return res.status(200).json({
      success: true,
      message: "Lead saved successfully",
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
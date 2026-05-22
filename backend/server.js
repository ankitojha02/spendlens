const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SpendLens API Running 🚀",
  });
});

app.post("/api/audit", (req, res) => {

  const { tool, plan, spend, seats } = req.body;

  const yearlySpend = spend * 12;

  const estimatedSavings = Math.floor(yearlySpend * 0.25);

  res.json({
    success: true,
    tool,
    plan,
    yearlySpend,
    estimatedSavings,
    recommendation:
      "Optimize unused subscriptions and downgrade unnecessary seats.",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
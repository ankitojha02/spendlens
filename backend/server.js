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

/* Routes */
const auditRoutes = require("./routes/auditRoutes");
const leadRoutes = require("./routes/leadRoutes");

app.use("/api/audit", auditRoutes);
app.use("/api/leads", leadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
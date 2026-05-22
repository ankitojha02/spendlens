const express = require("express");
const router = express.Router();

const {
  runAudit,
} = require("../controllers/auditController");

//routes

router.post("/", runAudit);

module.exports = router;
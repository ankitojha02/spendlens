const express = require("express");

const router = express.Router();

const {
  generateAudit, getAuditById,
} = require("../controllers/auditController");

router.post("/", generateAudit);
router.get("/:id", getAuditById);

module.exports = router;
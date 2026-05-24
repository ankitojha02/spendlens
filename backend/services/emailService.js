const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendAuditEmail = async ({
  email,
  company,
  savings,
  auditId,
}) => {

  try {

    const auditUrl = `https://spendlens-delta.vercel.app/audit/${auditId}`;

    await resend.emails.send({
      from: "SpendLens <onboarding@resend.dev>",
      to: email,
      subject: "Your SpendLens AI Audit Report",
      html: `
        <div style="font-family: Arial; padding: 20px;">
          
          <h1>SpendLens Audit Report</h1>

          <p>
            Your AI spend audit has been successfully generated.
          </p>

          <p>
            Potential Monthly Savings:
            <strong>$${savings}</strong>
          </p>

          <p>
            View your public audit report:
          </p>

          <a href="${auditUrl}">
            ${auditUrl}
          </a>

          ${
            savings > 500
              ? `
                <p style="margin-top:20px;">
                  Your stack may qualify for significant infrastructure savings through Credex enterprise credits.
                </p>
              `
              : ""
          }

          <hr />

          <p>
            — SpendLens AI
          </p>

        </div>
      `,
    });

    console.log("Email sent successfully");

  } catch (error) {

    console.log("Resend Email Error:", error.message);
  }
};

module.exports = {
  sendAuditEmail,
};
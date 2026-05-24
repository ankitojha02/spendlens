import { notFound } from "next/navigation";

async function getAudit(id: string) {
  try {
    const response = await fetch(
      `https://spendlens-frdn.onrender.com/api/audit/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data.data;

  } catch (error) {
    return null;
  }
}

export default async function PublicAuditPage({
  params,
}: {
  params: { id: string };
}) {

  const audit = await getAudit(params.id);

  if (!audit) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f1eb] px-4 py-10 text-black sm:px-6 lg:px-10">

      <div className="mx-auto max-w-6xl">

        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
          Public AI Spend Audit
        </p>

        <h1 className="bebas mt-4 text-[4rem] leading-none tracking-[0.12em] sm:text-[7rem]">
          SAVINGS
          <br />
          REPORT
        </h1>

        {/* Stats */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">

          <div className="border border-black p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Current Cost
            </p>

            <h2 className="bebas mt-4 text-6xl">
              ${audit.current_cost}
            </h2>
          </div>

          <div className="border border-black p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Monthly Savings
            </p>

            <h2 className="bebas mt-4 text-6xl text-green-600">
              ${audit.savings}
            </h2>
          </div>

          <div className="border border-black p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Annual Waste
            </p>

            <h2 className="bebas mt-4 text-6xl text-red-500">
              ${audit.annual_waste}
            </h2>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-10 border border-black bg-black p-8 text-white">

          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            AI GENERATED SUMMARY
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            {audit.summary}
          </p>
        </div>
      </div>
    </main>
  );
}
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

    const result = await response.json();

    return result.data;

  } catch (error) {
    console.log(error);

    return null;
  }
}

export default async function PublicAuditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const audit = await getAudit(id);

  if (!audit) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f1eb] px-4 py-10 text-black sm:px-6 lg:px-10">

      {/* Header */}
      <div className="border border-black p-8">

        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
          PUBLIC AI SPEND AUDIT
        </p>

        <h1 className="bebas mt-4 text-6xl tracking-[0.1em]">
          SPENDLENS REPORT
        </h1>

        <p className="mt-4 max-w-2xl text-gray-700">
          Anonymous public audit report generated using SpendLens AI cost optimization engine.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-10 grid gap-6 lg:grid-cols-4">

        <div className="border border-black p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Current Cost
          </p>

          <h2 className="bebas mt-4 text-6xl">
            ${audit.currentCost}
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
            ${audit.annualWaste}
          </h2>
        </div>

        <div className="border border-black p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Efficiency Score
          </p>

          <h2 className="bebas mt-4 text-6xl">
            {audit.efficiencyScore}
          </h2>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 border border-black bg-black p-8 text-white">

        <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
          AI GENERATED SUMMARY
        </p>

        <h3 className="bebas mt-4 text-5xl tracking-[0.08em]">
          STRATEGIC INSIGHTS
        </h3>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-300">
          {audit.summary}
        </p>
      </div>

      {/* Recommendations */}
      <div className="mt-10 border border-black p-8">

        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
          OPTIMIZATION RECOMMENDATIONS
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {audit.recommendations?.map(
            (item: any, index: number) => (
              <div
                key={index}
                className="border border-black p-6"
              >

                <div className="flex items-center justify-between">

                  <h4 className="bebas text-3xl tracking-[0.08em]">
                    {item.tool}
                  </h4>

                  <span className="text-green-600">
                    {item.save}
                  </span>
                </div>

                <p className="mt-4 text-gray-700">
                  {item.action}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
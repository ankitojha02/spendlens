"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function AuditPage() {
  const router = useRouter();
  const [tool, setTool] = useState("ChatGPT");
  const [plan, setPlan] = useState("Pro");
  const [spend, setSpend] = useState("");
  const [seats, setSeats] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const generateAudit = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://spendlens-frdn.onrender.com/api/audit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tools: [
              {
                tool,
                plan,
                spend,
                seats,
              },
            ],
          }),
        },
      );

      const data = await response.json();

      setResult(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f1eb] text-black">
      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-black/10 px-4 py-4 sm:px-6 lg:px-10">
        <div className="bebas text-2xl tracking-[0.2em] sm:text-3xl">
          SPENDLENS
        </div>

        <button
          onClick={() => router.push("/")}
          className="border border-black px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-black hover:text-white sm:px-6 sm:text-sm"
        >
          Back
        </button>
      </nav>

      {/* Hero */}
      <section className="grid gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-20">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            AI Spend Audit
          </p>

          <h1 className="bebas mt-4 text-[4rem] leading-none tracking-[0.12em] sm:text-[6rem] lg:text-[8rem]">
            FIND
            <br />
            WASTE
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
            Analyze your AI subscriptions, compare pricing, and uncover hidden
            savings opportunities in seconds.
          </p>

          <div className="mt-10 flex gap-10">
            <div>
              <p className="bebas text-5xl">60s</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Audit Time
              </p>
            </div>

            <div>
              <p className="bebas text-5xl">$12k+</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Avg Savings
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[60vh] overflow-hidden lg:h-[85vh]">
          <Image
            src="/images/workspace.jpg"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-6 left-6">
            <p className="bebas text-5xl tracking-[0.15em] text-white sm:text-7xl">
              AUDIT
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white">
              AI Cost Intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="border-t border-black/10 px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            Audit Configuration
          </p>

          <h2 className="bebas mt-4 text-[3rem] tracking-[0.12em] sm:text-[5rem]">
            YOUR STACK
          </h2>
        </div>

        {/* Form */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Tool */}
          <div>
            <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-gray-500">
              AI Tool
            </label>

            <select
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="w-full border border-black bg-transparent px-5 py-4 text-sm outline-none"
            >
              <option>ChatGPT</option>
              <option>Claude</option>
              <option>Cursor</option>
              <option>GitHub Copilot</option>
            </select>
          </div>

          {/* Plan */}
          <div>
            <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-gray-500">
              Current Plan
            </label>

            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="w-full border border-black bg-transparent px-5 py-4 text-sm outline-none"
            >
              <option>Pro</option>
              <option>Team</option>
              <option>Enterprise</option>
            </select>
          </div>

          {/* Spend */}
          <div>
            <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-gray-500">
              Monthly Spend
            </label>

            <input
              type="number"
              placeholder="$200"
              value={spend}
              onChange={(e) => setSpend(e.target.value)}
              className="w-full border border-black bg-transparent px-5 py-4 text-sm outline-none"
            />
          </div>

          {/* Seats */}
          <div>
            <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-gray-500">
              Team Seats
            </label>

            <input
              type="number"
              placeholder="5"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="w-full border border-black bg-transparent px-5 py-4 text-sm outline-none"
            />
          </div>
        </div>

        <button
          onClick={generateAudit}
          disabled={loading}
          className="mt-10 border border-black px-8 py-4 text-xs uppercase tracking-[0.25em] transition hover:bg-black hover:text-white disabled:opacity-50 sm:text-sm"
        >
          {loading ? "Generating..." : "Generate Audit"}
        </button>

       {result && (
  <div className="mt-16">

    {/* Top Stats */}
    <div className="grid gap-6 lg:grid-cols-4">

      {/* Current Cost */}
      <div className="border border-black p-6">

        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Current Cost
        </p>

        <h3 className="bebas mt-4 text-6xl">
          ${result.currentCost}
        </h3>
      </div>

      {/* Savings */}
      <div className="border border-black p-6">

        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Potential Savings
        </p>

        <h3 className="bebas mt-4 text-6xl text-green-600">
          ${result.savings}
        </h3>
      </div>

      {/* Annual Waste */}
      <div className="border border-black p-6">

        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Annual Waste
        </p>

        <h3 className="bebas mt-4 text-6xl text-red-500">
          ${result.annualWaste}
        </h3>
      </div>

      {/* Score */}
      <div className="border border-black p-6">

        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Efficiency Score
        </p>

        <h3 className="bebas mt-4 text-6xl">
          {result.efficiencyScore}
        </h3>
      </div>
    </div>

    {/* Recommendations */}
    <div className="mt-10 border border-black p-8">

      <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
        Optimization Recommendations
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        {result.recommendations.length > 0 ? (
          result.recommendations.map(
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
          )
        ) : (
          <div className="border border-black p-6">

            <p className="text-lg">
              No major optimization opportunities found.
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
)}
      </section>
    </main>
  );
}

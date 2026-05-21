"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AuditPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 text-white lg:px-16">

      {/* Blur Orbs */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            SpendLens
          </h1>
        </div>

        <Button className="rounded-full bg-white text-black hover:bg-gray-200">
          Run Audit
        </Button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto mt-24 max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">

            <Sparkles className="h-4 w-4 text-violet-400" />

            <span className="text-sm text-gray-300">
              AI Cost Optimization Platform
            </span>
          </div>

          <h1 className="mx-auto max-w-5xl text-6xl font-semibold leading-tight tracking-tight lg:text-8xl">

            Reduce Your
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              {" "}AI Spend
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">

            Discover hidden savings across ChatGPT, Claude, Cursor,
            Copilot, and AI infrastructure tools in under 60 seconds.

          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button
              size="lg"
              className="h-14 rounded-full bg-white px-8 text-black hover:bg-gray-200"
            >
              Start Free Audit

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-white/10 bg-white/5 px-8 text-white backdrop-blur-xl hover:bg-white hover:text-black"
            >
              View Example Report
            </Button>
          </div>
        </motion.div>

        {/* Main Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative mt-24"
        >

          <Card className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">

            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">

              {/* Left */}
              <div>

                <div className="mb-8">

                  <h2 className="text-2xl font-semibold">
                    AI Stack Overview
                  </h2>

                  <p className="mt-2 text-gray-400">
                    Current monthly infrastructure costs
                  </p>
                </div>

                <div className="space-y-4">

                  {[
                    {
                      tool: "ChatGPT Team",
                      price: "$240/mo",
                      save: "$90 saved",
                    },
                    {
                      tool: "Cursor Business",
                      price: "$120/mo",
                      save: "$40 saved",
                    },
                    {
                      tool: "Claude Max",
                      price: "$180/mo",
                      save: "$75 saved",
                    },
                  ].map((item) => (

                    <div
                      key={item.tool}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5"
                    >

                      <div>
                        <h3 className="font-medium">
                          {item.tool}
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
                          Current spend: {item.price}
                        </p>
                      </div>

                      <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
                        {item.save}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-8">

                <div>

                  <div className="flex items-center gap-3">

                    <div className="rounded-2xl bg-white/10 p-3">
                      <TrendingUp className="h-6 w-6 text-violet-400" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">
                        Estimated Savings
                      </p>

                      <h2 className="text-5xl font-bold">
                        $205
                      </h2>
                    </div>
                  </div>

                  <p className="mt-8 text-lg leading-8 text-gray-300">

                    Your current AI tooling stack appears overprovisioned
                    for your team size and usage patterns.

                  </p>
                </div>

                <Button className="mt-10 h-14 rounded-2xl bg-white text-black hover:bg-gray-200">
                  Generate Full Audit
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
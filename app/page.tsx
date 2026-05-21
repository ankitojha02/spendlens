import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-black">

      {/* Navbar */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-white/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">

        <div className="bebas text-2xl tracking-[0.18em] sm:text-3xl lg:text-4xl">
          SPENDLENS
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
          <a href="#">AUDIT</a>
          <a href="#">SAVINGS</a>
          <a href="#">PRICING</a>
          <a href="#">ABOUT</a>
        </div>

        <button className="border border-black px-3 py-2 text-xs transition hover:bg-black hover:text-white sm:px-5 sm:text-sm">
          RUN AUDIT
        </button>
      </nav>

      {/* Hero Grid */}
      <section className="flex min-h-screen snap-x snap-mandatory overflow-x-auto pt-16 lg:grid lg:grid-cols-3 lg:overflow-visible">


        {/* LEFT */}
        <div className="relative h-[85vh] min-w-full snap-center sm:h-[90vh] lg:min-w-0 lg:h-screen">

          <Image
            src="/images/hero-1.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-6 left-4 sm:bottom-10 sm:left-6 lg:left-10">

            <p className="bebas text-[3.5rem] leading-none tracking-[0.12em] text-white sm:text-[5rem] md:text-[6rem] lg:text-[8rem]">
              REDUCE
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white sm:text-xs lg:text-sm">
              Optimize AI Infrastructure
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div className="relative h-[85vh] min-w-full snap-center sm:h-[90vh] lg:min-w-0 lg:h-screen">

          <Image
            src="/images/hero-2.jpg"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center">

            <h1 className="bebas text-[4rem] leading-none tracking-[0.18em] text-white sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
              AI
            </h1>

            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white sm:text-xs lg:text-sm">
              Spend Intelligence
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-[85vh] min-w-full snap-center sm:h-[90vh] lg:min-w-0 lg:h-screen">

          <Image
            src="/images/hero-3.jpg"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-6 right-4 text-right sm:bottom-10 sm:right-6 lg:right-10">

            <p className="bebas text-[3.5rem] leading-none tracking-[0.12em] text-white sm:text-[5rem] md:text-[6rem] lg:text-[8rem]">
              COSTS
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white sm:text-xs lg:text-sm">
              Discover Hidden Savings
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="px-4 py-20 sm:px-6 lg:px-20 lg:py-32">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
              AI Infrastructure
            </p>

            <h2 className="bebas mt-4 text-[4rem] leading-none tracking-[0.12em] sm:text-[6rem] md:text-[7rem] lg:mt-6 lg:text-[9rem]">
              SAVE
              <br />
              MORE
            </h2>
          </div>

          <div className="flex flex-col justify-center">

            <p className="max-w-2xl text-lg leading-relaxed text-gray-700 sm:text-xl lg:text-2xl">

              Most startups overspend on AI tooling without realizing it.
              SpendLens analyzes your subscriptions, usage patterns,
              and infrastructure costs to uncover hidden savings.

            </p>

            <button className="mt-8 w-fit border border-black px-6 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-black hover:text-white sm:px-8 sm:py-4 sm:text-sm">
              Explore Audits
            </button>
          </div>
        </div>
      </section>

      {/* Full Image Section */}
      <section className="relative h-[80vh] sm:h-screen">

        <Image
          src="/images/money-1.jpg"
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-4 right-4 sm:bottom-16 sm:left-8 lg:bottom-20 lg:left-20">

          <p className="text-[10px] uppercase tracking-[0.3em] text-white sm:text-sm">
            Annual AI Waste
          </p>

          <h2 className="bebas mt-4 text-[4rem] leading-none tracking-[0.12em] text-white sm:text-[6rem] md:text-[8rem] lg:mt-5 lg:text-[12rem]">
            $18,240
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base lg:text-lg">

            The average startup wastes thousands yearly
            on overprovisioned AI subscriptions.

          </p>
        </div>
      </section>
    </main>
  );
}
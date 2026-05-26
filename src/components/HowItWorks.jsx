function HowItWorks() {
  return (
    <section id="platform" className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium text-indigo-400">
            How It Works
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Simple workflow for technical interviews
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Intervuex helps developers practice interviews in a professional and collaborative environment.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Step 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">📝</div>

            <h3 className="text-xl font-semibold">
              Create Interview
            </h3>

            <p className="mt-3 text-slate-400">
              Set up a coding interview room with your preferred DSA questions and environment.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">💻</div>

            <h3 className="text-xl font-semibold">
              Collaborate Live
            </h3>

            <p className="mt-3 text-slate-400">
              Conduct interviews with real-time code sharing, video communication, and chat.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">🤖</div>

            <h3 className="text-xl font-semibold">
              Get AI Feedback
            </h3>

            <p className="mt-3 text-slate-400">
              Receive AI-generated insights and suggestions to improve coding performance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
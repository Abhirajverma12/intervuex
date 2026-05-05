function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[400px] w-[400px] bg-indigo-600/30 blur-3xl rounded-full"></div>
      </div>

      <div className="mb-5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
        🚀 Introducing Intervuex
      </div>

      <h1 className="max-w-5xl text-5xl md:text-7xl font-bold leading-tight">
        The Professional Way to{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Interview Developers.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-400">
        Practice coding interviews, collaborate in real-time, and get AI-powered feedback inside a modern developer workspace.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="rounded-xl bg-indigo-600 px-6 py-3 font-medium hover:bg-indigo-500">
          Get Started
        </button>

        <button className="rounded-xl border border-slate-700 px-6 py-3 font-medium hover:bg-slate-900">
          View Features
        </button>
      </div>

      {/* Code Preview Card */}
      <div className="mt-14 w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl">
        <div className="rounded-xl bg-slate-900 p-6 text-left">
          <div className="mb-4 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          <pre className="text-sm text-slate-300 whitespace-pre-wrap">
{`function interviewReady() {
  return "Practice. Code. Get Hired.";
}`}
          </pre>
        </div>
      </div>

    </section>
  );
}

export default Hero;
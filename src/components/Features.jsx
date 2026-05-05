function Features() {
  return (
    <section className="px-6 py-24 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium text-indigo-400">
            Platform Features
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Everything you need for technical interviews
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Intervuex brings coding practice, collaboration, and AI feedback
            into one professional workspace.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:scale-105 hover:border-indigo-500/40 hover:bg-white/10">
            <h3 className="text-xl font-semibold text-indigo-400">
              Real-time Collaboration
            </h3>

            <p className="mt-3 text-slate-400">
              Conduct live coding interviews with video, chat, and shared
              editor.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:scale-105 hover:border-indigo-500/40 hover:bg-white/10">
            <h3 className="text-xl font-semibold text-indigo-400">
              In-Browser IDE
            </h3>

            <p className="mt-3 text-slate-400">
              Write and execute code using a powerful Monaco-based editor.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:scale-105 hover:border-indigo-500/40 hover:bg-white/10">
            <h3 className="text-xl font-semibold text-indigo-400">
              AI Feedback
            </h3>

            <p className="mt-3 text-slate-400">
              Get intelligent suggestions, code reviews, and performance
              insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
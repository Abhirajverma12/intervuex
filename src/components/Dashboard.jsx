function Dashboard() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-medium text-indigo-400">
            Dashboard Preview
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Manage your interview practice
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Track sessions, review performance, and quickly start new coding interviews.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Total Interviews</p>
            <h3 className="mt-3 text-4xl font-bold">24</h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Practice Hours</p>
            <h3 className="mt-3 text-4xl font-bold">18h</h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">AI Feedback Score</p>
            <h3 className="mt-3 text-4xl font-bold">86%</h3>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Recent Interview Sessions</h3>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4">
              <span>Array & Strings Mock Interview</span>
              <span className="text-sm text-green-400">Completed</span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4">
              <span>Dynamic Programming Practice</span>
              <span className="text-sm text-yellow-400">In Progress</span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4">
              <span>System Design Basics</span>
              <span className="text-sm text-blue-400">Scheduled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
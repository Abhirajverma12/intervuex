function Signup() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold">Create your account</h2>

          <p className="mt-2 text-slate-400">
            Start practicing technical interviews with Intervuex.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm text-slate-300">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-medium hover:bg-indigo-500"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <span className="cursor-pointer text-indigo-400 hover:text-indigo-300">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
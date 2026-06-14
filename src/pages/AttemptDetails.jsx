import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function AttemptDetails() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const index = Number(searchParams.get("index") || 0);

  const storageKey = user
  ? `interviewResults_${user.id}`
  : null;

  const interviewResults =
    user && storageKey
      ? JSON.parse(localStorage.getItem(storageKey) || "[]")
      : [];

  const attempt = interviewResults[index];
  const handleDelete = () => {
  if (!user || !storageKey) return;

  const updatedResults = interviewResults.filter(
    (_, i) => i !== index
  );

  localStorage.setItem(
    storageKey,
    JSON.stringify(updatedResults)
  );

  navigate("/dashboard");
};

  if (!attempt) {
    return (
      <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            ← Back to Dashboard
          </Link>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h1 className="text-3xl font-bold">Attempt not found</h1>
            <p className="mt-3 text-slate-400">
              This attempt is not available. Please go back to dashboard.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/dashboard"
          className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
        >
          ← Back to Dashboard
        </Link>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium text-indigo-400">
            Attempt Details
          </p>

          <h1 className="mt-3 text-4xl font-bold">{attempt.title}</h1>

          <p className="mt-4 text-slate-400">
            Review your interview score, language, runtime, memory, and
            feedback.
          </p>

          <div className="mt-6">
            <button
              onClick={handleDelete}
              className="rounded-xl bg-red-600 px-5 py-3 text-sm font-medium hover:bg-red-500"
            >
              Delete Attempt
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-sm text-slate-400">Category</p>
              <p className="mt-1 text-lg font-semibold">{attempt.category}</p>
            </div>

            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-sm text-slate-400">Language</p>
              <p className="mt-1 text-lg font-semibold">{attempt.language}</p>
            </div>

            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-sm text-slate-400">Score</p>
              <p className="mt-1 text-lg font-semibold text-green-400">
                {attempt.score}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-sm text-slate-400">Status</p>
              <p className="mt-1 text-lg font-semibold text-green-400">
                {attempt.status}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-sm text-slate-400">Runtime</p>
              <p className="mt-1 text-lg font-semibold">{attempt.runtime}</p>
            </div>

            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-sm text-slate-400">Memory</p>
              <p className="mt-1 text-lg font-semibold">{attempt.memory}</p>
            </div>

            <div className="rounded-xl bg-slate-900 p-4 md:col-span-2">
              <p className="text-sm text-slate-400">Date</p>
              <p className="mt-1 text-lg font-semibold">{attempt.date}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-purple-300">
              AI Feedback Summary
            </h2>

            <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
              Rating 8.5/10
            </span>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-green-400">Strengths</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>✓ Good understanding of the problem.</li>
                <li>✓ Solution approach is clear.</li>
                <li>✓ Submission completed successfully.</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-yellow-400">
                Areas to Improve
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>⚠ Explain edge cases better.</li>
                <li>⚠ Mention time and space complexity.</li>
                <li>⚠ Improve final explanation structure.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttemptDetails;
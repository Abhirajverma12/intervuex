import { useState } from "react";
import { Link } from "react-router-dom";

const defaultInterviewHistory = [
  {
    title: "Two Sum Mock Interview",
    category: "DSA",
    language: "JavaScript",
    score: "100%",
    status: "Completed",
    date: "Today",
  },
  {
    title: "Array & Strings Practice",
    category: "DSA",
    language: "C++",
    score: "86%",
    status: "Completed",
    date: "Yesterday",
  },
  {
    title: "Dynamic Programming Round",
    category: "DSA",
    language: "Java",
    score: "Pending",
    status: "In Progress",
    date: "2 days ago",
  },
];

function Dashboard() {
  const [interviewHistory] = useState(() => {
    const savedResults = JSON.parse(
      localStorage.getItem("interviewResults") || "[]"
    );

    return savedResults.length > 0 ? savedResults : defaultInterviewHistory;
  });

  const completedInterviews = interviewHistory.filter(
    (item) => item.status === "Completed"
  );

  const averageScore =
    completedInterviews.length > 0
      ? Math.round(
          completedInterviews.reduce(
            (sum, item) =>
              sum + parseInt(item.score?.replace("%", "") || "0"),
            0
          ) / completedInterviews.length
        )
      : 0;

  const practiceHours = (interviewHistory.length * 0.75).toFixed(1);

  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-indigo-400">
              Dashboard Preview
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Manage your interview practice
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
              Track sessions, review performance, and quickly start new coding
              interviews.
            </p>
          </div>

          <Link
            to="/interview-setup"
            className="rounded-xl bg-indigo-600 px-5 py-3 text-center text-sm font-medium hover:bg-indigo-500"
          >
            Start New Interview
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Total Interviews</p>
            <h3 className="mt-3 text-4xl font-bold">
              {interviewHistory.length}
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Practice Hours</p>
            <h3 className="mt-3 text-4xl font-bold">{practiceHours}h</h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Avg Score</p>
            <h3 className="mt-3 text-4xl font-bold">{averageScore}%</h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Problems Solved</p>
            <h3 className="mt-3 text-4xl font-bold">
              {completedInterviews.length}
            </h3>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Interview History</h3>
              <span className="text-sm text-slate-400">Saved attempts</span>
            </div>

            <div className="mt-6 space-y-4">
              {interviewHistory.map((item, index) => (
                <Link
                    to={`/attempt-details?index=${index}`}
                    key={index}
                    className="grid gap-4 rounded-xl bg-slate-900 p-4 transition hover:bg-slate-800 md:grid-cols-6 md:items-center"
                >
                  <div className="md:col-span-2">
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.date}</p>
                  </div>

                  <p className="text-sm text-slate-300">
                    {item.category || "DSA"}
                  </p>

                  <p className="text-sm text-slate-300">{item.language}</p>

                  <p
                    className={`text-sm font-medium ${
                      item.status === "Completed"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </p>

                  <p className="text-sm font-semibold text-indigo-400">
                    {item.score}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Focus Areas</h3>

            <div className="mt-6 space-y-5">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Arrays</span>
                  <span className="text-green-400">Strong</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[90%] rounded-full bg-green-500"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Dynamic Programming</span>
                  <span className="text-yellow-400">Improve</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[55%] rounded-full bg-yellow-500"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">System Design</span>
                  <span className="text-blue-400">Learning</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[40%] rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
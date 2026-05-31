import { Link } from "react-router-dom";

const categories = [
  {
    title: "DSA",
    value: "dsa",
    description: "Practice coding interview problems and algorithms.",
  },
  {
    title: "Frontend",
    value: "frontend",
    description: "React, JavaScript, UI and frontend interview rounds.",
  },
  {
    title: "Backend",
    value: "backend",
    description: "APIs, databases, authentication and server-side concepts.",
  },
  {
    title: "System Design",
    value: "systemdesign",
    description: "Scalable systems, architecture and design interviews.",
  },
];

function InterviewSetup() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-medium text-indigo-400">
            Start Interview
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Choose Interview Category
          </h1>

          <p className="mt-4 text-slate-400">
            Select the type of interview you want to practice today.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.value}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-2xl font-semibold">{category.title}</h2>

              <p className="mt-3 text-slate-400">{category.description}</p>

              <Link
                to={`/interview-room?category=${category.value}`}
                className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium hover:bg-indigo-500"
              >
                Start {category.title} Interview
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InterviewSetup;
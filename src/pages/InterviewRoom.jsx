import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { problems } from "../data/problems";

const codeSnippets = {
  javascript: `function solve() {
  // Write your solution here
  
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

void solve() {
    // Write your solution here
}`,
  java: `class Solution {
    public void solve() {
        // Write your solution here
    }
}`,
  python: `def solve():
    # Write your solution here
    pass`,
};

const feedbackTemplates = {
  dsa: {
    strengths: [
      "Good problem understanding.",
      "Correct approach for the given test case.",
      "Solution structure is simple and readable.",
    ],
    improvements: [
      "Add edge case handling for empty inputs.",
      "Mention time and space complexity clearly.",
      "Try explaining why your approach works.",
    ],
    rating: "8.5/10",
  },
  frontend: {
    strengths: [
      "Clear UI thinking.",
      "Good understanding of component-based structure.",
      "Approach is suitable for a frontend interview task.",
    ],
    improvements: [
      "Mention state management more clearly.",
      "Think about accessibility and responsive behavior.",
      "Explain how you would test the component.",
    ],
    rating: "8.2/10",
  },
  backend: {
    strengths: [
      "Good API design direction.",
      "Understands request-response flow.",
      "Authentication flow is logically structured.",
    ],
    improvements: [
      "Add validation and error handling details.",
      "Mention password hashing and token expiry.",
      "Think about rate limiting and security cases.",
    ],
    rating: "8.4/10",
  },
  systemdesign: {
    strengths: [
      "Good high-level system understanding.",
      "Identified core service responsibility clearly.",
      "Approach is scalable for a basic design discussion.",
    ],
    improvements: [
      "Add database schema details.",
      "Discuss caching and load balancing.",
      "Mention trade-offs and bottlenecks.",
    ],
    rating: "8.0/10",
  },
};

function InterviewRoom() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "dsa";
  const questionList = problems[category] || problems.dsa;

  const [problem] = useState(() => {
  const randomIndex = Math.floor(Math.random() * questionList.length);
  return questionList[randomIndex];
});
  const feedback = feedbackTemplates[category] || feedbackTemplates.dsa;

  const [language, setLanguage] = useState("javascript");
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("Run your code to see output here.");
  const [stats, setStats] = useState(null);
  const [submission, setSubmission] = useState(null);
  const [aiFeedback, setAiFeedback] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const createResult = () => ({
    title: problem.title,
    category: category.toUpperCase(),
    language: language.toUpperCase(),
    score: "100%",
    runtime: "52 ms",
    memory: "42 MB",
    status: "Completed",
    date: new Date().toLocaleDateString(),
  });

  const saveResultToStorage = (result) => {
    const previousResults = JSON.parse(
      localStorage.getItem("interviewResults") || "[]"
    );

    localStorage.setItem(
      "interviewResults",
      JSON.stringify([result, ...previousResults])
    );
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setStats(null);
    setSubmission(null);
    setAiFeedback(null);
    setOutput("Running test cases...");

    setTimeout(() => {
      setIsRunning(false);

      setOutput(`Test Case 1 Passed ✅
Problem: ${problem.title}
Expected Output: ${problem.example}
Your Output: Mock output matched successfully`);

      const result = createResult();

      setStats({
        testCases: "1/1",
        runtime: result.runtime,
        memory: result.memory,
        score: result.score,
      });

      saveResultToStorage(result);
    }, 1200);
  };

  const handleSubmit = () => {
    const result = createResult();

    setStats({
      testCases: "1/1",
      runtime: result.runtime,
      memory: result.memory,
      score: result.score,
    });

    setSubmission(result);
    setAiFeedback(feedback);

    setOutput(`Submission Successful ✅
Problem: ${result.title}
Category: ${result.category}
Language: ${result.language}
Score: ${result.score}`);

    saveResultToStorage(result);
  };

  return (
    <section className="min-h-screen bg-slate-950 px-6 pt-24 pb-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-indigo-400">
              Interview Room · {category.toUpperCase()}
            </p>

            <h1 className="mt-2 text-3xl font-bold">{problem.title}</h1>

            <p className="mt-2 text-slate-400">
              Solve the problem, collaborate live, and review your interview
              performance.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-right">
            <p className="text-sm text-slate-400">Time Remaining</p>
            <p className="mt-1 text-2xl font-bold text-indigo-400">
              {formatTime(timeLeft)}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-1">
            <h2 className="text-xl font-semibold">Problem Statement</h2>

            <p className="mt-4 text-slate-400">{problem.description}</p>

            <div className="mt-6 rounded-xl bg-slate-900 p-4">
              <p className="text-sm font-medium text-slate-300">Example</p>
              <p className="mt-2 text-sm text-slate-400">{problem.example}</p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-slate-300">Difficulty</p>
              <span
                className={`mt-2 inline-block rounded-full px-3 py-1 text-sm ${
                  problem.difficulty === "Easy"
                    ? "bg-green-500/10 text-green-400"
                    : problem.difficulty === "Medium"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {problem.difficulty}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold">Code Editor</h2>
                <p className="mt-1 text-sm text-slate-400">
                  {language.toUpperCase()} · Monaco Editor
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <select
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                    setOutput("Run your code to see output here.");
                    setStats(null);
                    setSubmission(null);
                    setAiFeedback(null);
                  }}
                  className="rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-sm text-white outline-none"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="cpp">C++</option>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                </select>

                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isRunning ? "Running..." : "Run Code"}
                </button>

                <button
                  onClick={handleSubmit}
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm hover:bg-indigo-500"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <Editor
                height="420px"
                language={language}
                value={codeSnippets[language]}
                theme="vs-dark"
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                }}
              />
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-slate-900 p-4">
              <p className="text-sm font-medium text-slate-300">Output</p>
              <pre className="mt-2 whitespace-pre-wrap text-sm text-slate-400">
                {output}
              </pre>
            </div>

            {stats && (
              <div className="mt-4 grid gap-4 rounded-xl border border-green-500/20 bg-green-500/5 p-4 md:grid-cols-4">
                <div>
                  <p className="text-xs text-slate-400">Test Cases</p>
                  <p className="mt-1 font-semibold text-green-400">
                    {stats.testCases}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Runtime</p>
                  <p className="mt-1 font-semibold text-white">
                    {stats.runtime}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Memory</p>
                  <p className="mt-1 font-semibold text-white">
                    {stats.memory}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Score</p>
                  <p className="mt-1 font-semibold text-green-400">
                    {stats.score}
                  </p>
                </div>
              </div>
            )}

            {submission && (
              <div className="mt-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4">
                <p className="text-sm font-semibold text-indigo-300">
                  Submission Summary
                </p>

                <div className="mt-3 grid gap-3 text-sm md:grid-cols-2">
                  <p className="text-slate-300">
                    Problem:{" "}
                    <span className="text-white">{submission.title}</span>
                  </p>

                  <p className="text-slate-300">
                    Category:{" "}
                    <span className="text-white">{submission.category}</span>
                  </p>

                  <p className="text-slate-300">
                    Language:{" "}
                    <span className="text-white">{submission.language}</span>
                  </p>

                  <p className="text-slate-300">
                    Score:{" "}
                    <span className="text-green-400">{submission.score}</span>
                  </p>
                </div>
              </div>
            )}

            {aiFeedback && (
              <div className="mt-4 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-purple-300">
                    AI Feedback
                  </p>

                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                    Rating {aiFeedback.rating}
                  </span>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-green-400">
                      Strengths
                    </p>

                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {aiFeedback.strengths.map((item, index) => (
                        <li key={index}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-yellow-400">
                      Areas to Improve
                    </p>

                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {aiFeedback.improvements.map((item, index) => (
                        <li key={index}>⚠ {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-5 rounded-xl bg-slate-900 p-4 text-sm text-slate-300">
                  This is currently mock AI feedback. Later, this section can be
                  connected with Gemini, OpenAI, or Groq API for real feedback
                  generation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InterviewRoom;
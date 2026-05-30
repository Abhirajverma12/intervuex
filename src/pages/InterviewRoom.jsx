import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

const codeSnippets = {
  javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
}`,
  java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
    }
}`,
  python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
};

function InterviewRoom() {
  const [language, setLanguage] = useState("javascript");
  const [timeLeft, setTimeLeft] = useState(45 * 60);

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

  return (
    <section className="min-h-screen bg-slate-950 px-6 pt-24 pb-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-indigo-400">
              Interview Room
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Frontend Developer Mock Interview
            </h1>

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

            <p className="mt-4 text-slate-400">
              Given an array of integers and a target value, return the indices
              of two numbers that add up to the target.
            </p>

            <div className="mt-6 rounded-xl bg-slate-900 p-4">
              <p className="text-sm text-slate-300">
                Example: nums = [2, 7, 11, 15], target = 9
              </p>
              <p className="mt-2 text-sm text-slate-300">Output: [0, 1]</p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-slate-300">Difficulty</p>
              <span className="mt-2 inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                Easy
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
                  onChange={(e) => setLanguage(e.target.value)}
                  className="rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-sm text-white outline-none"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="cpp">C++</option>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                </select>

                <button className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10">
                  Run Code
                </button>
                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm hover:bg-indigo-500">
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
              <p className="mt-2 text-sm text-slate-500">
                Run your code to see output here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InterviewRoom;
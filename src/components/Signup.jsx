import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <SignUp
            routing="path"
            path="/signup"
            signInUrl="/login"
            fallbackRedirectUrl="/dashboard"
          />
        </div>
      </div>
    </section>
  );
}

export default Signup;
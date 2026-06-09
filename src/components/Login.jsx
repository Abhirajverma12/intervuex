import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <SignIn
            routing="path"
            path="/login"
            signUpUrl="/signup"
            afterSignInUrl="/dashboard"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
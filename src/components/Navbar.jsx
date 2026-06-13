import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const goToTop = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" onClick={goToTop} className="text-xl font-bold">
          ⚡ <span className="text-indigo-500">Intervuex</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="/#platform" className="hover:text-white">
            Platform
          </a>

          <a href="/#features" className="hover:text-white">
            Features
          </a>

          <Link to="/dashboard" className="hover:text-white">
            Dashboard
          </Link>

          <Link to="/interview-setup" className="hover:text-white">
            Interview Setup
          </Link>

          <SignedOut>
            <Link to="/login" className="hover:text-white">
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-xl border border-indigo-500/40 px-4 py-2 text-indigo-300 hover:bg-indigo-500/10"
            >
              Sign Up
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/interview-setup"
            className="hidden rounded-xl bg-indigo-600 px-5 py-2 text-sm font-medium hover:bg-indigo-500 md:block"
          >
            Start Interview
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5 text-sm text-slate-300">
            <a
              href="/#platform"
              onClick={closeMenu}
              className="hover:text-white"
            >
              Platform
            </a>

            <a
              href="/#features"
              onClick={closeMenu}
              className="hover:text-white"
            >
              Features
            </a>

            <Link
              to="/dashboard"
              onClick={closeMenu}
              className="hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              to="/interview-setup"
              onClick={closeMenu}
              className="hover:text-white"
            >
              Interview Setup
            </Link>

            <SignedOut>
              <Link
                to="/login"
                onClick={closeMenu}
                className="hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={closeMenu}
                className="rounded-xl border border-indigo-500/40 px-5 py-3 text-center text-sm font-medium text-indigo-300 hover:bg-indigo-500/10"
              >
                Sign Up
              </Link>
            </SignedOut>

            <SignedIn>
              <div className="flex justify-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>

            <Link
              to="/interview-setup"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-indigo-600 px-5 py-3 text-center text-sm font-medium hover:bg-indigo-500"
            >
              Start Interview
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
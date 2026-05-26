import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">
          ⚡ <span className="text-indigo-500">Intervuex</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#" className="hover:text-white">Platform</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Security</a>
          <a href="#" className="hover:text-white">About</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden rounded-xl bg-indigo-600 px-5 py-2 text-sm font-medium hover:bg-indigo-500 md:block">
            Enter App
          </button>

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
            <a href="#" className="hover:text-white">Platform</a>
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">About</a>

            <button className="mt-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium hover:bg-indigo-500">
              Enter App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
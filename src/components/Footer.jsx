function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 text-slate-400">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-lg font-semibold text-white">
          ⚡ Intervuex
        </div>

        <div className="flex gap-6 text-sm">
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>

        <div className="text-sm">
          © {new Date().getFullYear()} Intervuex. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
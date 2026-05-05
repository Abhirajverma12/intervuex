function Navbar() {
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

        <button className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-medium hover:bg-indigo-500">
          Enter App
        </button>
      </div>
    </nav>
  );
}

export default Navbar;




// function Navbar() {
//   return (
//     <div className="w-full flex items-center justify-between px-8 py-4 bg-slate-900 text-white">
//       <div className="text-xl font-bold text-indigo-500">
//         ⚡ Intervuex
//       </div>

//       <div className="flex gap-6 text-sm">
//         <span className="cursor-pointer hover:text-indigo-400">Platform</span>
//         <span className="cursor-pointer hover:text-indigo-400">Features</span>
//         <span className="cursor-pointer hover:text-indigo-400">Security</span>
//         <span className="cursor-pointer hover:text-indigo-400">About</span>
//       </div>

//       <button className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500">
//         Enter App
//       </button>
//     </div>
//   );
// }

// export default Navbar;
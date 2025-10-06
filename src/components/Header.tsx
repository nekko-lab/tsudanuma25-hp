export default function Header() {
  return (

      <header>
      <div className="max-w-8xl flex justify-end">
        <nav className="hidden md:flex space-x-4 bg-orange-200 px-4 py-2 rounded-xl shadow-lg">
         <a href="#home" className="text-teal-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-sky-100 px-4 py-2 rounded-lg font-bold text-xl">
           ホーム
         </a>
         <a href="#schedule" className="text-teal-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-sky-100 px-4 py-2 rounded-lg font-bold text-xl">
           スケジュール
         </a>
         <a href="#character" className="text-teal-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-sky-100 px-4 py-2 rounded-lg font-bold text-xl">
           出演キャラクター
         </a>
         <a href="#about" className="text-teal-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-sky-100 px-4 py-2 rounded-lg font-bold text-xl">
           About
         </a>
        </nav>
            
            <button className="md:hidden text-cyan-300 hover:text-cyan-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
        </div>
      </header>
  );
}
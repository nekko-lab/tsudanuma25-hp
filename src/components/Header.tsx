import React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
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
        {/* モバイル対応版を作ります */}

        <button className="md:hidden text-white" id="menu-button" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          
        </button>
        </div>
        {isMenuOpen &&(
          <div className="md:hidden mt-2">
          <nav className="flex flex-col space-y-2 bg-orange-200 px-4 py-2 rounded-xl shadow-lg">
            <a 
              href="#home" 
              className="text-teal-500 transition-all duration-300 hover:bg-sky-100 px-4 py-2 rounded-lg font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </a>
            <a 
              href="#schedule" 
              className="text-teal-500 transition-all duration-300 hover:bg-sky-100 px-4 py-2 rounded-lg font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              スケジュール
            </a>
            <a 
              href="#character" 
              className="text-teal-500 transition-all duration-300 hover:bg-sky-100 px-4 py-2 rounded-lg font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              出演キャラクター
            </a>
            <a 
              href="#about" 
              className="text-teal-500 transition-all duration-300 hover:bg-sky-100 px-4 py-2 rounded-lg font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </nav>
        </div>
        )}
      </header>
  );
}
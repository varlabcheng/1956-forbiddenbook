import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

// 導入 Logo 圖片
import logo from './assets/logo.png'; 

// 導入頁面組件
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Making from './Pages/Making';
import Video from './Pages/Video';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        
        {/* 導覽列 */}
        <nav className="bg-[#0a0a0a]/95 backdrop-blur-md sticky top-0 z-100 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
            <div className="shrink-0">
              <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
                <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
                <span className="text-xl md:text-2xl font-bold tracking-tighter group-hover:text-orange-400 transition-all">
                  1956 · 不該看的書
                </span>
              </Link>
            </div>

            {/* 手機版按鈕 */}
            <button 
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
            <div className="hidden md:flex gap-10 text-base md:text-lg font-bold tracking-widest uppercase">
              <Link to="/Introduction" className="hover:text-orange-400 transition-colors opacity-95 hover:opacity-100">簡介</Link>
              <Link to="/Making" className="hover:text-orange-400 transition-colors opacity-95 hover:opacity-100">製作歷程</Link>
              <Link to="/Video" className="hover:text-orange-400 transition-colors opacity-95 hover:opacity-100">成果影片</Link>
            </div>
          </div>
          <div className={`
            md:hidden absolute top-20 left-0 w-full bg-[#0a0a0a]/98 backdrop-blur-lg border-b border-white/10
            overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
          `}>
            <div className="flex flex-col items-center py-8 gap-8 shadow-2xl font-bold">
              <Link to="/Introduction" onClick={closeMenu} className="text-xl tracking-widest hover:text-orange-400">簡介</Link>
              <Link to="/Making" onClick={closeMenu} className="text-xl tracking-widest hover:text-orange-400">製作歷程</Link>
              <Link to="/Video" onClick={closeMenu} className="text-xl tracking-widest hover:text-orange-400">成果影片</Link>
            </div>
          </div>
        </nav>

        {/* 路由出口 */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/Making" element={<Making />} />
            <Route path="/Video" element={<Video />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
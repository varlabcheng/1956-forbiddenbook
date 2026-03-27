import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import logo from './assets/logo.png'; 
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Making from './Pages/Making';
import Video from './Pages/Video';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] font-sans selection:bg-blue-500/30">
        
        {/* Navbar */}
        <nav className={`
          fixed top-0 left-0 w-full z-[100] border-b transition-all duration-700 ease-in-out
          ${isScrolled 
            ? 'h-16 bg-[#161b22]/40 backdrop-blur-2xl border-white/10 shadow-2xl' 
            : 'h-20 bg-[#161b22] border-transparent'}
        `}>
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            
            {/* 左側標題 */}
            <div className={`transition-all duration-700 origin-left flex items-center ${isScrolled ? 'scale-90 opacity-90' : 'scale-100'}`}>
              <Link 
                to="/" 
                className="flex items-center gap-3 px-3 py-1.5 rounded-md hover:bg-white/10 transition-all"
              >
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                <span className="text-xl font-bold tracking-tight text-[#f0f6fc]">
                  1956 · 不該看的書
                </span>
              </Link>
            </div>

            {/* 右側選單：
                - text-[15.5px]：字體放大一滴滴
                - font-bold：維持粗體感
            */}
            <div className={`hidden md:flex transition-all duration-700 origin-right items-center ${isScrolled ? 'gap-2 scale-[0.95]' : 'gap-4'}`}>
              {[
                { name: '簡介', path: '/Introduction' },
                { name: '製作歷程', path: '/Making' },
                { name: '成果影片', path: '/Video' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`px-4 py-2 text-[15.5px] font-bold tracking-wide rounded-md transition-all duration-300
                    ${isScrolled ? 'text-[#c9d1d9] hover:text-white hover:bg-white/10' : 'text-[#e6edf3] hover:bg-[#30363d]'}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* 佔位空間 */}
        <div className="h-20"></div>

        <main className="relative">
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
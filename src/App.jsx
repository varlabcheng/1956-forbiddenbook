import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import logo from './assets/logo.png'; 
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Making from './Pages/Making';
import Video from './Pages/Video';

// 建立一個處理點擊的組件
function NavItem({ item, setIsOpen }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(false); // 1. 立即關閉選單
    navigate(item.path); // 2. 強制跳轉路由
    window.scrollTo(0, 0); // 3. 回到頂部
  };

  return (
    <button 
      onClick={handleClick}
      // 手機版完全不使用 hover: 類別，改用 active: 類別
      className="w-full py-6 text-center text-3xl font-bold tracking-[0.3em] text-white/90 active:bg-white/10 active:scale-95 transition-all rounded-xl touch-none select-none"
    >
      {item.name}
    </button>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '簡介', path: '/Introduction' },
    { name: '製作歷程', path: '/Making' },
    { name: '成果影片', path: '/Video' }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] font-sans selection:bg-blue-500/30">
        
        {/* Navbar */}
        <nav className={`
          fixed top-0 left-0 w-full z-[100] border-b transition-all duration-700
          ${(isScrolled || isOpen) 
            ? 'h-16 bg-[#161b22]/30 backdrop-blur-2xl border-white/5 shadow-2xl' 
            : 'h-20 bg-transparent border-transparent'}
        `}>
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            
            <Link to="/" className={`flex items-center gap-3 z-[110] transition-transform duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`} onClick={() => setIsOpen(false)}>
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold tracking-tight text-[#f0f6fc]">1956 · 不該看的書</span>
            </Link>

            {/* 桌面版保持原樣 */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((item) => (
                <Link key={item.path} to={item.path} className="text-[15.5px] font-bold text-[#e6edf3]/80 hover:text-white transition-all py-2 px-1">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 手機漢堡 */}
            <button className="md:hidden z-[110] p-2 text-white outline-none touch-manipulation" onClick={() => setIsOpen(!isOpen)}>
              <div className="w-6 h-5 relative flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-full rotate-45 translate-y-2' : 'w-full'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-3/4'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-full -rotate-45 -translate-y-2' : 'w-1/2'}`}></span>
              </div>
            </button>
          </div>
        </nav>

        {/* 手機選單面版 */}
        <div className={`
          fixed inset-0 z-[90] bg-[#0d1117]/95 backdrop-blur-3xl transition-all duration-500 md:hidden flex items-center justify-center
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'}
        `}>
          <div className="flex flex-col items-center w-full px-10 gap-2">
            {navLinks.map((item) => (
              <NavItem key={item.path} item={item} setIsOpen={setIsOpen} />
            ))}
          </div>
        </div>

        <main className="relative pt-20">
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
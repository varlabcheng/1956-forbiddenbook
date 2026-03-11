//導入路由功能組件
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 導入頁面組件
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Making from './Pages/Making';
import Video from './Pages/Video';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white font-sans">
        {/* 導覽元件 */}
        <nav className="flex items-center justify-between px-10 py-5 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10 text-white">
  {/* 左側 */}
  <div className="shrink-0">
    <Link to="/" className="text-xl font-bold tracking-tighter hover:text-cyan-400 transition-all duration-300">
      1956 · 不該看的書
    </Link>
  </div>

  {/* 右側 */}
  <div className="flex gap-10 text-sm font-medium tracking-widest uppercase">
    <Link to="/Introduction" className="hover:text-cyan-400 transition-colors opacity-80 hover:opacity-100">簡介</Link>
    <Link to="/Making" className="hover:text-cyan-400 transition-colors opacity-80 hover:opacity-100">製作歷程</Link>
    <Link to="/Video" className="hover:text-cyan-400 transition-colors opacity-80 hover:opacity-100">成果影片</Link>
  </div>
</nav>

        {/* 路由出口 */}
        <main className="container mx-auto p-10">
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
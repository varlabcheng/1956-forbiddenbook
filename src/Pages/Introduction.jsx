import homeHero from '../assets/introduction-img-1.png'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Introduction() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
      
      {/* 1. 背景層：保持動態景深 */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out
          ${isHovered ? 'blur-md scale-110 opacity-60' : 'blur-0 scale-100 opacity-100'}`}
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80"></div>
      </div>

      {/* 2. 內容層 */}
      <div 
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-10"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* 標題縮小：改為 text-5xl，增加字距讓它看起來更優雅 */}
        <h1 className={`text-4xl md:text-5xl font-bold mb-12 tracking-[0.2em] transition-all duration-700 select-none
          ${isHovered 
            ? 'text-white opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
            : 'text-white/30'}`}
        >
          簡介
        </h1>

        {/* 內文：維持全清透與文字陰影 */}
        <div className={`max-w-4xl transition-all duration-700 delay-150 transform
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl tracking-[0.2em] font-light text-gray-100 leading-relaxed drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
            1956年，一段人倫悲劇由一本不該看的書開始，然而結局的真相，卻是無辜的人永不見天日。白色恐怖時期的臺灣留下多少悲傷與苦痛，本作透過虛擬實境，回到當天的時空，聆聽她們的心聲，體驗那段不被人們知曉的歷史故事。
          </p>
        </div>
          
        {/* 3. 按鈕 */}
        <div className={`mt-16 transition-all duration-700 delay-300 transform
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link to="/Making" className="inline-block cursor-pointer active:scale-95 transition-all">
            <button className="px-14 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer">
              製作歷程
            </button>
          </Link>
        </div>
      </div>

      {/* 邊角暗化 */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_50%,black_100%)] opacity-70"></div>
    </div>
  );
}
import homeHero from '../assets/introduction-img-1.png'; 
import { Link } from 'react-router-dom';

export default function Introduction() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 背景圖片層 */}
      <div 
         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
 
      {/* 內容層 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
          簡介
        </h1>
        <p className="text-xl md:text-2xl mb-8 tracking-widest font-light">
          1956年，一段人倫悲劇由一本不該看的書開始，然而結局的真相，卻是無辜的人永不見天日。白色恐怖時期的臺灣留下多少悲傷與苦痛，本作透過虛擬實境，回到當天的時空，聆聽她們的心聲，體驗那段不被人們知曉的歷史故事。
        </p>
         
        <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 shadow-xl">
          <Link to="/Making">
            製作歷程
          </Link>
        </button>
      </div>
    </div>
    );
}
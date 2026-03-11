// 導出Video函數組件
export default function Video() {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-6">
        <a 
          href="https://sites.google.com/view/khcheng/" 
          className="hover:text-blue-600 transition-colors" // 滑鼠懸停變色效果
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <h5 className="text-center text-lg font-medium">
            〔體驗請洽中興大學圖書資訊學研究所鄭琨鴻教授〕
          </h5>
        </a>
      </div>
      
      <div className="aspect-video w-full max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/yibKy5BBJQI" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  );
}
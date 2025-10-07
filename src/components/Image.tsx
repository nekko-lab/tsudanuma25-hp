export const AnimatedHero = ({ 
  mobileImg, 
  desktopImg, 
  alt, 
  title, 
  subtitle 
}: {
  mobileImg: string;
  desktopImg: string;
  alt: string;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden m-0 h-0">
      {/* スマホ・タブレット用画像 */}
      <img
        src={mobileImg}
        alt={alt}
        className="block lg:hidden w-full h-full object-contain object-center
                   animate-[zoom_20s_ease-in-out_infinite]
                   hover:scale-100 transition-transform duration-1000"
      />
      
      {/* PC用画像（4K対応） */}
      <img
        src={desktopImg}
        alt={alt}
        className="hidden lg:block w-full h-full object-contain object-top
                   animate-[zoom_20s_ease-in-out_infinite]
                   hover:scale-110 transition-transform duration-1000"
      />
     
      <div className="absolute inset-0 bg-white/40"></div>
     
      {/* タイトルテキスト */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 drop-shadow-2xl
                       animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-2xl md:text-8xl drop-shadow-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
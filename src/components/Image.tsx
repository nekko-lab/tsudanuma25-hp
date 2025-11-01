import { MouseMove } from "./hooks/MouseMove";
import { usePageAnimation } from "./hooks/PageAnimation";

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
  const delay = usePageAnimation(100);
  const { mouseposition, handleMouseMove, handleMouseLeave } = MouseMove(60);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden m-0 p-0 bg-transparent py-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* モバイル用画像 */}
      <img
        src={mobileImg}
        alt={alt}
        className={`block lg:hidden max-w-full max-h-full object-cover
                   transition-all duration-1000 ease-out
                   ${delay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        style={{
          transform: `translate(${mouseposition.x}px, ${mouseposition.y}px)`,
          transition: 'transform 0.3s ease-out, opacity 1s ease-out',
          maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
        }}
      />

      {/* デスクトップ用画像 - レスポンシブサイズ */}
      <img
        src={desktopImg}
        alt={alt}
        className={`hidden lg:block max-w-5xl xl:max-w-6xl 2xl:max-w-7xl max-h-full object-cover
                   transition-all duration-1000 ease-out
                   ${delay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        style={{
          transform: `translate(${mouseposition.x}px, ${mouseposition.y}px)`,
          transition: 'transform 0.3s ease-out, opacity 1s ease-out',
          maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
        }}
      />

      {/* ロゴを配置 - 上に移動 */}
      <div
        className={`absolute bottom-24 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 ease-out ${delay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        style={{ transitionDelay: '500ms' }}
      >
        <img
          src="/メインロゴ.PNG"
          alt="ロゴ"
          className="w-96 md:w-[600px] lg:w-[800px] xl:w-[1000px] h-auto"
        />
      </div>

      {/* タイトルテキスト */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-10 pointer-events-none">
        {title && (
          <h1 className="text-6xl md:text-8xl font-bold mb-8 drop-shadow-2xl animate-fade-in">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-2xl md:text-4xl drop-shadow-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
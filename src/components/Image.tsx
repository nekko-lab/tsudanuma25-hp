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
    // h-screenを削除して、画像の高さに合わせる
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden m-0 p-0 bg-transparent py-8 "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <img
        src={mobileImg}
        alt={alt}
        className={`block lg:hidden max-w-full max-h-full object-cover 
        transition-all duration-1000 ease-out ${delay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        style={{
          transform: `translate(${mouseposition.x}px,${mouseposition.y})`,
          transition: 'transform 0.3s ease-out, opacity 1s ease-out',
        }}
      />
      <img
        src={desktopImg}
        alt={alt}
        className={`hidden lg:block max-w-full max-h-full object-cover
                   transition-all duration-1000 ease-out
                   ${delay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        style={{
          transform: `translate(${mouseposition.x}px, ${mouseposition.y}px)`,
          transition: 'transform 0.3s ease-out, opacity 1s ease-out',
        }}
      />

      {/* タイトルテキスト */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-10">
        {title && (
          <h1 className="text-6xl md:text-8xl font-bold mb-8 drop-shadow-2xl
                         animate-fade-in">
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
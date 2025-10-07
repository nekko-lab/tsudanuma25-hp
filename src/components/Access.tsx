import { Title } from './items/Title';
import { usePageAnimation } from './hooks/PageAnimation';

export const Access = () => {
    const isLoaded = usePageAnimation();
  return (
    <section id="access" className="py-16 px-4 perspective-1000">
        <Title
        title='Venue'
        subtitle='開催場所'
        delay={isLoaded}
        />

        {/* コンテンツカード - 奥からズームイン */}
        <div
          className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 ease-out ${
            isLoaded
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-50'
          }`}
          style={{ 
            transitionDelay: '300ms',
            transformStyle: 'preserve-3d'
          }}
        >
          <p
            className={`text-2xl tracking-wide mb-4 transition-all duration-700 ease-out ${
              isLoaded
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-8 scale-90'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            千葉工業大学 津田沼キャンパス 6号館 1階 615教室
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div
              className={`w-full md:w-1/2 bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-all duration-1000 ease-out ${
                isLoaded
                  ? 'opacity-100 scale-100 translate-x-0'
                  : 'opacity-0 scale-75 -translate-x-12'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <img
                src="map.png"
                alt="会場案内マップ"
                className="w-full h-auto"
              />
            </div>

            <iframe
              className={`w-full md:w-1/2 h-[500px] rounded-lg shadow-lg transition-all duration-1000 ease-out ${
                isLoaded
                  ? 'opacity-100 scale-100 translate-x-0'
                  : 'opacity-0 scale-75 translate-x-12'
              }`}
              style={{ transitionDelay: '900ms' }}
              title="千葉工業大学のGoogle Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.479229660451!2d140.018525971287!3d35.689822914710305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602280271c38ab81%3A0x9b26ed71e15bb456!2z5Y2D6JGJ5bel5qWt5aSn5a2mIOa0peeUsOaymOOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1731421291588!5m2!1sja!2sjp"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
    </section>
  );
};
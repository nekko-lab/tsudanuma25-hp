import { useRef } from 'react';
import { useInView } from './hooks/UseView';

export const DJLiveLink = () => {
    const ref = useRef<HTMLElement>(null!);
    const isLoaded = useInView(ref);

    return (
        <section ref={ref} className="py-16 px-4 w-full">
            <div className="max-w-5xl mx-auto">
                <a
                    href="/dj-live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800
                        rounded-3xl p-12 shadow-2xl
                        transition-all duration-500 hover:scale-105 hover:shadow-blue-500/40
                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                        {/* 左側 */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="text-sm font-semibold mb-2 opacity-90">
                                🎧 SAME DAY EVENT
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-100">
                                DJ LIVE
                            </h2>
                            <p className="text-lg opacity-90 text-blue-100">
                                同日開催！音と光で盛り上がろう
                            </p>
                        </div>

                        {/* 右側 */}
                        <div className="flex-shrink-0">
                            <div
                                className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-xl
                                    transition-all duration-300 hover:bg-blue-50 hover:shadow-md"
                            >
                                詳細を見る →
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
};

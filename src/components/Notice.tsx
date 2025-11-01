import { useRef } from "react";
import { useInView } from "./hooks/UseView";
import { notice } from "./items/data";
import { Title } from "./items/Title";

export const Notice = () => {
    const ref = useRef<HTMLElement>(null!);
    const isLoaded = useInView(ref);
    return (
        <section ref={ref} id="notice" className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <Title title="Notice" subtitle="注意事項" delay={isLoaded} />

                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                    <ul className="space-y-4">
                        {notice.map((item, index) => (
                            <li
                                key={index}
                                className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                    }`}
                                style={{ transitionDelay: `${200 + index * 100}ms` }}
                            >
                                <div className="flex items-start gap-3">
                                    <span className="text-orange-500 text-xl flex-shrink-0">⚠️</span>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                                        {item.description && (
                                            <p className="text-gray-600">{item.description}</p>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
import { useRef } from "react";
import { useInView } from "./hooks/UseView";
import { Day1Schedule, Day2Schedule } from "./items/data";
import { Title } from "./items/Title";

export const TimeTable = () => {
    const ref = useRef<HTMLElement>(null!);
    const isLoaded = useInView(ref);

    return (
        <section ref={ref} className="py-20 px-6 w-full ">
            <Title
                title="TimeTable"
                subtitle="タイムテーブル"
                delay={isLoaded}
            />

            <div
                className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-10 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
            >
                {/* Day 1 */}
                <div className="bg-white border border-sky-100 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8">
                    <h3 className="text-3xl font-bold text-sky-600 mb-8 text-center tracking-wide">
                        Day 1
                    </h3>

                    {Day1Schedule.map((item, index) => (
                        <div
                            key={index}
                            className="mb-6 pb-6 border-b border-sky-100 last:border-none last:pb-0"
                        >
                            <div className="flex flex-wrap items-baseline gap-3 mb-2">
                                <div className="text-lg md:text-xl font-bold text-sky-600 flex-shrink-0 min-w-[90px]">
                                    {item.time}
                                </div>
                                <div className="text-lg md:text-xl font-semibold text-gray-800">
                                    {item.title}
                                </div>
                            </div>
                            {item.description && (
                                <div
                                    className="text-gray-600 text-sm md:text-base ml-[90px] leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Day 2 */}
                <div className="bg-white border border-pink-100 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8">
                    <h3 className="text-3xl font-bold text-pink-600 mb-8 text-center tracking-wide">
                        Day 2
                    </h3>

                    {Day2Schedule.map((item, index) => (
                        <div
                            key={index}
                            className="mb-6 pb-6 border-b border-pink-100 last:border-none last:pb-0"
                        >
                            <div className="flex flex-wrap items-baseline gap-3 mb-2">
                                <div className="text-lg md:text-xl font-bold text-pink-600 flex-shrink-0 min-w-[90px]">
                                    {item.time}
                                </div>
                                <div className="text-lg md:text-xl font-semibold text-gray-800">
                                    {item.title}
                                </div>
                            </div>
                            {item.description && (
                                <div
                                    className="text-gray-600 text-sm md:text-base ml-[90px] leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

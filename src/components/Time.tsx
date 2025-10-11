import { useRef } from "react";
import { useInView } from "./hooks/UseView";
import { Day1Schedule, Day2Schedule } from "./items/data";
import { Title } from "./items/Title";

export const TimeTable = () => {
    const ref = useRef<HTMLElement>(null!);
    const isLoaded = useInView(ref);

    return (
        <section ref={ref} className="py-16 px-4 w-full">
            <Title
                title="TimeTable"
                subtitle="タイムテーブル"
                delay={isLoaded}
            />
            <div className="max-w-[95%] mx-auto grid md:grid-cols-2 gap-8">
                {/*Day1 - 左側*/}
                <div className="bg-white rounded-3xl shadow-2xl p-6">
                    <h3 className="text-3xl font-bold text-teal-600 mb-6 text-center">
                        Day 1
                    </h3>
                    {Day1Schedule.map((item, index) => (
                        <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                            {/* time と title を横並び */}
                            <div className="flex items-baseline gap-3 mb-1">
                                <div className="text-xl font-bold text-teal-600 flex-shrink-0 min-w-[80px]">
                                    {item.time}
                                </div>
                                <div className="text-lg font-semibold text-gray-800">
                                    {item.title}
                                </div>
                            </div>
                            {/* description */}
                            <div className="text-gray-600 text-sm ml-[92px]">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>

                {/*Day2 - 右側*/}
                <div className="bg-white rounded-3xl shadow-2xl p-6">
                    <h3 className="text-3xl font-bold text-pink-600 mb-6 text-center">
                        Day 2
                    </h3>
                    {Day2Schedule.map((item, index) => (
                        <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                            {/* time と title を横並び */}
                            <div className="flex items-baseline gap-3 mb-1">
                                <div className="text-xl font-bold text-pink-600 flex-shrink-0 min-w-[80px]">
                                    {item.time}
                                </div>
                                <div className="text-lg font-semibold text-gray-800">
                                    {item.title}
                                </div>
                            </div>
                            {/* description */}
                            <div className="text-gray-600 text-sm ml-[92px]">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
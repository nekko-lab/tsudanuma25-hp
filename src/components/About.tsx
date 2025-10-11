import { useRef } from "react";
import { useInView } from "./hooks/UseView";
import { Title } from "./items/Title";


export const ViewAbout = () => {
    const ref = useRef<HTMLElement>(null!);
    const isLoaded = useInView(ref);
    return (
        <section ref={ref} className="py-16 px-4">
            <Title
                title="About"
                subtitle="本イベントについて"
                delay={isLoaded}
            />

            {/* 左右に配置するコンテナ */}
            <div className="flex flex-col flex-row gap-16 items-center max-w-5xl">
                {/* 左側のコンテンツ */}
                <div className="flex-1">
                    <p className="text-2xl text-gray-700 leading-relaxed">
                        ああああああああああああああああああ<br />
                        ああああああああああああああああああ<br />
                        ああああああああああああああああああ<br />
                        ああああああああああああああああああ<br />
                    </p>
                </div>

                {/* 右側の画像 */}
                <div className="flex-1">
                    <img
                        src="/250831_千葉工大_RGB.jpg"
                        alt="イベント画像"
                        className="w-full h-auto rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}
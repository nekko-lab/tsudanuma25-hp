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
            <div className="flex flex-col flex-row gap-8 items-center max-w-7xl">
                {/* 左側のコンテンツ */}
                <div className="flex-1">
                    <p className="text-2xl text-black-700 leading-relaxed font-bold"
                        style={{ fontFamily: '"M PLUS Rounded 1c", sans-serif' }}>
                        Fire!〜Miku`s Origin Live 2025〜 にようこそ！<br />
                        今年はボーカロイドファンメイドLIVEと<br />
                        DJライブを開催します。<br />
                        LIVEでは歌と踊りの両方を楽しめる空間を目指します。<br />
                        初音ミクや鏡音リン・レンに会いにきてください！<br />
                        心踊る体験を！

                    </p>
                </div>

                {/* 右側の画像 */}
                <div className="flex-1">
                    <img
                        src="/メインロゴ.PNG"
                        alt="イベント画像"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}
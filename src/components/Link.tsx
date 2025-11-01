import { useRef } from "react";
import { useInView } from "./hooks/UseView";
import { Title } from "./items/Title";
import { socialLinks } from "./items/data";

export const SNSLink = () => {
    const ref = useRef<HTMLElement>(null!);
    const isLoaded = useInView(ref);
    return (
        <section ref={ref} id="sns" className="py-16 px-4 w-full">
            <Title
                title="SNS"
                delay={isLoaded}
            />
            <div
                className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                style={{ transitionDelay: '200ms' }}
            >
                <p className="text-center text-gray-700 text-lg mb-8">
                    最新情報はSNSでチェック！フォローお願いします
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`bg-gradient-to-br ${link.color} rounded-2xl p-6 
                                flex flex-col items-center gap-3 ${link.textColor}
                                transition-all duration-300 hover:scale-110 hover:shadow-2xl
                                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${400 + index * 150}ms` }}
                        >
                            <span className="text-2xl">{link.icon}</span>
                            <span className="font-bold">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section >
    );
}
import { type RefObject, useEffect, useState } from 'react';

export const useInView = (
    ref: RefObject<HTMLElement>,
    options?: IntersectionObserverInit
) => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0, //バグってたので修正
                rootMargin: '0px', // 発火タイミングの調整
                ...options, // カスタムオプションで上書き可能
            }
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, options]);

    return inView;
};
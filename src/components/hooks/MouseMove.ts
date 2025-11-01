import React, { useState } from "react"

export const MouseMove = (sensitivity: number = 30) => {
    const [mouseposition, setmouseposition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        setmouseposition({ x: x * sensitivity, y: y * sensitivity });
    }

    const handleMouseLeave = () => {
        setmouseposition({ x: 0, y: 0 });
    };

    return {
        mouseposition,
        handleMouseMove,
        handleMouseLeave,
    };
};
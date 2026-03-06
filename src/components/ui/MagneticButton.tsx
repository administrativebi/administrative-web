'use client';

import { motion } from 'framer-motion';
import { useRef, useState, ReactNode } from 'react';

export function MagneticButton({
    children,
    className,
    onClick
}: {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            <motion.div
                className="absolute inset-0 z-0 bg-white/10 opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
            />
        </motion.button>
    );
}

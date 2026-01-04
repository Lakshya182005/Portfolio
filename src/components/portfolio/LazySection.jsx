import React, { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function LazySection({ children, className = "" }) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasLoaded) {
                    setIsVisible(true);
                    setTimeout(() => setHasLoaded(true), 300);
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasLoaded]);

    return (
        <div ref={ref} className={className}>
            {!isVisible ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-6 h-6 text-[#5865F2] animate-spin" />
                </div>
            ) : (
                <div className={`transition-all duration-500 ${hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {children}
                </div>
            )}
        </div>
    );
}
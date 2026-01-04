// components/portfolio/TechStackItem.jsx
import React from 'react';

export default function TechStackItem({ tech }) {
    return (
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#35373c] transition-colors cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-[#313338] flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                {tech.icon}
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-[#f2f3f5] truncate">{tech.name}</div>
                <div className="text-xs text-[#949ba4]">{tech.level}</div>
            </div>
            <div className={`w-2 h-2 rounded-full ${
                tech.status === 'learning' ? 'bg-[#f0b132]' : 'bg-[#23a559]'
            }`}></div>
        </div>
    );
}
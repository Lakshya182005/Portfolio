// components/portfolio/SkillBadge.jsx
import React from 'react';

const colorMap = {
    purple: 'bg-[#5865F2]',
    green: 'bg-[#23a559]',
    yellow: 'bg-[#f0b132]',
    red: 'bg-[#ed4245]',
    pink: 'bg-[#eb459e]',
    cyan: 'bg-[#00a8fc]',
};

export default function SkillBadge({ skill }) {
    const bgColor = colorMap[skill.color] || colorMap.purple;

    return (
        <div className="flex items-center gap-3 p-3 bg-[#2b2d31] rounded-lg hover:bg-[#32353b] transition-colors group">
            <div className={`w-3 h-3 rounded-full ${bgColor}`}></div>
            <div className="flex-1">
                <div className="text-sm font-medium text-white">{skill.name}</div>
                <div className="text-xs text-[#949ba4] mt-0.5">{skill.description}</div>
            </div>
        </div>
    );
}
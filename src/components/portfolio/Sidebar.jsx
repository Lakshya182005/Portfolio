import React from 'react';
import { Hash, User, Code, Sparkles } from 'lucide-react';

export default function Sidebar({ activeSection, onSectionChange }) {
    const sections = [
        { id: 'about', icon: User, label: 'about-me' },
        { id: 'projects', icon: Hash, label: 'projects' },
        { id: 'skills', icon: Sparkles, label: 'soft-skills' },
        { id: 'tech', icon: Code, label: 'tech-stack' },
    ];

    return (
        <div className="w-60 bg-[#2b2d31] flex flex-col h-full">
            <div className="h-12 px-4 flex items-center border-b border-[#1e1f22] shadow-md">
                <span className="font-semibold text-white truncate">Portfolio Server</span>
            </div>

            <div className="flex-1 p-2 space-y-0.5 overflow-y-auto">
                <div className="px-2 py-1.5 text-xs font-semibold text-[#949ba4] uppercase tracking-wide">
                    Channels
                </div>
                {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => onSectionChange(section.id)}
                            className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded text-sm transition-colors ${isActive
                                    ? 'bg-[#404249] text-white'
                                    : 'text-[#949ba4] hover:text-[#dbdee1] hover:bg-[#35373c]'
                                }`}
                        >
                            <Icon className="w-5 h-5 text-[#949ba4]" />
                            <span>{section.label}</span>
                        </button>
                    );
                })}
            </div>

            <div className="h-[52px] bg-[#232428] px-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center">
                    <span className="text-white text-sm font-medium">YN</span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">YourName</div>
                    <div className="text-xs text-[#949ba4]">Online</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#23a559]"></div>
            </div>
        </div>
    );
}
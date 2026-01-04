import React from 'react';
import { Hash, User, Code, Sparkles, Menu, X } from 'lucide-react';

export default function MobileNav({ activeSection, onSectionChange, isOpen, onToggle }) {
    const sections = [
        { id: 'about', icon: User, label: 'about-me' },
        { id: 'projects', icon: Hash, label: 'projects' },
        { id: 'skills', icon: Sparkles, label: 'soft-skills' },
        { id: 'tech', icon: Code, label: 'tech-stack' },
    ];

    return (
        <>
            <div className="md:hidden fixed top-0 left-0 right-0 h-12 bg-[#2b2d31] border-b border-[#1e1f22] z-50 flex items-center px-4">
                <button onClick={onToggle} className="text-white p-1">
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <span className="ml-3 font-semibold text-white">Portfolio Server</span>
            </div>

            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={onToggle}>
                    <div
                        className="w-60 h-full bg-[#2b2d31] pt-14 p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="px-2 py-1.5 text-xs font-semibold text-[#949ba4] uppercase tracking-wide">
                            Channels
                        </div>
                        {sections.map((section) => {
                            const Icon = section.icon;
                            const isActive = activeSection === section.id;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => {
                                        onSectionChange(section.id);
                                        onToggle();
                                    }}
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
                </div>
            )}
        </>
    );
}
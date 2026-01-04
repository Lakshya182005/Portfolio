import React, { useState, useRef } from 'react';
import { Hash, AtSign, Pin, Users, Bell, HelpCircle, Search } from 'lucide-react';
import Sidebar from '../components/portfolio/Sidebar';
import MobileNav from '../components/portfolio/MobileNav';
import LazySection from '../components/portfolio/LazySection';
import ProjectCard from '../components/portfolio/ProjectCard';
import SkillBadge from '../components/portfolio/SkillBadge';
import TechStackItem from '../components/portfolio/TechStackItem';

const PROJECTS = [
    {
        id: 1,
        icon: '🛡️',
        title: 'HackTheHunt 2.0 – Backend',
        date: 'Nov 2025',
        description:
            'Engineered a secure and scalable backend for a CTF-style treasure hunt platform, supporting real-time challenge validation, team-based progress tracking, and role-based access control.',
        category: 'Backend • Security',
        tech: 'Node.js • Express.js • MongoDB • JWT',
        image:
            'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
        liveUrl: '#', // add if hosted
        githubUrl: '#', // replace with actual repo
    },
    {
        id: 2,
        icon: '🌍',
        title: 'Ghummakad – Travel Logger',
        date: 'Apr 2025',
        description:
            'Built a smart travel logging web app to track trips, manage expenses, perform real-time currency conversions, and organize location-based travel data across journeys.',
        category: 'Full-Stack Web Application',
        tech: 'Next.js • React • Tailwind CSS • REST APIs',
        image:
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=200&fit=crop',
        liveUrl: '#', // demo URL
        githubUrl: '#', // repo URL
    },
];


const SOFT_SKILLS = [
    {
        id: 1,
        name: 'Problem Solving',
        description: 'Breaking down complex challenges into structured, efficient solutions',
        color: 'purple',
    },
    {
        id: 2,
        name: 'Analytical Thinking',
        description: 'Approaching problems logically using data, constraints, and trade-off analysis',
        color: 'indigo',
    },
    {
        id: 3,
        name: 'System Thinking',
        description: 'Understanding how components interact within larger software architectures',
        color: 'cyan',
    },
    {
        id: 4,
        name: 'Debugging Mindset',
        description: 'Methodically isolating issues and iterating toward stable, reliable solutions',
        color: 'red',
    },
    {
        id: 5,
        name: 'Security Awareness',
        description: 'Applying a security-first mindset while designing and implementing features',
        color: 'emerald',
    },
    {
        id: 6,
        name: 'Learning Agility',
        description: 'Quickly adapting to new technologies and filling knowledge gaps independently',
        color: 'yellow',
    },
    {
        id: 7,
        name: 'Ownership',
        description: 'Taking responsibility for features from design through deployment',
        color: 'green',
    },
    {
        id: 8,
        name: 'Team Collaboration',
        description: 'Working effectively with peers to build, review, and ship solutions',
        color: 'blue',
    },
    {
        id: 9,
        name: 'Time Management',
        description: 'Balancing academics, problem-solving practice, and project development',
        color: 'orange',
    },
    {
        id: 10,
        name: 'Decision Making',
        description: 'Evaluating options to make clear, pragmatic technical choices',
        color: 'rose',
    },
    {
        id: 11,
        name: 'Attention to Detail',
        description: 'Caring about edge cases, correctness, and clean implementation',
        color: 'teal',
    },
    {
        id: 12,
        name: 'Persistence',
        description: 'Staying consistent through complex bugs, learning curves, and iterations',
        color: 'slate',
    },
];


const TECH_STACK = [
    // Frontend
    {
        id: 1,
        icon: '⚛️',
        name: 'React',
        level: 'Intermediate',
        status: 'proficient',
    },
    {
        id: 2,
        icon: '🌐',
        name: 'HTML',
        level: 'Advanced',
        status: 'proficient',
    },
    {
        id: 3,
        icon: '🎨',
        name: 'CSS',
        level: 'Advanced',
        status: 'proficient',
    },
    {
        id: 4,
        icon: '💨',
        name: 'Tailwind CSS',
        level: 'Advanced',
        status: 'proficient',
    },

    // Backend
    {
        id: 5,
        icon: '🟢',
        name: 'Node.js',
        level: 'Intermediate',
        status: 'proficient',
    },
    {
        id: 6,
        icon: '🚏',
        name: 'Express.js',
        level: 'Intermediate',
        status: 'proficient',
    },
    {
        id: 7,
        icon: '🗄️',
        name: 'MongoDB',
        level: 'Intermediate',
        status: 'proficient',
    },
    {
        id: 8,
        icon: '🧩',
        name: 'Prisma ORM',
        level: 'Intermediate',
        status: 'proficient',
    },

    // Programming & DSA
    {
        id: 9,
        icon: '🐍',
        name: 'Python',
        level: 'Intermediate',
        status: 'proficient',
    },
    {
        id: 10,
        icon: '📘',
        name: 'Data Structures & Algorithms',
        level: 'Intermediate',
        status: 'proficient',
    },

    // Databases
    {
        id: 11,
        icon: '🐬',
        name: 'MySQL',
        level: 'Intermediate',
        status: 'proficient',
    },
    {
        id: 12,
        icon: '📊',
        name: 'SQL',
        level: 'Intermediate',
        status: 'proficient',
    },

    // Tools
    {
        id: 13,
        icon: '🔧',
        name: 'Git & GitHub',
        level: 'Intermediate',
        status: 'proficient',
    },
    {
        id: 14,
        icon: '🎨',
        name: 'Figma',
        level: 'Beginner',
        status: 'proficient',
    },

    // Currently Learning
    {
        id: 15,
        icon: '🧠',
        name: 'Machine Learning',
        level: 'Beginner',
        status: 'learning',
    },
    {
        id: 16,
        icon: '🤖',
        name: 'Artificial Intelligence',
        level: 'Beginner',
        status: 'learning',
    },
    {
        id: 17,
        icon: '🔐',
        name: 'Cybersecurity Fundamentals',
        level: 'Beginner',
        status: 'learning',
    },
    {
        id: 18,
        icon: '🧪',
        name: 'Secure Backend Design',
        level: 'Beginner',
        status: 'learning',
    },
];


export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('about');
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const sectionRefs = {
        about: useRef(null),
        projects: useRef(null),
        skills: useRef(null),
        tech: useRef(null),
    };

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="h-screen bg-[#313338] flex overflow-hidden">
            <div className="hidden md:block">
                <Sidebar activeSection={activeSection} onSectionChange={scrollToSection} />
            </div>

            <MobileNav
                activeSection={activeSection}
                onSectionChange={scrollToSection}
                isOpen={mobileNavOpen}
                onToggle={() => setMobileNavOpen(!mobileNavOpen)}
            />

            <div className="flex-1 flex flex-col min-w-0">
                <div className="h-12 min-h-[48px] px-4 flex items-center border-b border-[#1e1f22] bg-[#313338] md:flex hidden">
                    <Hash className="w-6 h-6 text-[#949ba4] mr-2" />
                    <span className="font-semibold text-white">{activeSection}</span>
                    <div className="ml-auto flex items-center gap-4 text-[#b5bac1]">
                        <Bell className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                        <Pin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                        <Users className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-[#949ba4]" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-36 bg-[#1e1f22] text-sm text-[#dbdee1] placeholder-[#949ba4] rounded pl-8 pr-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#5865F2]"
                            />
                        </div>
                        <HelpCircle className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pt-14 md:pt-0">
                    <div ref={sectionRefs.about} className="p-4 md:p-6 border-b border-[#3f4147]">
                        <div className="flex gap-4">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5865F2] via-[#eb459e] to-[#fee75c] p-0.5 flex-shrink-0">
                                <div className="w-full h-full rounded-full bg-[#313338] flex items-center justify-center">
                                    <span className="text-2xl">👨‍💻</span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold text-white mb-1">Lakshya Agrawal</h1>
                                <p className="text-[#b5bac1] text-sm mb-3">@LakshyaAg • Full Stack Developer</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-0.5 bg-[#5865F2] text-white text-xs rounded">Developer</span>
                                    <span className="px-2 py-0.5 bg-[#23a559] text-white text-xs rounded">Open to Work</span>
                                    <span className="px-2 py-0.5 bg-[#eb459e] text-white text-xs rounded">Creative</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-[#2b2d31] rounded-lg">
                            <h3 className="text-xs font-semibold text-[#b5bac1] uppercase mb-2">About Me</h3>
                            <p className="text-[#dbdee1] text-sm leading-relaxed">
                                I’m an aspiring software developer with a strong foundation in problem-solving and full-stack web development. I enjoy building real-world applications where frontend experience, backend logic, and data systems come together seamlessly.

                                Alongside development, I’m actively exploring cybersecurity fundamentals, applying a security-aware mindset while designing and shipping projects. I’m driven by curiosity, consistency, and the goal of building software that is robust, scalable, and thoughtfully engineered.
                            </p>
                        </div>
                    </div>

                    <div ref={sectionRefs.projects} className="border-b border-[#3f4147]">
                        <div className="p-4 md:p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Hash className="w-5 h-5 text-[#949ba4]" />
                                <h2 className="text-lg font-semibold text-white">projects</h2>
                                <span className="text-xs text-[#949ba4] bg-[#2b2d31] px-1.5 py-0.5 rounded">
                                    {PROJECTS.length}
                                </span>
                            </div>
                        </div>
                        {PROJECTS.map((project) => (
                            <LazySection key={project.id}>
                                <ProjectCard project={project} />
                            </LazySection>
                        ))}
                    </div>

                    <div ref={sectionRefs.skills} className="p-4 md:p-6 border-b border-[#3f4147]">
                        <div className="flex items-center gap-2 mb-4">
                            <AtSign className="w-5 h-5 text-[#949ba4]" />
                            <h2 className="text-lg font-semibold text-white">soft-skills</h2>
                            <span className="text-xs text-[#949ba4] bg-[#2b2d31] px-1.5 py-0.5 rounded">
                                {SOFT_SKILLS.length} roles
                            </span>
                        </div>
                        <LazySection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {SOFT_SKILLS.map((skill) => (
                                    <SkillBadge key={skill.id} skill={skill} />
                                ))}
                            </div>
                        </LazySection>
                    </div>

                    <div ref={sectionRefs.tech} className="p-4 md:p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Users className="w-5 h-5 text-[#949ba4]" />
                            <h2 className="text-lg font-semibold text-white">tech-stack</h2>
                            <span className="text-xs text-[#949ba4] bg-[#2b2d31] px-1.5 py-0.5 rounded">
                                {TECH_STACK.length} members
                            </span>
                        </div>
                        <LazySection>
                            <div className="bg-[#2b2d31] rounded-lg p-3">
                                <div className="text-xs font-semibold text-[#949ba4] uppercase mb-2 px-2">
                                    Proficient — {TECH_STACK.filter(t => t.status === 'proficient').length}
                                </div>
                                {TECH_STACK.filter(t => t.status === 'proficient').map((tech) => (
                                    <TechStackItem key={tech.id} tech={tech} />
                                ))}
                                <div className="text-xs font-semibold text-[#949ba4] uppercase mb-2 mt-4 px-2">
                                    Currently Learning — {TECH_STACK.filter(t => t.status === 'learning').length}
                                </div>
                                {TECH_STACK.filter(t => t.status === 'learning').map((tech) => (
                                    <TechStackItem key={tech.id} tech={tech} />
                                ))}
                            </div>
                        </LazySection>
                    </div>

                    <div className="p-6 text-center text-[#949ba4] text-xs">
                        <p>Built with ❤️ by Lakshya Agrawal • {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
    return (
        <div className="group flex gap-4 p-4 hover:bg-[#2e3035] rounded-lg transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5865F2] to-[#eb459e] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm"></span>
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-medium text-[#f2f3f5] hover:underline cursor-pointer">
                        {project.title}
                    </span>
                    <span className="text-xs text-[#949ba4]">
                        {project.date}
                    </span>
                </div>

                <p className="text-[#dbdee1] text-sm mb-3 leading-relaxed">
                    {project.description}
                </p>

                <div className="max-w-md border-l-4 border-[#5865F2] bg-[#2b2d31] rounded p-3">
                    {project.image && (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-32 object-cover rounded mb-2"
                        />
                    )}
                    <div className="text-xs text-[#00a8fc] mb-1">{project.category}</div>
                    <div className="text-sm font-medium text-white mb-1">{project.title}</div>
                    <div className="text-sm text-[#b5bac1]">{project.tech}</div>
                </div>

                <div className="flex gap-2 mt-3">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#5865F2] hover:bg-[#4752c4] text-white text-xs font-medium rounded transition-colors"
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#4e5058] hover:bg-[#6d6f78] text-white text-xs font-medium rounded transition-colors"
                        >
                            <Github className="w-3.5 h-3.5" />
                            Source
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
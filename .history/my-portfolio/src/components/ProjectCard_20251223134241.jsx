import { useState } from 'react';
import { useLanguage, cn } from '../lib/utils';
import { getSkillIcon, SiGithub } from '../lib/icons';

import projectsData from '../data/projects.json';

export const ProjectCard = () => {
    const { translate } = useLanguage();
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState('all');

    //  FILTER
    const categories = [
        { id: 'all', labelKey: 'projects.filter_all' },
        { id: 'fullstack', labelKey: 'projects.filter_fullstack' },
        { id: 'mobile', labelKey: 'projects.filter_mobile' },
        { id: 'desktop', labelKey: 'projects.filter_desktop' },
    ];

    // MAP PROJECT JSON DATA
    const allProjects = projectsData.map(project => ({
        ...project,
        name: translate(project.name),
        description: translate(project.description)
    }));

    // FILTER PROJECT BY CATEGORY
    const projects = activeFilter === 'all'
        ? allProjects
        : allProjects.filter(p => p.category === activeFilter);

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = (e) => {
        e?.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    // Single Project Card Component
    const SingleProjectCard = ({ project }) => (
        <div
            onClick={() => openModal(project)}
            className="
                group
                relative
                bg-card/10
                backdrop-blur-sm
                rounded-2xl
                border-l-4
                border-primary
                overflow-hidden
                cursor-pointer
                transition-all
                duration-300
                hover:scale-[1.02]
                shadow-xl
                hover:shadow-2xl
                hover:shadow-primary/10
            "
        >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Click to view hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 rounded-full bg-primary/90 text-white text-sm font-medium backdrop-blur-sm">
                        {translate('projects.view_details')}
                    </span>
                </div>
            </div>

            {/* Project Info */}
            <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1 mb-3">
                    {project.name}
                </h3>

                {/* GitHub and Technology Icons - Same Row */}
                <div className="flex items-center justify-between">
                    {/* Technology Icons */}
                    <div className="flex items-center gap-3">
                        {project.technologies?.map((techName, index) => {
                            const TechIcon = getSkillIcon(techName);
                            return (
                                <div key={index} className="text-foreground/50 hover:text-primary transition-colors duration-300">
                                    <TechIcon className="w-6 h-6" />
                                </div>
                            );
                        })}
                    </div>

                    {/* GitHub Link */}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-foreground/50 hover:text-primary transition-colors duration-300"
                        >
                            <SiGithub className="w-6 h-6" />
                        </a>
                    )}
                </div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-primary/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
        </div>
    );


    return (
        <div className="relative w-[90%] mx-auto min-h-[calc(100vh-8rem)] flex flex-col items-center pt-32 pb-8">
            <div className="w-full max-w-6xl">

                {/* FILTER BUTTONS */}
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={cn(
                                "px-5 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                activeFilter === category.id
                                    ? "bg-primary text-white shadow-lg shadow-primary/30 border-2 border-primary"
                                    : "bg-transparent text-foreground/70 hover:text-primary hover:border-primary border-2 border-foreground/30"
                            )}
                        >
                            {translate(category.labelKey)}
                        </button>
                    ))}

                </div>

                {/* PROJECTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <SingleProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* No projects message */}
                {projects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-foreground/50 text-lg">
                            {translate('no_projects_found') || 'No projects found in this category'}
                        </p>
                    </div>
                )}

                {/* GLOW EFFECT */}
                <div
                    className="
                        absolute 
                        -inset-4 
                        bg-primary/5 
                        blur-3xl 
                        -z-10 
                        opacity-50
                        animate-pulse-subtle
                    "
                />
            </div>

            {/* PROJECT DETAIL MODAL */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
                    onClick={closeModal}
                >
                    <div
                        className="
                            relative 
                            w-full 
                            max-w-3xl 
                            max-h-[90vh]
                            bg-background
                            rounded-2xl
                            border-l-4
                            border-primary
                            shadow-2xl
                            overflow-hidden
                        "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Content */}
                        <div className="p-6 md:p-8 overflow-y-auto max-h-[90vh]">
                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                                {selectedProject.name}
                            </h2>

                            {/* Image Gallery */}
                            <div className="relative w-full max-w-lg mx-auto aspect-video bg-black/20 rounded-xl overflow-hidden mb-6 border border-primary/20">
                                <img
                                    src={selectedProject.images[currentImageIndex]}
                                    alt={selectedProject.name}
                                    className="w-full h-full object-contain"
                                />

                                {/* Image Navigation */}
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-1.5 rounded-full transition-all"
                                            onClick={prevImage}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-1.5 rounded-full transition-all"
                                            onClick={nextImage}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>

                                        {/* Image indicators */}
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                                            {selectedProject.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex(index);
                                                    }}
                                                    className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentImageIndex
                                                        ? 'bg-primary w-4'
                                                        : 'bg-white/50 hover:bg-white/80'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-foreground/80 leading-relaxed text-justify text-sm md:text-base">
                                {selectedProject.description}
                            </p>
                        </div>

                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-foreground/60 hover:text-foreground p-2 hover:bg-primary/10 rounded-full transition-all"
                            onClick={closeModal}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 opacity-50" />
                    </div>
                </div>
            )}
        </div>
    );
};

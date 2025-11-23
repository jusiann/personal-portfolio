import {useState, useEffect} from "react";
import {useLanguage} from "../lib/utils";

export const ProjectCard = () => {
    const {translate} = useLanguage();
    const [currentProject, setCurrentProject] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const projects = [
        {
            name: translate('project_parkour_name'),
            description: translate('project_parkour_description'),
            images: [
                '/src/assets/images/projects/parkour_shooter_game/1.png',
                '/src/assets/images/projects/parkour_shooter_game/2.png',
                '/src/assets/images/projects/parkour_shooter_game/3.png',
                '/src/assets/images/projects/parkour_shooter_game/4.png',
                '/src/assets/images/projects/parkour_shooter_game/5.png',
            ],
        },
        {
            name: translate('project_endless_name'),
            description: translate('project_endless_description'),
            images: [
                '/src/assets/images/projects/endless_survival_game/1.png',
                '/src/assets/images/projects/endless_survival_game/2.png',
                '/src/assets/images/projects/endless_survival_game/3.png',
                '/src/assets/images/projects/endless_survival_game/4.png',
                '/src/assets/images/projects/endless_survival_game/5.png',
            ],
        },
        {
            name: translate('project_myhabits_name'),
            description: translate('project_myhabits_description'),
            images: [
                '/src/assets/images/projects/myhabits_desktop_app/1.png',
                '/src/assets/images/projects/myhabits_desktop_app/2.png',
                '/src/assets/images/projects/myhabits_desktop_app/3.png',
                '/src/assets/images/projects/myhabits_desktop_app/4.png',
                '/src/assets/images/projects/myhabits_desktop_app/5.png',
            ],
        },
        {
            name: translate('project_chatting_name'),
            description: translate('project_chatting_description'),
            images: [
                '/src/assets/images/projects/chatting_app/1.jpg',
                '/src/assets/images/projects/chatting_app/2.jpg',
                '/src/assets/images/projects/chatting_app/3.jpg',
                '/src/assets/images/projects/chatting_app/4.jpg',
                '/src/assets/images/projects/chatting_app/5.jpg',
            ],
        },
        {
            name: translate('project_habits_mobile_name'),
            description: translate('project_habits_mobile_description'),
            images: [
                '/src/assets/images/projects/habits_mobile_app/1.jpg',
                '/src/assets/images/projects/habits_mobile_app/2.jpg',
                '/src/assets/images/projects/habits_mobile_app/3.jpg',
                '/src/assets/images/projects/habits_mobile_app/4.png',
                '/src/assets/images/projects/habits_mobile_app/5.jpg',
            ],
        },
    ];

    // Auto-slide effect
    useEffect(() => {
        if (isZoomed) return; // Don't auto-slide when zoomed

        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => {
                // Access current project inside callback to get fresh state if needed
                // projects is constant here so it's safe to access
                return (prev + 1) % projects[currentProject].images.length;
            });
        }, 5000);

        return () => clearInterval(timer);
    }, [currentProject, isZoomed]); // Reset timer when project changes or zoom state changes

    const project = projects[currentProject];
    const totalImages = project.images.length;

    const nextImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
        setCurrentImageIndex(0);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
        setCurrentImageIndex(0);
    };

    return (
        <div className="relative">
            <div
                className="
                    relative 
                    bg-card/10 
                    backdrop-blur-sm
                    rounded-2xl 
                    border-l-4 
                    border-primary
                    shadow-2xl
                    p-6
                    md:p-8
                    min-h-[400px]
                    transition-all 
                    duration-500
                    hover:scale-[1.01]
                "
            >
                <div className="flex flex-col gap-6">
                    {/* PROJECT INFO AND IMAGE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-2 md:gap-x-12 md:items-start mb-16">
                        <div className="text-left order-1 md:col-start-1 md:row-start-1">
                            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
                                {project.name}
                            </h2>
                        </div>

                        <div className="w-full md:w-[500px] md:shrink-0 order-2 md:col-start-2 md:row-start-1 md:row-span-2">
                            <div
                                className="relative aspect-video bg-black/40 rounded-lg overflow-hidden border border-primary/50 cursor-zoom-in group"
                                onClick={() => setIsZoomed(true)}
                            >
                                <img
                                    src={project.images[currentImageIndex]}
                                    alt={project.name}
                                    className="w-full h-full object-contain"
                                />

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                        Click to zoom
                                    </span>
                                </div>

                                {totalImages > 1 && (
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10" onClick={(e) => e.stopPropagation()}>
                                        {project.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(index);
                                                }}
                                                className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                                                    ? 'bg-primary w-6'
                                                    : 'bg-white/50 hover:bg-white/80'
                                                    }`}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="text-left order-3 md:col-start-1 md:row-start-2">
                            <p className="text-foreground/80 leading-relaxed text-justify">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {/* PROJECT NAVIGATION */}
                    <div className="flex gap-4 justify-end">
                        <button
                            onClick={prevProject}
                            className="text-primary hover:text-primary/80 transition-colors"
                            aria-label="Previous project"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextProject}
                            className="text-primary hover:text-primary/80 transition-colors"
                            aria-label="Next project"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* GLOW EFFECT FOR CARD */}
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

            {/* ZOOM LIGHTBOX */}
            {isZoomed && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
                    onClick={() => setIsZoomed(false)}
                >
                    <div className="relative w-full max-w-7xl h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={project.images[currentImageIndex]}
                            alt={project.name}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />

                        {/* Lightbox Navigation */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all"
                            onClick={prevImage}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all"
                            onClick={nextImage}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Close Button - Moved after content and given high z-index */}
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-[110] bg-black/20 hover:bg-black/40 rounded-full transition-all"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsZoomed(false);
                        }}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

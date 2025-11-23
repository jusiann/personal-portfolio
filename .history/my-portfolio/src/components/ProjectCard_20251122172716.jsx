import {useState} from "react";
import {useLanguage} from "../lib/utils";

export const ProjectCard = () => {
    const {t} = useLanguage();
    const [currentProject, setCurrentProject] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projects = [
        {
            name: t('project_parkour_name'),
            description: t('project_parkour_description'),
            images: [
                '/src/assets/images/projects/parkour_shooter_game/1.png',
                '/src/assets/images/projects/parkour_shooter_game/2.png',
                '/src/assets/images/projects/parkour_shooter_game/3.png',
            ],
        },
        {
            name: t('project_endless_name'),
            description: t('project_endless_description'),
            images: [
                '/src/assets/images/projects/endless_survival_game/1.png',
                '/src/assets/images/projects/endless_survival_game/2.png',
                '/src/assets/images/projects/endless_survival_game/3.png',
            ],
        },
        {
            name: t('project_myhabits_name'),
            description: t('project_myhabits_description'),
            images: [
                '/src/assets/images/projects/myhabits_desktop_app/1.png',
                '/src/assets/images/projects/myhabits_desktop_app/2.png',
                '/src/assets/images/projects/myhabits_desktop_app/3.png',
            ],
        },
        {
            name: t('project_chatting_name'),
            description: t('project_chatting_description'),
            images: [
                '/src/assets/images/projects/chatting_app/1.png',
                '/src/assets/images/projects/chatting_app/2.png',
                '/src/assets/images/projects/chatting_app/3.png',
            ],
        },
        {
            name: t('project_habits_mobile_name'),
            description: t('project_habits_mobile_description'),
            images: [
                '/src/assets/images/projects/habits_mobile_app/1.png',
                '/src/assets/images/projects/habits_mobile_app/2.png',
                '/src/assets/images/projects/habits_mobile_app/3.png',
            ],
        },
    ];

    const project = projects[currentProject];
    const totalImages = project.images.length;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    };

    const prevImage = () => {
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
                <div className="flex flex-col md:flex-row gap-12 md:items-start mb-16">
                    <div className="flex-1 text-left order-1 md:order-1">
                        <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            {project.name}
                        </h2>
                        <p className="text-foreground/80 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="w-full md:w-[500px] md:shrink-0 order-2 md:order-2">
                        <div className="relative aspect-video bg-card/20 rounded-lg overflow-hidden border border-primary/20">
                            <img 
                                src={project.images[currentImageIndex]} 
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />

                            {totalImages > 1 && (
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                                    {project.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                index === currentImageIndex 
                                                    ? 'bg-primary w-6' 
                                                    : 'bg-foreground/30 hover:bg-foreground/50'
                                            }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

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
    );
};

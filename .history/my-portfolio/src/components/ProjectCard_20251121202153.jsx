import {useState} from "react";

export const ProjectCard = ({project}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const totalImages = project.images.length;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
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
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1 space-y-4">
                    <div className="text-left">
                        <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            {project.name}
                        </h2>
                        <p className="text-foreground/80 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-96 md:shrink-0">
                    <div className="relative aspect-video bg-card/20 rounded-lg overflow-hidden">
                        <img 
                            src={project.images[currentImageIndex]} 
                            alt={`${project.name} - ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect fill="%23dc2626" width="800" height="450"/%3E%3Ctext fill="%23fff" font-family="system-ui" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EProject Image%3C/text%3E%3C/svg%3E';
                            }}
                        />
                        
                        {totalImages > 1 && (
                            <>
                                <button 
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors bg-background/50 backdrop-blur-sm rounded-full p-1"
                                    aria-label="Previous image"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button 
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors bg-background/50 backdrop-blur-sm rounded-full p-1"
                                    aria-label="Next image"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

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

            <div className="absolute right-6 bottom-6 flex gap-4">
                <button 
                    onClick={() => {
                        const event = new CustomEvent('prevProject');
                        window.dispatchEvent(event);
                    }}
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="Previous project"
                >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    onClick={() => {
                        const event = new CustomEvent('nextProject');
                        window.dispatchEvent(event);
                    }}
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="Next project"
                >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
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

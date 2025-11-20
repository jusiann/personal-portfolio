export const ProfileImage = ({ src, alt = "Profile" }) => {
    return (
        <div className="flex justify-center mb-8 animate-fade-in-delay-1">
            {/* Dış halka - glow efekti */}
            <div 
                className="
                    relative 
                    group
                    animate-pulse-subtle
                "
            >
                {/* Gradient border halka */}
                <div 
                    className="
                        absolute 
                        -inset-1 
                        bg-gradient-to-br 
                        from-primary 
                        via-primary/60 
                        to-primary/30
                        rounded-full 
                        blur-md 
                        group-hover:blur-lg 
                        transition-all 
                        duration-300
                    "
                />
                
                {/* Resim container */}
                <div 
                    className="
                        relative 
                        w-32 
                        h-32 
                        md:w-40 
                        md:h-40 
                        rounded-full 
                        overflow-hidden
                        border-4 
                        border-background
                        shadow-2xl
                        group-hover:scale-105
                        transition-transform
                        duration-300
                    "
                >
                    <img 
                        src={src} 
                        alt={alt}
                        className="
                            w-full 
                            h-full 
                            object-cover
                            filter 
                            group-hover:brightness-110
                            transition-all
                            duration-300
                        "
                    />
                </div>

                {/* İç glow */}
                <div 
                    className="
                        absolute 
                        inset-0 
                        rounded-full 
                        shadow-[inset_0_0_20px_rgba(220,38,38,0.2)]
                        pointer-events-none
                    "
                />
            </div>
        </div>
    );
};

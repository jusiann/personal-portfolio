export const HomeImage = ({ src, alt = "Profile" }) => {
    return (
        <div className="flex justify-center mb-8">
            
            { /* OUTER GLOW CIRCLE */ }
            <div 
                className="
                    relative 
                    group
                    animate-pulse-subtle
            ">
                
                {/* GRADIENT BORDER CIRCLE */}
                <div 
                    className="
                        absolute 
                        -inset-1 
                        bg-linear-to-br 
                        from-primary 
                        via-primary/60 
                        to-primary/30
                        rounded-full 
                        blur-md 
                        group-hover:blur-lg 
                        transition-all 
                        duration-300
                "/>
                
                {/* IMAGE CONTAINER */}
                <div 
                    className="
                        relative 
                        w-40 
                        h-40 
                        md:w-64 
                        md:h-64 
                        rounded-full 
                        overflow-hidden
                        border-4 
                        border-primary/20
                        shadow-2xl
                        group-hover:scale-105
                        transition-transform
                        duration-300
                ">
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
                    "/>
                </div>

                {/* INNER GLOW */}
                <div 
                    className="
                        absolute 
                        inset-0 
                        rounded-full 
                        shadow-[inset_0_0_20px_rgba(220,38,38,0.2)]
                        pointer-events-none
                "/>
            </div>
        </div>
    );
};

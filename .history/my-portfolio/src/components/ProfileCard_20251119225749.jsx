import { useLanguage } from "../lib/utils";

export const ProfileCard = ({ children }) => {
    const { t } = useLanguage();

    return (
        <div className="relative w-full max-w-3xl mx-auto px-4 py-8 mt-20">
            {/* Ana kart yapısı - backdrop blur ve opacity ile saydam etki */}
            <div 
                className="
                    relative 
                    bg-card/80 
                    backdrop-blur-sm
                    rounded-2xl 
                    border-l-4 
                    border-primary
                    shadow-2xl
                    p-8
                    md:p-12
                    transition-all 
                    duration-500
                    hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]
                    hover:scale-[1.01]
                    animate-fade-in
                "
            >
                {/* İçerik alanı */}
                <div className="relative z-10">
                    {children}
                </div>

                {/* Dekoratif köşe elementleri */}
                <div 
                    className="
                        absolute 
                        -top-2 
                        -right-2 
                        w-20 
                        h-20 
                        border-t-2 
                        border-r-2 
                        border-primary/20 
                        rounded-tr-2xl
                        transition-all
                        duration-300
                        group-hover:border-primary/40
                    "
                />
                <div 
                    className="
                        absolute 
                        -bottom-2 
                        -left-2 
                        w-20 
                        h-20 
                        border-b-2 
                        border-l-2 
                        border-primary/20 
                        rounded-bl-2xl
                        transition-all
                        duration-300
                        group-hover:border-primary/40
                    "
                />
            </div>

            {/* Ambient glow efekti */}
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

export const ProfileCard = ({ children, profileImage }) => {

    return (
        <div className="relative w-full max-w-5xl px-4 py-8 mt-20 flex items-center gap-8">
            {/* Ana kart yapısı - backdrop blur ve opacity ile saydam etki */}
            <div 
                className="
                    relative 
                    flex-1
                    bg-card/10 
                    backdrop-blur-sm
                    rounded-2xl 
                    border-l-4 
                    border-primary
                    shadow-2xl
                    p-8
                    md:p-12
                    transition-all 
                    duration-500
                    hover:scale-[1.01]
                    animate-fade-in
                "
            >
                {/* İçerik alanı */}
                <div className="relative z-10">
                    {children}
                </div>
            </div>

            {/* Profil Resmi - Card Dışında Sağda */}
            <div className="hidden md:block">
                {profileImage}
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

import {HomeImage} from "./HomeImage";
import {SocialLinks} from "./SocialLinks";
import {useLanguage} from "../lib/utils";

export const HomeCard = () => {
    const {t} = useLanguage();

    return (
        <div className="relative w-[90%] mx-auto py-8 mt-32 flex items-center gap-12">
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
                <div className="relative z-10">
                    <div className="md:hidden mb-8">
                        <HomeImage 
                            src="/src/assets/images/profile_photo.png" 
                            alt={`${t('profile_name')} ${t('profile_surname')}`}
                        />
                    </div>

                    <div className="text-center md:text-left mb-6 animate-fade-in-delay-2">
                        <h1 className="
                            text-4xl 
                            md:text-5xl 
                            font-heading 
                            font-bold 
                            text-foreground
                            mb-2
                            tracking-tight
                        ">
                            {t('profile_name')}{' '}
                            <span className="text-primary">
                                {t('profile_surname')}
                            </span>
                        </h1>
                        <p className="
                            text-lg 
                            md:text-xl 
                            text-foreground/60 
                            font-code
                        ">
                            {t('hero_subtitle')}
                        </p>
                    </div>

                    <div className="
                        text-center
                        md:text-left 
                        mb-8 
                        max-w-2xl
                        animate-fade-in-delay-2
                    ">
                        <p className="
                            text-base 
                            md:text-lg 
                            text-foreground/80 
                            leading-relaxed
                        ">
                            {t('profile_tagline')}
                        </p>
                    </div>

                    <SocialLinks />
                </div>
            </div>

            <div className="hidden md:block">
                <HomeImage 
                    src="/src/assets/images/profile_photo.png" 
                    alt={`${t('profile_name')} ${t('profile_surname')}`}
                />
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

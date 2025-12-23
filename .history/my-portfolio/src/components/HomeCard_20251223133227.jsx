import { SocialLinks } from './SocialLinks';
import { TypingEffect } from './TypingEffect';
import { useLanguage } from '../lib/utils';

export const HomeCard = () => {
    const { translate, lang } = useLanguage();

    const typingTexts = lang === 'tr'
        ? ['Full Stack Geliştirici', 'Backend Geliştirici', 'Mobil Uygulama Geliştirici', 'Oyun Geliştirici']
        : ['Full Stack Developer', 'Backend Developer', 'Mobile App Developer', 'Game Developer'];

    return (
        <div className="relative w-[90%] mx-auto min-h-[calc(100vh-8rem)] flex items-center justify-center pt-32 pb-8">

            {/* CARD CONTAINER */}
            <div className="flex items-stretch gap-12 w-full max-w-7xl">
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
                    "
                >

                    {/* CONTENT */}
                    <div className="relative z-10">

                        {/* PROFILE IMAGE FOR MOBILE */}
                        <div className="md:hidden flex justify-center mb-8">
                            <div className="relative group animate-pulse-subtle">
                                <div className="absolute -inset-1 bg-linear-to-br from-primary via-primary/60 to-primary/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                                    <img
                                        src="/assets/images/profile_photo.png"
                                        alt={`${translate('home.name')} ${translate('home.surname')}`}
                                        className="w-full h-full object-cover filter group-hover:brightness-110 transition-all duration-300"
                                    />
                                </div>
                                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(220,38,38,0.2)] pointer-events-none" />
                            </div>
                        </div>

                        {/* NAME SURNAME TITLE */}
                        <div className="text-center md:text-left mb-6">
                            <h1 className="
                                text-4xl 
                                md:text-5xl 
                                font-heading 
                                font-bold 
                                text-foreground
                                mb-2
                                tracking-tight
                            ">
                                {translate('home.name')}{' '}
                                <span className="text-primary">
                                    {translate('home.surname')}
                                </span>
                            </h1>
                            <p className="
                                text-lg 
                                md:text-xl 
                                text-foreground/60 
                                font-code
                                h-7
                            ">
                                <TypingEffect texts={typingTexts} />
                            </p>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="
                            text-center
                            md:text-left 
                            mb-8 
                            max-w-2xl
                        ">
                            <p className="
                                text-base 
                                md:text-lg 
                                text-foreground/80 
                                leading-relaxed
                                text-justify
                            ">
                                {translate('home.summary')}
                            </p>
                        </div>

                        <SocialLinks />
                    </div>
                </div>

                {/* PROFILE IMAGE FOR DESKTOP */}
                <div className="hidden md:flex items-center justify-center shrink-0">
                    <ProfileImage size="large" />
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
                "/>
            </div>
        </div>
    );
};

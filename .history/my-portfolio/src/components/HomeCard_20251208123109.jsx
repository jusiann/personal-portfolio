import {HomeImage} from './HomeImage';
import {SocialLinks} from './SocialLinks';
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
                        <div className="md:hidden mb-8">
                            <HomeImage
                                src="/assets/images/profile_photo.png"
                                alt={`${translate('profile_name')} ${translate('profile_surname')}`}
                            />
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
                                {translate('profile_name')}{' '}
                                <span className="text-primary">
                                    {translate('profile_surname')}
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
                                {translate('profile_tagline')}
                            </p>
                        </div>

                        <SocialLinks />
                    </div>
                </div>

                {/* PROFILE IMAGE FOR DESKTOP */}
                <div className="hidden md:flex items-center justify-center shrink-0">
                    <HomeImage
                        src="/assets/images/profile_photo.png"
                        alt={`${translate('profile_name')} ${translate('profile_surname')}`}
                        size="large"
                    />
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

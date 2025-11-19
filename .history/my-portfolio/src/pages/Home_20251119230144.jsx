import {ThemeToggle} from "../components/ThemeToggle";
import {LanguageToggle} from "../components/LanguageToggle";
import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";
import {ProfileCard} from "../components/ProfileCard";
import {ProfileImage} from "../components/ProfileImage";
import {SocialLinks} from "../components/SocialLinks";
import {useLanguage} from "../lib/utils";

export const Home = () => {
    const { t } = useLanguage();

    return (
        <PageTransition>
        <div className="
                        min-h-screen 
                        bg-background 
                        text-foreground 
                        overflow-x-hidden">

            {/* THEME TOGGLE */}
            <ThemeToggle />

            {/* LANGUAGE TOGGLE */}
            <LanguageToggle />

            {/* BACKGROUND EFFECTS */}
            <CrimsonWebBackground />

            {/* NAVBAR */}
            <Navbar />
            
            {/* MAIN CONTENT */}
            <main className="container mx-auto px-4 py-12">
                <ProfileCard>
                    {/* Profil Resmi */}
                    <ProfileImage 
                        src="/src/assets/images/profile_photo.png" 
                        alt={`${t('profile_name')} ${t('profile_surname')}`}
                    />

                    {/* İsim ve Soyisim */}
                    <div className="text-center mb-6 animate-fade-in-delay-2">
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

                    {/* Açıklama */}
                    <div className="
                        text-center 
                        mb-8 
                        max-w-2xl 
                        mx-auto
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

                    {/* Sosyal Medya Linkleri */}
                    <SocialLinks />
                </ProfileCard>
            </main>

            {/* FOOTER */}
            <footer className="
                text-center 
                py-8 
                text-foreground/50 
                text-sm
                border-t
                border-border/30
            ">
                <p>© 2025 {t('profile_name')} {t('profile_surname')}. {t('rights_reserved')}.</p>
            </footer>
        </div>
        </PageTransition>
    ); 
};
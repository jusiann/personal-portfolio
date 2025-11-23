import {CrimsonWebBackground} from '../components/CrimsonWebBackground';
import {PageTransition} from '../components/PageTransition';
import {useLanguage} from '../lib/utils';
import {Link} from 'react-router-dom';

export const NotFound = () => {
    const {lang} = useLanguage();

    return (
        <PageTransition>
            <div className="
                    min-h-screen 
                    bg-black 
                    text-white 
                    overflow-x-hidden
                    flex
                    items-center
                    justify-center
            ">
                {/* BACKGROUND EFFECTS */}
                <CrimsonWebBackground />

                {/* 404 CONTENT */}
                <div className="relative z-10 text-center px-8">
                    <h1 className="
                        text-8xl 
                        md:text-9xl 
                        font-heading 
                        font-bold 
                        text-primary
                        mb-4
                        tracking-tight
                    ">
                        404
                    </h1>
                    <p className="
                        text-2xl 
                        md:text-3xl 
                        text-foreground/80 
                        mb-8
                    ">
                        {lang === 'tr' ? 'Sayfa Bulunamadı' : 'Page Not Found'}
                    </p>
                    <Link
                        to={`/${lang}`}
                        className="
                            inline-block
                            px-8
                            py-4
                            rounded-lg
                            bg-primary
                            text-white
                            font-semibold
                            text-lg
                            hover:bg-primary/90
                            transition-all
                            duration-300
                            hover:scale-105
                            shadow-lg
                            shadow-primary/30
                        "
                    >
                        {lang === 'tr' ? 'Ana Sayfaya Dön' : 'Go to Home'}
                    </Link>
                </div>
            </div>
        </PageTransition>
    );
};
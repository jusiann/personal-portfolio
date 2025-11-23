import {CrimsonWebBackground} from '../components/CrimsonWebBackground';
import {PageTransition} from '../components/PageTransition';
import {useLanguage} from '../lib/utils';

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
                        text-white/80
                    ">
                        {lang === 'tr' ? 'Sayfa Bulunamadı' : 'Page Not Found'}
                    </p>
                </div>
            </div>
        </PageTransition>
    );
};
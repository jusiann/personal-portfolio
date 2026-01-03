import { Link } from 'react-router-dom';
import CrimsonWebBackground from '../components/CrimsonWebBackground';

function NotFound() {
    return (
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
                        mb-8
                    ">
                    Page Not Found
                </p>
                
                <Link
                    to="/"
                    className="
                        px-8
                        py-4
                        rounded-lg
                        bg-primary
                        text-white
                        font-semibold
                        text-lg
                        hover:bg-primary/90
                        hover:scale-[1.02]
                        active:scale-95
                        shadow-lg
                        shadow-primary/30
                        transition-all
                        duration-300
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                    "
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
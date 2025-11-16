import {useEffect, useState} from 'react';
import {Sun, Moon} from 'lucide-react';
import {cn} from '../lib/utils';
import {motion, AnimatePresence} from 'framer-motion';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        setIsTransitioning(true);
        
        setTimeout(() => {
            if (isDarkMode) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
                setIsDarkMode(false);
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
                setIsDarkMode(true);
            }
        }, 350);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 800);
    };

    return (
        <>
            <button
                onClick={toggleTheme}
                className={cn(
                    "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-all duration-300",
                    "hover:scale-110 active:scale-95",
                    "focus:outline-hidden"
                )}
            >
                {
                    isDarkMode ? (
                        <Sun className='h-6 w-6 text-yellow-300' />
                    ) : (
                        <Moon className='h-6 w-6 text-blue-900' />
                    )
                }

                {/* <div className="relative w-6 h-6">
                    <Sun 
                        className={cn(
                            'absolute inset-0 h-6 w-6 text-yellow-300 transition-all duration-500',
                            isDarkMode ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                        )}
                    />
                    <Moon 
                        className={cn(
                            'absolute inset-0 h-6 w-6 text-blue-900 transition-all duration-500',
                            isDarkMode ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                        )}
                    />
                </div> */}

            </button>

            {/* Theme Transition Animation */}
            <AnimatePresence>
                {isTransitioning && (
                    <>
                        {/* Sol Üçgen (Ters) - Başta ortada, sonra sola gider */}
                        <motion.div
                            className="fixed inset-0 bg-background z-200 pointer-events-none"
                            style={{
                                clipPath: 'polygon(0% 0%, 50% 0%, 0% 100%)',
                            }}
                            initial={{ x: '0%' }}
                            animate={{ x: '-100%' }}
                            exit={{ x: '0%' }}
                            transition={{ 
                                duration: 0.7, 
                                ease: [0.65, 0, 0.35, 1],
                                delay: 0.1
                            }}
                        />
                        
                        {/* Sağ Üçgen (Düz) - Başta ortada, sonra sağa gider */}
                        <motion.div
                            className="fixed inset-0 bg-background z-200 pointer-events-none"
                            style={{
                                clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
                            }}
                            initial={{ x: '0%' }}
                            animate={{ x: '100%' }}
                            exit={{ x: '0%' }}
                            transition={{ 
                                duration: 0.7, 
                                ease: [0.65, 0, 0.35, 1],
                                delay: 0.1
                            }}
                        />
                        
                        {/* Kırmızı Diagonal Çizgi - Üçgenlerin ortak kenarı */}
                        <motion.div
                            className="fixed inset-0 pointer-events-none z-201"
                            style={{
                                background: 'linear-gradient(to bottom right, transparent calc(50% - 2px), rgb(220, 38, 38) calc(50% - 2px), rgb(220, 38, 38) calc(50% + 2px), transparent calc(50% + 2px))',
                                filter: 'drop-shadow(0 0 8px rgb(220, 38, 38))',
                            }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            exit={{ opacity: 1 }}
                            transition={{ 
                                duration: 0.3,
                                ease: "easeOut"
                            }}
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
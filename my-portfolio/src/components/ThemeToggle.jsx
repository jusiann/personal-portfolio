import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { createPortal } from 'react-dom';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleToggle = () => {
        setIsTransitioning(true);
        toggleTheme(() => {
            setTimeout(() => {
                setIsTransitioning(false);
            }, 800);
        });
    };

    return (
        <>

            {/* THEME TOGGLE BUTTON */}
            <button
                onClick={handleToggle}
                className={cn(
                    "p-2 rounded-full transition-all duration-300",
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

            {/* THEME TRANSITION - Rendered via Portal to ensure it covers the entire viewport */}
            {createPortal(
                <AnimatePresence>
                    {
                        isTransitioning && (
                            <>
                                {/* LEFT TRIANGLE */}
                                <motion.div
                                    className="fixed inset-0 bg-background pointer-events-none"
                                    style={{
                                        clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                                        zIndex: 9999,
                                    }}
                                    initial={{ x: '0%' }}
                                    animate={{ x: '-100%' }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.65, 0, 0.35, 1],
                                        delay: 0.4
                                    }}
                                />

                                {/* RIGHT TRIANGLE */}
                                <motion.div
                                    className="fixed inset-0 bg-background pointer-events-none"
                                    style={{
                                        clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
                                        zIndex: 9999,
                                    }}
                                    initial={{ x: '0%' }}
                                    animate={{ x: '100%' }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.65, 0, 0.35, 1],
                                        delay: 0.4
                                    }}
                                />

                                {/* RED DIAGONAL LINE */}
                                <motion.div
                                    className="fixed inset-0 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(to bottom right, transparent calc(50% - 2px), rgb(220, 38, 38) calc(50% - 2px), rgb(220, 38, 38) calc(50% + 2px), transparent calc(50% + 2px))',
                                        filter: 'drop-shadow(0 0 8px rgb(220, 38, 38))',
                                        zIndex: 10000,
                                    }}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                        delay: 0.3
                                    }}
                                />
                            </>
                        )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};
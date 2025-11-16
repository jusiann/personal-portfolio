import {useEffect, useState} from 'react';
import {Sun, Moon} from 'lucide-react';
import {cn} from '../lib/utils';
import {motion, AnimatePresence} from 'framer-motion';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

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
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
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
    );
};
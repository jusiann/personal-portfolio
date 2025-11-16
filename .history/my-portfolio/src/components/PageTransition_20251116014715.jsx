import { motion } from 'framer-motion';

export const PageTransition = ({ children }) => {
    return (
        <>
            {children}
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-background origin-top-right z-[100] pointer-events-none"
                initial={{ scaleX: 0, scaleY: 0 }}
                animate={{ scaleX: 0, scaleY: 0 }}
                exit={{ scaleX: 1, scaleY: 1 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                    transformOrigin: 'top right',
                    clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-primary/20 origin-top-right z-[99] pointer-events-none"
                initial={{ scaleX: 0, scaleY: 0 }}
                animate={{ scaleX: 0, scaleY: 0 }}
                exit={{ scaleX: 1, scaleY: 1 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1
                }}
                style={{
                    transformOrigin: 'top right',
                    clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'
                }}
            />
        </>
    );
};

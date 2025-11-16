import { motion } from 'framer-motion';

export const PageTransition = ({ children }) => {
    return (
        <>
            {children}
            
            {/* Top Right Triangle - Sağ üst üçgen */}
            <motion.div
                className="fixed inset-0 bg-primary z-[100] pointer-events-none"
                style={{
                    clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
                }}
                initial={{ x: '0%', y: '0%' }}
                animate={{ x: '100%', y: '-100%' }}
                exit={{ x: '0%', y: '0%' }}
                transition={{ 
                    duration: 0.7, 
                    ease: [0.76, 0, 0.24, 1]
                }}
            />
            
            {/* Bottom Left Triangle - Sol alt üçgen */}
            <motion.div
                className="fixed inset-0 bg-background z-[99] pointer-events-none shadow-[0_0_50px_rgba(220,38,38,0.5)]"
                style={{
                    clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
                    borderTop: '2px solid',
                    borderColor: 'hsl(var(--primary))',
                }}
                initial={{ x: '0%', y: '0%' }}
                animate={{ x: '-100%', y: '100%' }}
                exit={{ x: '0%', y: '0%' }}
                transition={{ 
                    duration: 0.7, 
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.05
                }}
            />
        </>
    );
};

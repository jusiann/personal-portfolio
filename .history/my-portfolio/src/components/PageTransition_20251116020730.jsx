import { motion } from 'framer-motion';

export const PageTransition = ({ children }) => {
    return (
        <>
            {children}
            
            {/* Right Door - Sağ kapı (siyah üçgen kırmızı border) */}
            <motion.div
                className="fixed inset-0 bg-black z-100 pointer-events-none"
                style={{
                    clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
                    boxShadow: '0 0 30px rgba(220, 38, 38, 0.8), inset 0 0 50px rgba(220, 38, 38, 0.3)',
                    borderLeft: '3px solid rgb(220, 38, 38)',
                }}
                initial={{ x: '0%' }}
                animate={{ x: '100%' }}
                exit={{ x: '0%' }}
                transition={{ 
                    duration: 0.8, 
                    ease: [0.76, 0, 0.24, 1]
                }}
            />
            
            {/* Left Door - Sol kapı (siyah üçgen kırmızı border) */}
            <motion.div
                className="fixed inset-0 bg-black z-99 pointer-events-none"
                style={{
                    clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
                    boxShadow: '0 0 30px rgba(220, 38, 38, 0.8), inset 0 0 50px rgba(220, 38, 38, 0.3)',
                    borderRight: '3px solid rgb(220, 38, 38)',
                }}
                initial={{ x: '0%' }}
                animate={{ x: '-100%' }}
                exit={{ x: '0%' }}
                transition={{ 
                    duration: 0.8, 
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.05
                }}
            />
            
            {/* Diagonal Line Glow - Kesme çizgisi parıltısı */}
            <motion.div
                className="fixed inset-0 pointer-events-none z-98"
                style={{
                    background: 'linear-gradient(135deg, transparent 49.5%, rgb(220, 38, 38) 49.5%, rgb(220, 38, 38) 50.5%, transparent 50.5%)',
                    boxShadow: '0 0 50px rgba(220, 38, 38, 0.6)',
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ 
                    duration: 0.5,
                    ease: "easeOut"
                }}
            />
        </>
    );
};

import { motion } from 'framer-motion';

export const PageTransition = ({ children }) => {
    return (
        <>
            {children}
            
            {/* Sol Alt Üçgen - Sola kayar */}
            <motion.div
                className="fixed inset-0 bg-black z-100 pointer-events-none"
                style={{
                    clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
                }}
                initial={{ x: '0%' }}
                animate={{ x: '-100%' }}
                exit={{ x: '0%' }}
                transition={{ 
                    duration: 0.7, 
                    ease: [0.65, 0, 0.35, 1]
                }}
            />
            
            {/* Sağ Üst Üçgen - Sağa kayar */}
            <motion.div
                className="fixed inset-0 bg-black z-100 pointer-events-none"
                style={{
                    clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
                }}
                initial={{ x: '0%' }}
                animate={{ x: '100%' }}
                exit={{ x: '0%' }}
                transition={{ 
                    duration: 0.7, 
                    ease: [0.65, 0, 0.35, 1]
                }}
            />
            
            {/* Kırmızı Diagonal Çizgi - Üçgenlerin ortak kenarı */}
            <motion.div
                className="fixed inset-0 pointer-events-none z-[101]"
                style={{
                    background: 'linear-gradient(to bottom right, transparent calc(50% - 2px), rgb(220, 38, 38) calc(50% - 2px), rgb(220, 38, 38) calc(50% + 2px), transparent calc(50% + 2px))',
                    filter: 'drop-shadow(0 0 8px rgb(220, 38, 38))',
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ 
                    duration: 0.4,
                    ease: "easeOut"
                }}
            />
        </>
    );
};

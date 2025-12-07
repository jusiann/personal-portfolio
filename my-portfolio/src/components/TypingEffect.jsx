import { useState, useEffect } from 'react';

export const TypingEffect = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentFullText = texts[currentTextIndex];

        if (isPaused) {
            const pauseTimeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseTime);
            return () => clearTimeout(pauseTimeout);
        }

        if (isDeleting) {
            if (displayText === '') {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            } else {
                const timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, deletingSpeed);
                return () => clearTimeout(timeout);
            }
        } else {
            if (displayText === currentFullText) {
                setIsPaused(true);
            } else {
                const timeout = setTimeout(() => {
                    setDisplayText(currentFullText.slice(0, displayText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            }
        }
    }, [displayText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className="inline-flex items-center">
            <span>{displayText}</span>
            <span className="animate-pulse text-primary ml-0.5">|</span>
        </span>
    );
};

import React, { useState, useEffect } from 'react';
import './TypingText.css'; // Import the CSS file for styling

const TypingText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const typingTimer = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayText(text.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }
        }, 100); // Adjust typing speed by changing the timeout duration

        return () => {
            clearTimeout(typingTimer);
        };
    }, [currentIndex, text]);

    return (
        <div className="typing-text">
            {displayText}
            <span className="cursor">|</span>
        </div>
    );
};

export default TypingText;

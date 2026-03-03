import React, { useEffect, useRef } from 'react';

const CookiePolicy = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Създаваме скрипт елемента
        const script = document.createElement('script');
        script.id = 'CookieDeclaration';
        script.src = 'https://consent.cookiebot.com/317afcbf-af2b-4e79-869f-9fd85622a37c/cd.js'; // Увери се, че това е твоят ID
        script.type = 'text/javascript';
        script.async = true;

        // Закачаме го към контейнера
        if (containerRef.current) {
            containerRef.current.appendChild(script);
        }

        return () => {
            // Изчистваме при напускане на страницата, за да няма дублиране
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="container mt-5">
            <h1>Политика на бисквитките</h1>
            <div ref={containerRef}></div>
        </div>
    );
};

export default CookiePolicy;
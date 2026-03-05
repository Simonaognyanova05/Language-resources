import React, { useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";

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
        <>
            <Helmet>
                <title>Политика на бисквитките | Електронни ресурси за сваляне</title>
                <meta name="description" content="Това е описанието на моя сайт, което ще се появи в резултатите на Google." />
                <link rel="canonical" href="https://language-center-varna.eu/cart" />
            </Helmet>

            <div className="container mt-5">
                <h1>Политика на бисквитките</h1>
                <div className="container" style={{ marginTop: "120px", marginBottom: "60px", maxWidth: "900px" }}>
                    <h1 className="mb-4">ПОЛИТИКА ЗА БИСКВИТКИ</h1>

                    <p>
                        Последна актуализация: 05.03.2026
                    </p>

                    <h4 className="mt-4">1. КАКВО СА БИСКВИТКИТЕ</h4>
                    <p>
                        Бисквитките са малки текстови файлове, които се съхраняват на устройството на
                        потребителя при посещение на уебсайта. Те помагат сайтът да функционира правилно и
                        подобряват потребителското изживяване.
                    </p>

                    <h4 className="mt-4">2. КАКВИ БИСКВИТКИ ИЗПОЛЗВАМЕ</h4>
                    <p>
                        Сайтът може да използва следните видове бисквитки:<br />
                        Необходими бисквитки – позволяват основни функции на сайта, като навигация и
                        достъп до защитени секции.<br />
                        Функционални бисквитки – запомнят предпочитанията на потребителя.<br />
                        Аналитични бисквитки – използват се за събиране на статистическа информация за
                        използването на сайта.
                    </p>

                    <h4 className="mt-4">3. УПРАВЛЕНИЕ НА БИСКВИТКИТЕ</h4>
                    <p>
                        Потребителите могат да контролират и изтриват бисквитките чрез настройките на своя
                        браузър.
                        <br />
                        Ограничаването на бисквитките може да повлияе на функционалността на сайта.
                    </p>

                    <h4 className="mt-4">4. ПРОМЕНИ В ПОЛИТИКАТА</h4>
                    <p>
                        Тази политика може да бъде актуализирана при промени в законодателството или
                        функционалността на сайта.
                    </p>
                </div>
                <div ref={containerRef}></div>
            </div>

        </>
    );
};

export default CookiePolicy;
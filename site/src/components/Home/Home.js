import './Home.css';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLastThree } from "../../services/getLastThree";
import Testimonial from "../Testimonial/Testimonial";
import ProductItem from './HomeItem';

export default function Home() {

    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const products = await getLastThree();
                setLatestProducts(products);
            } catch (err) {
                console.error(err);
            }
        };

        loadProducts();
    }, []);

    return (
        <>
            <Helmet>
                <title>Учебен център Варна | Електронни ресурси за сваляне</title>
                <meta name="description" content="Това е описанието на моя сайт, което ще се появи в резултатите на Google." />
                <link rel="canonical" href="https://language-center-varna.eu/" />
            </Helmet>
            {/* HERO SECTION */}
            <section
                className="hero-section py-5"
                style={{
                    background: "linear-gradient(135deg, #B21F7A, #6A1B9A)",
                    color: "white",
                    marginTop: "50px"
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">


                        <div className="col-lg-10 col-xl-9 hero-content text-center">

                            <div className="hero-text-wrapper">

                                <h1 className="fw-bold mb-3">
                                    Учебен център Варна
                                </h1>

                                <h3 className="fw-bold mb-4 hero-subtitle">
                                    Електронни ресурси за сваляне
                                </h3>

                                <p className="lead">
                                    Учебен център Варна представя своята колекция от образователни ресурси.
                                </p>

                                <p className="lead">
                                    Практически тестове, наръчници и планери за ученици, учители и самостоятелно обучаващи се.
                                    Създадени от преподаватели за реална подготовка и видими резултати.
                                </p>

                                <p className="lead hero-highlight">
                                    Регистрирай се сега и ще получиш безплатно един материал!
                                </p>

                                <div className="mt-4 hero-buttons">
                                    <Link to="/products" className="btn btn-light btn-lg me-3">
                                        Каталог
                                    </Link>

                                    <Link to="/contacts" className="btn btn-outline-light btn-lg">
                                        Пишете ни
                                    </Link>
                                </div>

                            </div>
                        </div>

                        {/* 
                        <div className="col-lg-6 text-center mt-4 mt-lg-0">
                            <img
                                src="images/img4.jfif"
                                alt="education"
                                className="img-fluid rounded shadow-lg"
                                style={{ maxWidth: "250px" }}
                            />
                        </div> */}

                    </div>
                </div>
            </section>

            {/* LATEST PRODUCTS */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">Най-нови материали</h2>
                    <p style={{ textAlign: "center", marginBottom: "20px" }}>Може да намерите всички материали в нашия каталог</p>

                    <div className="row">
                        {latestProducts.map(product => (
                            <ProductItem product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-5">Защо да изберете нас?</h2>
                    <p>Ние създадохме първия по рода си електронен магазин, който обединява тестове, практически наръчници и стратегии за ефективно учене в една цялостна система. Нашите продукти са разработени специално за ученици, учители и родители, които търсят реални резултати, а не просто теория.
                        Ние сме новатори в този подход – досега на пазара не са съществували подобни цялостни решения, съчетаващи самоподготовка, диагностика на знанията и изграждане на умения за учене.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-box">
                                <div className="feature-img">
                                    <img src="/images/flexibleLearning.jfif" alt="Гъвкаво обучение" />
                                </div>
                                <h5>Гъвкаво обучение</h5>
                                <p>Учи когато и където пожелаеш.

                                    Нашите материали са изцяло дигитални и достъпни по всяко време. Това позволява:

                                    учене със собствено темпо без излишен стрес;

                                    преговор и упражнение точно когато има нужда;

                                    лесно съчетаване с училище, работа или допълнителни занимания;

                                    достъп от телефон, таблет или компютър.

                                    Създаваме условия за истинска персонализация на ученето, а не за обучение „по шаблон“.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-box">
                                <div className="feature-img">
                                    <img src="/images/IndependentPreparation.jfif" alt="Самостоятелна подготовка" />
                                </div>
                                <h5>Самостоятелна подготовка с ясна методика</h5>
                                <p>Получаваш програма и инструкции от нас.

                                    Всеки тест и наръчник е структуриран като завършена система:

                                    последователни стъпки как да се учи ефективно;

                                    практически техники за запаметяване, разбиране и прилагане;

                                    упражнения за изграждане на самостоятелност и увереност;

                                    готови модели, които учителите могат директно да използват в работата си.

                                    Не просто даваме съдържание — ние учим как се учи успешно.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-box">
                                <div className="feature-img">
                                    <img src="/images/officialCertificate.jfif" alt="Официален сертификат" />
                                </div>
                                <h5>Официална подготовка и измерими резултати</h5>
                                <p>Нашите тестове служат като реална диагностика на знанията:

                                    проверяваш напредъка си обективно;

                                    виждаш конкретни силни страни и пропуски;

                                    подготвяш се уверено за изпити, външни оценявания и състезания;

                                    работиш по модели, близки до реалната изпитна среда.

                                    Резултатът е по-добра подготовка, по-висока мотивация и ясна посока за развитие.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Testimonial />
        </>
    );
}
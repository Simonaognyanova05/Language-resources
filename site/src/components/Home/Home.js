import './Home.css';
import { Link } from "react-router-dom";
import Testimonial from "../Testimonial/Testimonial";

export default function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <section
                className="py-5"
                style={{
                    background: "linear-gradient(135deg, #B21F7A, #6A1B9A)",
                    color: "white",
                    marginTop: "50px"
                }}
            >
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <h1 className="fw-bold mb-4">
                                Учебен център Варна
                            </h1>

                            <p className="lead">
                                Обучение по 23 езика с гъвкави графици и
                                модерна система за самостоятелна подготовка.
                            </p>

                            <div className="mt-4">
                                <Link
                                    to="/products"
                                    className="btn btn-light btn-lg me-3"
                                >
                                    Разгледай продуктите
                                </Link>

                                <Link
                                    to="/contacts"
                                    className="btn btn-light btn-lg me-3"
                                >
                                    Пишете ни
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center mt-4 mt-lg-0">
                            <img
                                src="images/img4.jfif"
                                alt="education"
                                className="img-fluid rounded shadow-lg"
                                style={{ maxWidth: "250px" }}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-5">Защо да изберете нас?</h2>
                    <p>Ние създадохме първия по рода си електронен магазин, който обединява тестове, практически наръчници и стратегии за ефективно учене в една цялостна система. Нашите продукти са разработени специално за ученици, учители и родители, които търсят реални резултати, а не просто теория.
                        Ние сме новатори в този подход – досега на пазара не са съществували подобни цялостни решения, съчетаващи самоподготовка, диагностика на знанията и изграждане на умения за учене.</p>
                    <div className="row">
                        <div className="col-md-3">
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

                        <div className="col-md-3">
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

                        <div className="col-md-3">
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
                        <div className="col-md-3">
                            <div className="feature-box">
                                <div className="feature-img">
                                    <img src="/images/ourMission.jfif" alt="Нашата мисия" />
                                </div>
                                <h5>Нашата мисия</h5>
                                <p>
                                    Да променим начина, по който учениците учат, а учителите преподават — чрез иновативни, практични и лесно приложими образователни решения, които досега не са били достъпни на българския пазар.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Testimonial />
        </>
    );
}
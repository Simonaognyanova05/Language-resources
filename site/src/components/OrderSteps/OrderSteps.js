import 'bootstrap-icons/font/bootstrap-icons.css';
import { Helmet } from "react-helmet";
import './OrderSteps.css';

export default function OrderSteps() {
    return (
        <>
            <Helmet>
                <title>Стъпки за поръчка | Електронни ресурси за сваляне</title>
                <meta name="description" content="Това е описанието на моя сайт, което ще се появи в резултатите на Google." />
                <link rel="canonical" href="https://language-center-varna.eu/orderSteps" />
            </Helmet>

            <section className="order-wrapper py-5">
                <div className="container">

                    {/* ===== HEADER ===== */}
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Как да поръчате?</h2>
                        <p className="text-muted">
                            Изберете ресурс, който ще ви спести време и ще внесе яснота в ученето. Малки стъпки водят до големи резултати.
                            <br />
                            Само в 4 лесни стъпки получавате достъп до материалите
                        </p>
                    </div>

                    {/* ===== STEPS ===== */}
                    <div className="row text-center mb-5">

                        <div className="col-md-3 mb-4">
                            <div className="step-box">
                                <i className="bi bi-search step-icon"></i>
                                <h5>1. Изберете продукт</h5>
                                <p>Разгледайте нашите материали и изберете подходящия за вас.</p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="step-box">
                                <i className="bi bi-cart-check step-icon"></i>
                                <h5>2. Добавете в количката</h5>
                                <p>Натиснете „Добави“ и преминете към поръчка.</p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="step-box">
                                <i className="bi bi-credit-card step-icon"></i>
                                <h5>3. Потвърдете плащането</h5>
                                <p>Ще получите информация за банков превод и потвърждение.</p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="step-box">
                                <i className="bi bi-download step-icon"></i>
                                <h5>4. Изтеглете файла</h5>
                                <p>След проверка материалите ще са достъпни в профила ви.</p>
                            </div>
                        </div>

                    </div>

                    {/* ===== TECH INFO ===== */}
                    <div className="light-box p-4 rounded-4 text-center">
                        <h3 className="fw-bold mb-3">Техническо уточнение</h3>
                        <p>
                            След покупка ще получите автоматичен достъп за изтеглвне на файла. Всички материали са в удобен PDF формат и могат да се използват многократно.
                            <br /><br /> <strong> Важно:</strong> Поради данъчни регулации, приемаме плащания само от български банкови сметки.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}
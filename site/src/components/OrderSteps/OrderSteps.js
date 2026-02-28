import 'bootstrap-icons/font/bootstrap-icons.css';
import './OrderSteps.css'

export default function OrderSteps() {
    return (
        <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">Как да поръчате?</h2>
                    <p className="text-muted">
                        Само в 4 лесни стъпки получавате достъп до материалите
                    </p>
                </div>

                <div className="row text-center">

                    {/* Step 1 */}
                    <div className="col-md-3 mb-4">
                        <div className="step-box p-4 shadow-sm rounded-4 h-100 bg-white">
                            <div className="step-icon mb-3">
                                <i className="bi bi-search fs-1 text-purple"></i>
                            </div>
                            <h5 className="fw-bold">1. Изберете продукт</h5>
                            <p className="text-muted">
                                Разгледайте нашите материали и изберете този,
                                който отговаря на вашите нужди.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="col-md-3 mb-4">
                        <div className="step-box p-4 shadow-sm rounded-4 h-100 bg-white">
                            <div className="step-icon mb-3">
                                <i className="bi bi-cart-check fs-1 text-purple"></i>
                            </div>
                            <h5 className="fw-bold">2. Добавете в количката</h5>
                            <p className="text-muted">
                                Натиснете бутона „Добави“ и преминете към поръчка.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="col-md-3 mb-4">
                        <div className="step-box p-4 shadow-sm rounded-4 h-100 bg-white">
                            <div className="step-icon mb-3">
                                <i className="bi bi-credit-card fs-1 text-purple"></i>
                            </div>
                            <h5 className="fw-bold">3. Потвърдете плащането</h5>
                            <p className="text-muted">
                                След като сте добавили продуктите в количката, ще преминете към заявка за плащане.
                                Когато попълните данните си, ще намерите информация за банкова сметка, неоходимо е да направите банков превод, за да заплатите.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="col-md-3 mb-4">
                        <div className="step-box p-4 shadow-sm rounded-4 h-100 bg-white">
                            <div className="step-icon mb-3">
                                <i className="bi bi-download fs-1 text-purple"></i>
                            </div>
                            <h5 className="fw-bold">4. Изтеглете файла</h5>
                            <p className="text-muted">
                                Когато поръчката е заявена, ние ще проверим дали плащането е извършено успешно и когато се уверим, че всичко е наред, в профила си ще намерите закупените материали.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
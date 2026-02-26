export default function About() {
    return (
        <section
            className="py-5"
            style={{
                background: "linear-gradient(180deg, #f8f9fa 50%, #dcd0ea 50%)"
            }}
        >
            <div className="container">
                <div className="row align-items-center">

                    {/* Text Content */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h1 className="fw-bold display-5 mb-4">
                            По 21 езика в Учебен център Варна
                        </h1>

                        <p className="lead text-muted mb-4">
                            Удобни графици, съобразени с вашето време.
                        </p>

                        <p style={{ lineHeight: "1.8" }}>
                            През 2006 г. започнахме пътуването си с една цел – да направим
                            езиковото обучение достъпно, ефективно и забавно за всички
                            възрасти. Присъединете се към нас и подобрете езиковите си
                            умения по ваш избор – с гъвкави курсове в групи или
                            индивидуално!
                        </p>

                        <button
                            className="btn mt-3 px-4 py-2"
                            style={{
                                background: "linear-gradient(135deg, #B21F7A, #6A1B9A)",
                                color: "white",
                                borderRadius: "30px",
                                border: "none"
                            }}
                        >
                            Научи повече
                        </button>
                    </div>

                    {/* Image */}
                    <div className="col-lg-6 text-center">
                        <img
                            src="/images/about.jpg"
                            alt="about"
                            className="img-fluid"
                            style={{
                                maxHeight: "420px"
                            }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
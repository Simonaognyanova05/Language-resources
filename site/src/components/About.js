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
                            Нашата мисия
                        </h1>

                        <p className="lead text-muted mb-4">
                            Удобни графици, съобразени с вашето време.
                        </p>

                        <p style={{ lineHeight: "1.8" }}>
                            Да променим начина, по който учениците учат, а учителите преподават — чрез иновативни, практични и лесно приложими образователни решения, които досега не са били достъпни на българския пазар.
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
                            src="/images/ourMission.jfif"
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
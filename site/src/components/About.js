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

            {/* ===== FOR WHO + VIDEO ===== */}
            <div className="audience-section mb-5">
                <div className="audience-card">

                    <div className="row align-items-center g-5">

                        {/* VIDEO */}
                        <div className="col-lg-6">
                            <div className="video-modern">
                                <video
                                    controls
                                    poster="/images/video-cover.jpg"
                                >
                                    <source src="/images/video.mp4" type="video/mp4" />
                                    Вашият браузър не поддържа видео.
                                </video>
                            </div>
                        </div>

                        {/* TEXT */}
                        <div className="col-lg-6">
                            <h3 className="audience-title mb-4">
                                За кого са предназначени?
                            </h3>

                            <div className="audience-list">

                                <div className="audience-item">
                                    <i className="bi bi-mortarboard-fill"></i>
                                    <span>Ученици, които искат да се организират и да напредват по-уверено</span>
                                </div>

                                <div className="audience-item">
                                    <i className="bi bi-journal-text"></i>
                                    <span>Учители, които търсят готови и работещи инструменти</span>
                                </div>

                                <div className="audience-item">
                                    <i className="bi bi-people-fill"></i>
                                    <span>Родители, които искат практична подкрепа у дома</span>
                                </div>

                                <div className="audience-item">
                                    <i className="bi bi-lightbulb-fill"></i>
                                    <span>Самоподготвящи се, които ценят структурата и ясния подход</span>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* ===== IMAGE GALLERY ===== */}
            <div className="mb-5">
                <h3 className="fw-bold text-center mb-4">Нашите сертификати</h3>

                <div className="row gallery-row">

                    <div className="col-md-4 mb-4">
                        <div className="gallery-img">
                            <img src="/images/ourMaterials1.jfif" alt="Материал 1" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="gallery-img">
                            <img src="/images/ourMaterials2.jfif" alt="Материал 2" />
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="gallery-img">
                            <img src="/images/ourMaterials3.jfif" alt="Материал 3" />
                        </div>
                    </div>

                </div>
            </div>


        </section>
    );
}
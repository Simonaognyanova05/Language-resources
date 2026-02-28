export default function Contacts() {
    return (
        <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-6">
                        Свържете се с нас
                    </h2>
                    <p className="text-muted">
                        Изпратете запитване и ще се свържем с вас възможно най-скоро
                    </p>
                </div>

                <div className="row shadow-lg rounded-4 overflow-hidden bg-white">

                    {/* Contact Form */}
                    <div className="col-lg-6 p-5">
                        <div
                            className="mb-4 p-3 rounded-4"
                            style={{
                                backgroundColor: "#f8f9fa",
                                borderLeft: "4px solid #6A1B9A"
                            }}
                        >
                            <p className="mb-1 fw-semibold">
                                Можете да ни пишете директно на:
                            </p>

                            <a
                                href="mailto:varnaeducate@gmail.com"
                                className="text-decoration-none"
                                style={{
                                    color: "#B21F7A",
                                    fontWeight: "600",
                                    fontSize: "16px"
                                }}
                            >
                                <i className="bi bi-envelope-fill me-2"></i>
                                varnaeducate@gmail.com
                            </a>
                        </div>

                        <form>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control rounded-pill p-3"
                                    placeholder="Вашето име"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control rounded-pill p-3"
                                    placeholder="Имейл адрес"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control rounded-pill p-3"
                                    placeholder="Телефон"
                                />
                            </div>

                            <div className="mb-4">
                                <textarea
                                    className="form-control rounded-4 p-3"
                                    rows="4"
                                    placeholder="Вашето съобщение"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn w-100 py-3"
                                style={{
                                    background: "linear-gradient(135deg, #B21F7A, #6A1B9A)",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "50px",
                                    fontWeight: "600",
                                    transition: "0.3s"
                                }}
                            >
                                Изпрати съобщение
                            </button>
                        </form>
                    </div>

                    {/* Google Map */}
                    <div className="col-lg-6 p-0">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Varna+Bulgaria"
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "500px",
                                border: 0
                            }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial/Testimonial";

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
                                    className="btn btn-outline-light btn-lg"
                                >
                                    Свържи се с нас
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

                    <div className="row">

                        <div className="col-md-4 mb-4">
                            <div className="card border-0 shadow h-100 p-4">
                                <h5>Гъвкаво обучение</h5>
                                <p>
                                    Учи когато и където пожелаеш.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card border-0 shadow h-100 p-4">
                                <h5>Самостоятелна подготовка</h5>
                                <p>
                                    Получаваш програма и инструкции от нас.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card border-0 shadow h-100 p-4">
                                <h5>Официален сертификат</h5>
                                <p>
                                    Явяваш се на изпит, когато си готов.
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
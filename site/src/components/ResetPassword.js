import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { resetPassword } from "../services/resetPassword";

export default function ResetPassword() {
    const navigate = useNavigate();

    const resetHandler = async (e) => {
        e.preventDefault();

        const { email } = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await resetPassword(email);
            navigate('/login');
        } catch (e) {
            alert("Възникна грешка, моля опитайте по-късно!");
        }
    }
    return (
        <>
            <Helmet>
                <title>Промяна на парола | Електронни ресурси за сваляне</title>
                <meta name="description" content="Това е описанието на моя сайт, което ще се появи в резултатите на Google." />
                <link rel="canonical" href="https://language-center-varna.eu/forgottenPass" />
            </Helmet>

            <section className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow p-4">
                            <h3 className="text-center mb-4">Забравена парола</h3>

                            <form onSubmit={resetHandler}>
                                {/* Email */}
                                <div className="form-group mb-3">
                                    <label>Въведете имейла, с който сте регистрирани:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        required
                                    />
                                </div>


                                {/* Forgot Password */}
                                <div className="text-end mb-3">
                                    <Link to="/login" className="text-decoration-none">
                                        Обратно към влизане
                                    </Link>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="btn w-100 py-3"
                                    style={{
                                        background: "linear-gradient(135deg, #B21F7A, #6A1B9A)",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "50px",
                                        fontWeight: "600",
                                        transition: "0.3s",
                                    }}
                                    onMouseOver={(e) =>
                                        (e.target.style.opacity = "0.9")
                                    }
                                    onMouseOut={(e) =>
                                        (e.target.style.opacity = "1")
                                    }
                                >
                                    Промени парола
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

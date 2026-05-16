import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAuth } from "../contexts/AuthContext";
import { register } from "../services/register";

export default function Register() {
    const navigate = useNavigate();
    const { onRegister } = useAuth();

    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const { email, password, rePass } = Object.fromEntries(formData);

        if (password !== rePass) {
            alert("Паролите не съвпадат!");
            return;
        }

        if (password.length < 6) {
            alert("Паролата трябва да съдържа минимум 6 символа!");
            return;
        }
        try {
            const result = await register(email, password);
            alert("Успешна регистрация!");
            onRegister(result);
            navigate('/');
        } catch (error) {
            console.log(error); // Виж в конзолата на браузъра точната грешка!
            alert("Грешка: " + error.message);
        }
    }
    return (
        <>
            <Helmet>
                <title>Регистрация | Електронни ресурси за сваляне</title>
                <meta name="description" content="Това е описанието на моя сайт, което ще се появи в резултатите на Google." />
                <link rel="canonical" href="https://language-center-varna.eu/register" />
            </Helmet>

            <section className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow p-4">
                            <h3 className="text-center mb-4">Регистрация</h3>

                            <form onSubmit={registerHandler}>
                                {/* Email */}
                                <div className="form-group mb-3">
                                    <label>Имейл</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div className="form-group mb-3">
                                    <label>Парола</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        required
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Потвърдете паролата</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="rePass"
                                        required
                                    />
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
                                    Регистрация
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

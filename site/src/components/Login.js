import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { login } from "../services/login";

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const { email, password } = Object.fromEntries(formData);

        try {
            const result = await login(email, password);
            if (!Boolean(result)) {
                alert("Възникна грешка при влизане, моля опитайте по-късно!");
            }
            alert("Успешно влизане!");
            onLogin(result);
            navigate('/');
        } catch (error) {
            alert("Възникна грешка при влизане, моля опитайте по-късно!");
        }
    }
    return (
        <section className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow p-4">
                        <h3 className="text-center mb-4">Влизане в профил</h3>

                        <form onSubmit={loginHandler}>
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

                            {/* Forgot Password */}
                            <div className="text-end mb-3">
                                <a href="/forgot-password" className="text-decoration-none">
                                    Забравена парола?
                                </a>
                            </div>

                            {/* Submit */}
                            <button type="submit" className="btn btn-dark w-100">
                                Вход
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

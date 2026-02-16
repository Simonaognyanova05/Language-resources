import { Link, useNavigate } from "react-router-dom";
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
                            <button type="submit" className="btn btn-dark w-100">
                                Промени парола
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

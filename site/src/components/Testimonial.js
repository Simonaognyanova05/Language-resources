import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { writeComment } from "../services/writeComment";


export default function Testimonial() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {name, comment} = Object.fromEntries(formData);

        try {
            const result = await writeComment({name, comment});

            if (result.status == 200) {
                alert("Коментарът е създаден успешно!");
                navigate('/');
                e.target.reset();
            } else {
                alert("Възникна грешка, моля, опитайте по-късно!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="py-5">
            <div className="container">

                <h2 className="text-center mb-5">
                    Какво казват нашите клиенти
                </h2>

                {/* Testimonials Grid */}
                <div className="row mb-5">

                    <div className="col-md-6 mb-4">
                        <div className="card border-0 shadow p-4 h-100">
                            <h5>Anna Petrova</h5>
                            <p className="text-muted">
                                Страхотно обслужване и отлично структурирани материали!
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card border-0 shadow p-4 h-100">
                            <h5>Ivan Georgiev</h5>
                            <p className="text-muted">
                                Удобен формат на обучение и ясни инструкции.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Comment Form */}
                <div className="card border-0 shadow-lg p-5">
                    <h4 className="mb-4 text-center">
                        Оставете вашето мнение
                    </h4>

                    <form onSubmit={handleSubmit}>
                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control form-control-lg"
                                    placeholder="Вашето име"
                                />
                            </div>

                            <div className="col-md-12 mb-3">
                                <textarea
                                    name="comment"
                                    rows="4"
                                    className="form-control form-control-lg"
                                    placeholder="Вашият коментар..."
                                />
                            </div>

                        </div>

                        <button
                            type="submit"
                            className="btn btn-lg w-100"
                            style={{
                                background: "linear-gradient(135deg, #B21F7A, #6A1B9A)",
                                color: "white",
                                fontWeight: "600"
                            }}
                        >
                            Изпрати коментар
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
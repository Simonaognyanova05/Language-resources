import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { createProduct } from "../services/createProduct";

export default function CreateProduct() {
    const navigate = useNavigate();

    const createHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { title, description, price, img1, img2, img3, img4, img5, img6, img7, img8, productLink } = Object.fromEntries(formData);

        try {
            const result = await createProduct(title, description, price, img1, img2, img3, img4, img5, img6, img7, img8, productLink);

            if (result.status == 200) {
                navigate('/products');
            } else {
                alert("Възникна грешка, моля опитайте по-късно!");
            }
        } catch (error) {
            alert("Възникна грешка, моля опитайте по-късно!");
        }
    }
    return (
        <>
            <Helmet>
                <title>Създаване на продукт | Електронни ресурси за сваляне</title>
                <meta name="description" content="Това е описанието на моя сайт, което ще се появи в резултатите на Google." />
                <link rel="canonical" href="https://language-center-varna.eu/" />
            </Helmet>

            <section className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow p-4">
                            <h3 className="text-center mb-4">Създаване на продукт</h3>

                            <form onSubmit={createHandler}>
                                <div className="form-group mb-3">
                                    <label>Заглавие</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        required
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Описание на продукта</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="description"
                                        required
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Цена: </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="price"
                                        step="0.01"
                                        min="0"
                                        required
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Изображение 1</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img1"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 2</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img2"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 3</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img3"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 4</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img4"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 5</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img5"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 6</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img6"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 7</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img7"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 8</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img8"
                                        required
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Линк към продукт</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="productLink"
                                        required
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
                                        transition: "0.3s",
                                    }}
                                    onMouseOver={(e) =>
                                        (e.target.style.opacity = "0.9")
                                    }
                                    onMouseOut={(e) =>
                                        (e.target.style.opacity = "1")
                                    }
                                >
                                    Създаване
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
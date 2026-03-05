import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { getProductById } from "../services/getProductById";
import { editProduct } from "../services/editProduct";

export default function EditProduct() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        title: "", description: "", price: "", img1: "", img2: "", img3: "", img4: "", img5: "", img6: "", img7: "", img8: "", productLink: ""
    });

    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const data = await getProductById(id);
                if (data) setProduct(data);
            } catch (err) {
                console.error("Error loading article:", err);
                alert("Failed to load information.");
            }
        };
        fetchOffer();
    }, [id]);

    const editHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        const updatedData = Object.fromEntries(formData);

        await editProduct(id, updatedData);
        alert("Продуктът е редактиран успешно!");
        navigate('/products');
    }

    return (
        <>
            <Helmet>
                <title>Редактирай продукт | Електронни ресурси за сваляне</title>
                <meta name="description" content="Това е описанието на моя сайт, което ще се появи в резултатите на Google." />
                <link rel="canonical" href="https://language-center-varna.eu/" />
            </Helmet>

            <section className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow p-4">
                            <h3 className="text-center mb-4">Редактиране на продукт</h3>

                            <form onSubmit={editHandler}>
                                <div className="form-group mb-3">
                                    <label>Заглавие</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        defaultValue={product.title}
                                        required
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Описание на продукта</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="description"
                                        defaultValue={product.description}
                                        required
                                    />
                                </div>


                                <div className="form-group mb-3">
                                    <label>Цена: </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="price"
                                        defaultValue={product.price}
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
                                        defaultValue={product.img1}

                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Изображение 2</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img2"
                                        defaultValue={product.img2}

                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 3</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img3"
                                        defaultValue={product.img3}

                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 4</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img4"
                                        defaultValue={product.img4}

                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 5</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img5"
                                        defaultValue={product.img5}

                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 6</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img6"
                                        defaultValue={product.img6}

                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 7</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img7"
                                        defaultValue={product.img7}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Изображение 8</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="img8"
                                        defaultValue={product.img8}
                                    />
                                </div>


                                <div className="form-group mb-3">
                                    <label>Линк към продукт</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="productLink"
                                        defaultValue={product.productLink}
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
                                    Редактиране
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
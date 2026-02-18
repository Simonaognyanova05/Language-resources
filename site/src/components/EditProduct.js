import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../services/getProductById";
import { editProduct } from "../services/editProduct";

export default function EditProduct() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        title: "", description: "", price: "", img: "", productLink: ""
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
                                <label>Цена</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    defaultValue={product.price}
                                    required
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>Изображение</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="img"
                                    defaultValue={product.img}
                                    required
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

                            <button type="submit" className="btn btn-dark w-100">
                                Редактиране
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default function CreateProduct() {
    return (
        <section className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow p-4">
                        <h3 className="text-center mb-4">Създаване на продукт</h3>

                        <form>
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
                                    name="text"
                                    required
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>Цена</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    required
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>Изображение</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="img"
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

                            <button type="submit" className="btn btn-dark w-100">
                                Създаване
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
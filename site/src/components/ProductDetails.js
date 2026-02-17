export default function ProductDetails() {
    return (
        <section className="container my-5">
            <div className="row align-items-center">

                {/* LEFT SIDE – IMAGE */}
                <div className="col-lg-6 mb-4">
                    <div className="text-center">
                        <img
                            src="https://via.placeholder.com/500x400"
                            alt="Product"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE – INFO */}
                <div className="col-lg-6">
                    <div className="card shadow p-4 border-0">

                        <h2 className="mb-3">Premium Fruit Package</h2>

                        <p className="text-muted mb-4">
                            Това е примерен детайлен опис на продукта. Тук можеш да
                            добавиш повече информация – какво съдържа, как се използва,
                            какви са предимствата и защо клиентът трябва да го закупи.
                        </p>

                        <h3 className="mb-4 text-dark">
                            45.00 лв
                        </h3>

                        <button className="btn btn-dark btn-lg w-100">
                            Добави в количката
                        </button>

                    </div>
                </div>

            </div>
        </section>
    );
}

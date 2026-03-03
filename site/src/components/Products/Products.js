import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
import ProductItem from "./ProductItem";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 9;

    useEffect(() => {
        getProducts()
            .then(res => setProducts(res))
            .catch(e => console.log(e));
    }, []);

    // Pagination logic
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = products.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="py-5 bg-light">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">Нашите продукти</h2>
                    <p className="text-muted">
                        Всичко необходимо за по-добро учене на едно място. <br />
                        Практически тестове, полезни ръководства и работещи планери за ученици и учители.
                    </p>
                </div>

                <div className="row">
                    {currentProducts.length > 0 ? (
                        currentProducts.map(x => (
                            <ProductItem key={x.id} product={x} />
                        ))
                    ) : (
                        <div className="text-center text-muted">
                            Няма налични продукти
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-5">
                        <nav>
                            <ul className="pagination">

                                {[...Array(totalPages)].map((_, index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${currentPage === index + 1 ? "active" : ""
                                            }`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() => goToPage(index + 1)}
                                            style={
                                                currentPage === index + 1
                                                    ? {
                                                        background: "linear-gradient(135deg, #B21F7A, #6A1B9A)",
                                                        border: "none",
                                                        color: "white"
                                                    }
                                                    : {}
                                            }
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}

                            </ul>
                        </nav>
                    </div>
                )}

            </div>
        </section>
    );
}
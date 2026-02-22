import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { isAdmin } from "../../services/isAdmin";

export default function Header() {
    const { user } = useAuth();

    const userHead = (
        <>
            <li class="nav-item">
                <Link class="nav-link" to="/about" style={{ color: "black" }}>За нас </Link>
            </li>

            <li class="nav-item">
                <Link class="nav-link" to="/contacts" style={{ color: "black" }}>Контакти</Link>
            </li>
        </>
    );
    const unLoggedUser = (
        <>
            <li class="nav-item">
                <Link class="nav-link" to="/login" style={{ color: "black" }}>Влизане</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/register" style={{ color: "black" }}>Регистрация</Link>
            </li>
        </>
    );

    const loggedUser = (
        <>
            <li class="nav-item">
                <Link class="nav-link" to="/userProfile" style={{ color: "black" }}>Моят профил</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/logout" style={{ color: "black" }}>Изход</Link>
            </li>
            <li className="nav-item">
                <Link to="/cart" className="nav-link cart-link" style={{ color: "black" }}>
                    <i className="bi bi-cart3"></i>
                </Link>
            </li>


        </>
    );

    const admin = (
        <>
            <li class="nav-item">
                <Link class="nav-link" to="/createProduct" style={{ color: "black" }}>Създай продукт</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/orders" style={{ color: "black" }}>Поръчки</Link>
            </li>
        </>
    );
    return (
        <>
            <div class="hero_area">
                <div class="brand_box">
                    <a class="navbar-brand" href="index.html">
                        <span>
                            Учебен център
                        </span>
                    </a>
                </div>
                <section class=" slider_section position-relative">
                    <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="img-box">
                                    <img src="images/img1.jpg" alt="" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src="images/img2.jpg" alt="" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src="images/img3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" style={{ backgroundColor: "#B21F7A" }}>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" style={{ backgroundColor: "#B21F7A" }}>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </section>
            </div>


            <section class="nav_section">
                <div class="container">
                    <div class="custom_nav2">
                        <nav class="navbar navbar-expand custom_nav-container " style={{ backgroundColor: "#b9b1cc" }}>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                                <div class="d-flex  flex-column flex-lg-row align-items-center">
                                    <ul class="navbar-nav">
                                        <li class="nav-item active" >
                                            <Link class="nav-link" to="/" style={{ color: "black" }}>Начало <span class="sr-only">(current)</span></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/products" style={{ color: "black" }}>Продукти </Link>
                                        </li>

                                        {isAdmin(user.email) ? admin : userHead}
                                        {user.email ? loggedUser : unLoggedUser}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}
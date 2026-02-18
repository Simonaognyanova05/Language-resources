import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { isAdmin } from "../../services/isAdmin";

export default function Header() {
    const { user } = useAuth();

    const unLoggedUser = (
        <>
            <li class="nav-item">
                <Link class="nav-link" to="/login">Влизане</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/register">Регистрация</Link>
            </li>
        </>
    );

    const loggedUser = (
        <>
            <li class="nav-item">
                <Link class="nav-link" to="/userProfile">Моят профил</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/logout">Изход</Link>
            </li>
            <li className="nav-item">
                <Link to="/cart" className="nav-link cart-link">
                    <i className="bi bi-cart3"></i>
                </Link>
            </li>


        </>
    );

    const admin = (
        <li class="nav-item">
            <Link class="nav-link" to="/createProduct">Създай продукт</Link>
        </li>
    );
    return (
        <>
            <div class="hero_area">
                <div class="brand_box">
                    <a class="navbar-brand" href="index.html">
                        <span>
                            Ninom
                        </span>
                    </a>
                </div>
                <section class=" slider_section position-relative">
                    <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="img-box">
                                    <img src="images/slider-img.jpg" alt="" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src="images/slider-img.jpg" alt="" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src="images/slider-img.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </section>
            </div>


            <section class="nav_section">
                <div class="container">
                    <div class="custom_nav2">
                        <nav class="navbar navbar-expand custom_nav-container ">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div class="d-flex  flex-column flex-lg-row align-items-center">
                                    <ul class="navbar-nav  ">
                                        <li class="nav-item active">
                                            <Link class="nav-link" to="/">Начало <span class="sr-only">(current)</span></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/about">За нас </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/products">Продукти </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/contacts">Контакти</Link>
                                        </li>
                                        {user.email ? loggedUser : unLoggedUser}
                                        {isAdmin(user.email) ? admin : ""}
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
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';

import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { isAdmin } from "../../services/isAdmin";

export default function Header() {
    const { user } = useAuth();

    const userHead = (
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/about">За нас</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contacts">Контакти</Link>
            </li>
        </>
    );

    const unLoggedUser = (
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Влизане</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Регистрация</Link>
            </li>
        </>
    );

    const loggedUser = (
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/userProfile">Моят профил</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/logout">Изход</Link>
            </li>
            <li className="nav-item">
                <Link to="/cart" className="nav-link cart-link">
                    <i className="bi bi-cart3"></i>
                </Link>
            </li>
        </>
    );

    const admin = (
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/createProduct">Създай продукт</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/orders">Поръчки</Link>
            </li>
        </>
    );

    return (
        <>
            <div className="hero_area">

                {/* ===== КАРУСЕЛ С ТЕКСТ ОТГОРЕ ===== */}
                <section className="slider_section position-relative">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                        {/* HERO TEXT */}
                        <div className="hero-overlay">
                            <Link to="/" className="hero-title">
                                Учебен център Варна
                            </Link>
                        </div>

                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="img-box">
                                    <img src="/images/img1.jpg" alt="" />
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src="/images/img2.jpg" alt="" />
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src="/images/img3.jpg" alt="" />
                                </div>
                            </div>

                        </div>

                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                        ></button>

                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                        ></button>

                    </div>
                </section>
            </div>

            {/* ===== NAVBAR ===== */}
            <section className="nav_section">
                <div className="container">

                    <nav className="navbar navbar-expand-lg custom_nav-container">

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Начало</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Продукти</Link>
                                </li>

                                {user?.email && isAdmin(user.email) ? admin : userHead}
                                {user?.email ? loggedUser : unLoggedUser}

                            </ul>
                        </div>

                    </nav>

                </div>
            </section>
        </>
    );
}
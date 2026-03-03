import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer_section pt-5 pb-4 mt-5">
            <div className="container">
                <div className="row gy-4">

                    {/* Branding & Territorial Info */}
                    <div className="col-lg-4 col-md-12">
                        <h5 className="fw-bold mb-3 text-primary">Езикови ресурси</h5>
                        <p className="small text-muted mb-2">
                            Вашият доверен партньор в онлайн обучението.
                        </p>
                        <div className="delivery-badge p-2 d-inline-block rounded-3 small">
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            Доставки само за територията на България
                        </div>
                    </div>

                    {/* Company Details */}
                    <div className="col-lg-4 col-md-6">
                        <h6 className="fw-bold mb-3 text-uppercase small">Данни на фирмата</h6>
                        <ul className="list-unstyled small company-list">
                            <li><i className="bi bi-building me-2"></i><strong>ДАР СЛОВО ЕООД</strong></li>
                            <li><i className="bi bi-building me-2"></i><strong>ВАРНА</strong>, ул. "Крали Марко" 26, ет. 2, офис 2</li>

                            <li><i className="bi bi-fingerprint me-2"></i>ЕИК: 208368173</li>
                            <li><i className="bi bi-hash me-2"></i>ДДС: BG208368173</li>
                            <li><i className="bi bi-envelope me-2"></i>varnaeducate@gmail.com</li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="col-lg-4 col-md-6 text-lg-end">
                        <h6 className="fw-bold mb-3 text-uppercase small">Правна информация</h6>
                        <div className="d-flex flex-column gap-2 legal-links">
                            <Link to="/terms">Общи условия</Link>
                            <Link to="/privacy">Поверителност</Link>
                            <Link to="/cookies">Бисквитки</Link>
                        </div>
                    </div>

                </div>

                <hr className="my-4 opacity-10" />

                <div className="row align-items-center">
                    <div className="col-md-12 text-center">
                        <p className="small text-muted mb-0">
                            &copy; {currentYear} <strong>Езикови ресурси</strong>. Всички права запазени.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
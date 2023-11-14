import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg"

function Top() {
    return (
        <section className="top">
            <div className="top__box">
                <Link className="top__link" to="/">
                    <img
                        className="top__logo"
                        src={logo}
                        alt="Логотип"
                    />
                </Link>
                <h2 className="top__title">Рады видеть!</h2>
            </div>
        </section>
    )
}
export default Top;
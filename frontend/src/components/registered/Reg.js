import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg"

function Reg() {
    return (
        <section className="reg">
            <div className="reg__box">
                <Link className="reg__link" to="/">
                    <img
                        className="reg__logo"
                        src={logo}
                        alt="Логотип"
                    />
                </Link>
                <h2 className="reg__title">Добро пожаловать!</h2>
            </div>
        </section>
    )
}
export default Reg;
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import text__logo from "../../images/text__logo.svg";

function Header() {
  return (
    <section className="header">
      <div className="header__aut">
        <img className="header__logo" src={logo} alt="Лого" />
        <div className="header__login">
          <Link to="/sign-up" className="header__reg" title="Регистрация">
            Регистрация
          </Link>
          <Link to="/Sign-in" className="header__open" title="Войти">
            Войти
          </Link>
        </div>
      </div>
      <div className="header__text">
        <h1 className="header__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img className="header__img" src={text__logo} alt="текст лого" />
      </div>
    </section>
  );
}

export default Header;

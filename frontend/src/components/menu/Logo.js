import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import burger from "../../images/burger.png";

function Logo({ menu, saved, open }) {
  return (
    <section className="logo">
      <div className="logo__btn">
        <img className="logo__img" src={logo} alt="логотип" />
        <div className="logo__main">
          <button onClick={menu} className="logo__mov">
            Фильмы
          </button>
          <button onClick={saved} className="logo__svg">
            Сохранённые фильмы
          </button>
        </div>
      </div>
      <div className="logo__aut">
        <Link to="/edit" className="logo__account">
          Аккаунт
        </Link>
      </div>
      <div className="logo__burger">
        <button onClick={open} className="logo__button">
          <img className="logo__images" src={burger} alt="Burger__menu" />
        </button>
      </div>
    </section>
  );
}

export default Logo;

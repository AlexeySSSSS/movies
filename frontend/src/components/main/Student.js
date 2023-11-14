import React from "react";
import port from "../../images/port.svg";
import main from "../../images/main.svg";

function Student() {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__border"></div>
      <div className="student__info">
        <div className="student__list">
          <p className="student__name">Виталий</p>
          <p className="student__age">Фронтенд-разработчик, 30 лет</p>
          <p className="student__paragraf">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="student__link">
            <a className="student__facebook" href="https://facebook.com/">
              Facebook
            </a>
            <a className="student__github" href="https://github.com/">
              Github
            </a>
          </div>
        </div>
        <img className="student__img" src={port} alt="портрет" />
      </div>
      <p className="student__portfolio">Портфолио</p>
      <a href="/" className="student__web">
        <p className="student__website">Статичный сайт</p>
        <img src={main} alt="стрелка" className="student__arrow" />
      </a>
      <a href="/" className="student__adaptiv">
        <p className="student__website">Адаптивный сайт</p>
        <img src={main} alt="стрелка" className="student__arrow" />
      </a>
      <a href="/" className="student__one">
        <p className="student__website">Одностраничное приложение</p>
        <img src={main} alt="стрелка" className="student__arrow" />
      </a>
    </section>
  );
}

export default Student;

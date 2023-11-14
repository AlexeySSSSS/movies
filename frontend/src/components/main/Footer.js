import React from "react";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__navigator">
        <p className="footer__logo">© 2023</p>
        <nav className="footer__nav">
          <a className="footer__link" href="https://practicum.yandex.ru">
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="https://github.com/">
            Github
          </a>
          <a className="footer__link" href="http://facebook.com/">
            Facebook
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Footer;

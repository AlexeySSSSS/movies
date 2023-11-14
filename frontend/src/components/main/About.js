import React from "react";

function About() {
  return (
    <section className="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__border"></div>
      <div className="about__info">
        <div>
          <h2 className="about__text">Дипломный проект включал 5 этапов</h2>
          <p className="about__paragraf">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h2 className="about__text">На выполнение диплома ушло 5 недель</h2>
          <p className="about__paragraf">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__time">
        <h2 className="about__one">1 неделя</h2>
        <h2 className="about__four">4 недели</h2>
        <p className="about__backend">Back-end</p>
        <p className="about__frontend">Front-end</p>
      </div>
    </section>
  );
}

export default About;

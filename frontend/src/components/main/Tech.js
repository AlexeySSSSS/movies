import React from "react";

function Tech() {
    return (
        <section className="tech">
            <h2 className="tech__title">Технологии</h2>
            <div className="tech__border"></div>
            <h2 className="tech__info">7 технологий</h2>
            <p className="tech__paragraf">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="tech__list">
                <p className="tech__language">HTML</p>
                <p className="tech__language">CSS</p>
                <p className="tech__language">JS</p>
                <p className="tech__language">React</p>
                <p className="tech__language">Git</p>
                <p className="tech__language">Express.js</p>
                <p className="tech__language">mongoDB</p>
            </div>
        </section>
    )
}

export default Tech;
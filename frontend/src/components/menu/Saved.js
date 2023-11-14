import React from "react";

function Saved({ movies, svgBtnSaved, svgBtnSavedRemove, cardsDelete }) {
  return (
    <>
      {movies.length > 0 ? (
        <section className="saved">
          {movies.map((item, _id) => {
            return (
              <div
                id={item.id}
                onClick={cardsDelete}
                onMouseOver={svgBtnSaved}
                onMouseOut={svgBtnSavedRemove}
                key={_id}
                className="saved__video"
              >
                <a className="saved__link" href={item.link} alt={item.text}>
                  <img
                    className="saved__movies"
                    src={item.img}
                    alt={`Обложка фильма: ${item.text}`}
                  />
                </a>
                <button className="saved__svg"></button>
                <div className="saved__info">
                  <p className="saved__title">{item.text}</p>
                  <div className="saved__block">
                    <p className="saved__time">{item.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <div className="saved__none">Ничего не найдено</div>
      )}
    </>
  );
}

export default Saved;

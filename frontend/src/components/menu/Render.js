import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Render({ item, save, svgBtn, svgBtnRemove, svgbutton }) {
  const [favorite, setFavorite] = React.useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/saved") {
      const savedFilm = save.filter((obj) => {
        return obj.id == item.id;
      });

      if (savedFilm.length > 0) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }
  }, [pathname, save, item.id]);

  return (
    <div
      id={item.id}
      onMouseOver={svgBtn}
      onMouseOut={svgBtnRemove}
      onClick={svgbutton}
      className="cards__video"
    >
      <a className="cards__link" href={item.trailerLink} alt={item.nameRU}>
        <img
          className="cards__movies"
          src={`https://api.nomoreparties.co/${item.image.url}`}
          alt={`Обложка фильма: ${item.nameRU}`}
        />
      </a>
      <button className={`cards__svg cards__svg${favorite ? "_none" : ""}`}>
        Сохранить
      </button>
      <div className="cards__info">
        <p className="cards__title">{item.nameRU}</p>
        <div className="cards__block">
          <p className="cards__time">{item.duration} мин</p>
        </div>
      </div>
    </div>
  );
}

export default Render;

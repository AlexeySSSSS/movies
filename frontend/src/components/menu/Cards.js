import React from "react";
import Render from "./Render";

function Cards({ movies, save, svgBtn, svgBtnRemove, svgbutton }) {
  return (
    <>
      {movies.length > 0 ? (
        <section className="cards">
          {movies.map((item, id) => {
            return (
              <Render
                item={item}
                key={id}
                svgBtn={svgBtn}
                svgBtnRemove={svgBtnRemove}
                svgbutton={svgbutton}
                save={save}
              />
            );
          })}
        </section>
      ) : (
        <div className="saved__none">Ничего не найдено</div>
      )}
    </>
  );
}

export default Cards;

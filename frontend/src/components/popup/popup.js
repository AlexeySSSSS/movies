import React from "react";
import Group from "../../images/Group.png";

function Popup({ close, menuPopup, savedPopup, accountPopup, tokenRemove }) {
  return (
    <section className="popup">
      <div className="popup__nav">
        <div className="popup__menu">
          <button onClick={close} className="popup__close">
            <img className="popup__img" src={Group} alt="Закрыть"></img>
          </button>
          <button onClick={tokenRemove} className="popup__start">
            Главная
          </button>
          <button onClick={menuPopup} className="popup__mov">
            Фильмы
          </button>
          <button onClick={savedPopup} className="popup__svg">
            Сохранённые фильмы
          </button>
        </div>
        <div className="popup__aut">
          <button onClick={accountPopup} className="popup__account">
            Аккаунт
          </button>
        </div>
      </div>
    </section>
  );
}

export default Popup;

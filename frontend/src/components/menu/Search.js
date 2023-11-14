import { React } from "react";

function Search({ checkbox, checked, search, value, handleChange }) {
  return (
    <section className="search">
      <div className="search__line">
        <form onSubmit={search} name="form" className="search__form">
          <input
            className="search__input"
            value={value || ""}
            maxLength="30"
            required="required"
            onChange={handleChange}
            type="text"
            name="input"
            placeholder="Фильм"
          ></input>
          <button className="search__button" onSubmit={search} type="submit">
            Поиск
          </button>
        </form>
      </div>
      <div className="search__btn">
        <input
          className="search__box"
          type="checkbox"
          checked={checked}
          onChange={checkbox}
          id="switch"
        />
        <label className="search__lab" htmlFor="switch">
          Toggle
        </label>
        <p className="search__prg">Короткометражки</p>
      </div>
    </section>
  );
}

export default Search;

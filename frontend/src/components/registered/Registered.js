import { useEffect, React } from "react";
import { Link } from "react-router-dom";

function Registered({ handleChangeReg, formValue, registered }) {
  useEffect(() => {
    const button = document.querySelector(".registered__btn");
    const { name, email, password } = formValue;
    // eslint-disable-next-line no-sequences
    if ((name, email, password === "")) {
      button.setAttribute("disabled", "disabled");
      button.classList.add("registered__btn_active");
    } else {
      button.removeAttribute("disabled");
      button.classList.remove("registered__btn_active");
    }
  }, [formValue]);

  return (
    <section className="registered">
      <form
        onSubmit={registered}
        name="registered-form"
        className="registered__box"
      >
        <p className="registered__title">Имя</p>
        <input
          value={formValue.name || ""}
          name="name"
          type="text"
          className="registered__input"
          autoComplete="on"
          placeholder="Имя"
          onChange={handleChangeReg}
        />
        <p className="registered__title">E-mail</p>
        <input
          value={formValue.email || ""}
          name="email"
          type="email"
          className="registered__input"
          autoComplete="on"
          placeholder="E-mail"
          onChange={handleChangeReg}
        />
        <p className="registered__title">Пароль</p>
        <input
          value={formValue.password || ""}
          name="password"
          type="password"
          className="registered__input"
          autoComplete="on"
          onChange={handleChangeReg}
        />
        <button onSubmit={registered} className="registered__btn" type="submit">
          Зарегистрироваться
        </button>
        <div className="registered__button">
          <p className="registered__reg">Уже зарегистрированы?</p>
          <Link to="/sign-in" className="registered__registred">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Registered;

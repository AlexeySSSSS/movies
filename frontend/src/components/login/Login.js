import { useEffect, React } from "react";
import { Link } from "react-router-dom";

function Login({ handleChangeLogin, formLogin, login }) {
  useEffect(() => {
    const button = document.querySelector(".login__btn");
    const { name, email, password } = formLogin;
    // eslint-disable-next-line no-sequences
    if ((name, email, password === "")) {
      button.setAttribute("disabled", "disabled");
      button.classList.add("login__btn_active");
    } else {
      button.removeAttribute("disabled");
      button.classList.remove("login__btn_active");
    }
  }, [formLogin]);

  return (
    <section className="login">
      <form onSubmit={login} name="login-form" className="login__box">
        <p className="login__title">E-mail</p>
        <input
          value={formLogin.email || ""}
          name="email"
          type="email"
          className="login__input"
          autoComplete="on"
          placeholder="E-mail"
          onChange={handleChangeLogin}
        />
        <p className="login__title">Пароль</p>
        <input
          value={formLogin.password || ""}
          name="password"
          type="password"
          className="login__input"
          autoComplete="on"
          onChange={handleChangeLogin}
        />
        <button onSubmit={login} className="login__btn" type="submit">
          Войти
        </button>
        <div className="login__button">
          <p className="login__reg">Ещё не зарегистрированы?</p>
          <Link to="/sign-up" className="login__registred">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;

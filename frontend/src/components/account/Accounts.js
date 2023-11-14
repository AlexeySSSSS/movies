import React, { useEffect } from "react";

function Accounts({
  user,
  tokenRemove,
  userUpdate,
  handleChangeUser,
  formUpdate,
}) {
  useEffect(() => {
    const button = document.querySelector(".accounts__btn");
    const form = document.forms.accounts;
    const inputName = form.elements.name;
    const inputEmail = form.elements.email;
    // eslint-disable-next-line no-sequences
    if (inputName.value === "" || inputEmail.value === "") {
      button.setAttribute("disabled", "disabled");
      button.classList.add("accounts__btn_active");
    } else {
      button.removeAttribute("disabled");
      button.classList.remove("accounts__btn_active");
    }
  }, [formUpdate]);

  return (
    <section className="accounts">
      <h2 className="accounts__title">Привет, {formUpdate.name}!</h2>
      <form onSubmit={userUpdate} name="accounts" className="accounts__form">
        <div className="accounts__box">
          <p className="accounts__name">Имя</p>
          <input
            value={formUpdate.name || ""}
            className="accounts__input"
            name="name"
            type="text"
            autoComplete="on"
            placeholder={user.name}
            onChange={handleChangeUser}
          ></input>
        </div>
        <div className="accounts__mail">
          <p className="accounts__name">E-mail</p>
          <input
            value={formUpdate.email || ""}
            className="accounts__input"
            name="email"
            type="email"
            autoComplete="on"
            placeholder={user.email}
            onChange={handleChangeUser}
          ></input>
        </div>
        <button onSubmit={userUpdate} className="accounts__btn" type="submit">
          Редактировать
        </button>
        <button onClick={tokenRemove} className="accounts__out">
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Accounts;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./main/Header";
import About from "./main/About";
import Tech from "./main/Tech";
import Student from "./main/Student";
import Footer from "./main/Footer";

import Logo from "./menu/Logo";
import Search from "./menu/Search";
import Cards from "./menu/Cards";
import Saved from "./menu/Saved";
import More from "./menu/More";

import Top from "./login/Top";
import Login from "./login/Login";

import Reg from "./registered/Reg";
import Registered from "./registered/Registered";

import Button from "./saved/Button";

import Accounts from "./account/Accounts";

import api from "../utils/moviesApi";

import ProtectedRoute from "./protected/protectedRoute";

import Preloader from "./preloader/Preloader";

import Popup from "./popup/popup";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [card, setCard] = React.useState([]);
  const [renders, setRenders] = React.useState([]);
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [formLogin, setFormLogin] = React.useState({ email: "", password: "" });
  const [formUpdate, setFormUpdate] = React.useState({
    name: "",
    email: "",
  });
  const [user, setUser] = React.useState([]);
  const [save, setSaved] = React.useState([]);
  const [preloader, setPreloader] = React.useState(false);
  const [preloaderSaved, setPreloaderSaved] = React.useState(false);
  const [popup, setPopup] = React.useState(false);

  function useWindowDimensions() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
    };
    React.useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
    });
    return {
      width,
    };
  }

  const { width } = useWindowDimensions();

  const navigate = useNavigate();

  const handleChangeReg = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setFormUpdate({
      ...formUpdate,
      [name]: value,
    });
  };

  const getCardSave = (_id) => {
    Promise.all([api.cardsGet(_id)])
      .then(([cards]) => {
        setSaved(cards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  };

  const userInfo = () => {
    Promise.resolve(api.userGet()).then((users) => {
      setUser(users.user);
      const { _id, name, email } = users.user;
      setFormUpdate({ name: name, email: email });
      getCardSave(_id);
    });
  };

  const moviesInfo = () => {
    setPreloader(true);
    Promise.all([api.uploadUserInformation()])
      .then(([user]) => {
        setCard(user);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        setPreloader(false);
      });
  };

  const data = () => {
    if (loggedIn === true) {
      moviesInfo();
      userInfo();
    }
  };

  const userUpdate = (e) => {
    e.preventDefault();
    const { _id } = user;
    const { name, email } = formUpdate;
    api
      .userUpdate(_id, name, email)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    data();
    userInfo();
    setFormUpdate({ name: "", email: "" });
    navigate("/edit", { replace: true });
  };

  const render = (n) => {
    return card.sort(() => Math.random() - Math.random()).slice(0, n);
  };

  useEffect(() => {
    data();
  }, [loggedIn]);

  useEffect(() => {
    if (window.innerWidth < 1101 && window.innerWidth > 767) {
      setRenders(render(8));
    } else if (window.innerWidth < 768) {
      setRenders(render(5));
    } else {
      setRenders(render(12));
    }
  }, [card, width]);

  useEffect(() => {
    tokenIf();
  }, []);

  const tokenIf = () => {
    if (localStorage.getItem("token")) {
      navigate("/menu", { replace: true });
      setLoggedIn(true);
    }
  };

  const tokenRemove = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
    setLoggedIn(false);
    setPopup(false);
  };

  const more = document.querySelector(".more__btn");

  const menu = () => {
    setCard([]);
    data();
    setLoggedIn(true);
    setChecked(false);
    navigate("/menu", { replace: true });
    document.querySelector(".logo__svg").classList.remove("logo__svg_active");
    document.querySelector(".logo__mov").classList.remove("logo__mov_active");
  };

  const menuPopup = () => {
    setCard([]);
    data();
    setLoggedIn(true);
    setChecked(false);
    setPopup(false);
    navigate("/menu", { replace: true });
  };

  const accountPopup = () => {
    setPopup(false);
    navigate("/edit", { replace: true });
  };

  const menuSearch = () => {
    setCard([]);
    data();
    more.classList.remove("more__disabled");
    setLoggedIn(true);
    setChecked(false);
    navigate("/menu", { replace: true });
    document.querySelector(".logo__svg").classList.remove("logo__svg_active");
    document.querySelector(".logo__mov").classList.remove("logo__mov_active");
  };

  const saved = () => {
    setCard([]);
    data();
    setLoggedIn(true);
    setChecked(false);
    navigate("/saved", { replace: true });
    document.querySelector(".logo__svg").classList.add("logo__svg_active");
    document.querySelector(".logo__mov").classList.add("logo__mov_active");
  };

  const savedPopup = () => {
    setCard([]);
    data();
    setLoggedIn(true);
    setChecked(false);
    setPopup(false);
    navigate("/saved", { replace: true });
  };

  const open = () => {
    setPopup(true);
  };

  const close = () => {
    setPopup(false);
  };

  const btn = () => {
    if (window.innerWidth < 1101 && window.innerWidth > 767) {
      setRenders(renders.concat(render(8)));
    } else if (window.innerWidth < 768) {
      setRenders(renders.concat(render(5)));
    } else {
      setRenders(renders.concat(render(12)));
    }
  };

  const checkbox = () => {
    setChecked(!checked);
    if (checked === true) {
      setRenders([]);
      data();
      more.classList.remove("more__disabled");
    } else {
      setRenders([]);
      const more = document.querySelector(".more__btn");
      more.classList.add("more__disabled");
      const filter = card.filter((item, position, array) => {
        return item.duration < 30;
      });
      setCard(filter);
    }
  };

  const checkboxSaved = () => {
    setChecked(!checked);
    if (checked === true) {
      setSaved([]);
      data();
    } else {
      setSaved([]);
      const filter = save.filter((item, position, array) => {
        return parseInt(item.time) < 30;
      });
      setSaved(filter);
    }
  };

  const handleChange = (e) => {
    const search = e.target.value;
    setValue(search.toLowerCase());
  };

  const search = (e) => {
    e.preventDefault();
    setPreloader(true);
    setChecked(false);
    more.classList.add("more__disabled");
    setRenders([]);
    Promise.all([api.uploadUserInformation()])
      .then(([user]) => {
        const includes = user.filter((item) => {
          return item.nameRU.toLowerCase().includes(`${value}`);
        });
        setCard(includes);
        setValue("");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        setPreloader(false);
      });
  };

  const searchSaved = (e) => {
    e.preventDefault();
    setPreloaderSaved(true);
    setChecked(false);
    setSaved([]);
    const { _id } = user;
    Promise.all([api.cardsGet(_id)])
      .then(([cards]) => {
        const includes = cards.filter((item) => {
          return item.text.toLowerCase().includes(`${value}`);
        });
        setSaved(includes);
        setValue("");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        setPreloaderSaved(false);
      });
  };

  const registered = (e) => {
    e.preventDefault();
    const { name, email, password } = formValue;
    api
      .userRegistered(name, email, password)
      .then((res) => {
        navigate("/sign-in", { replace: true });
      })
      .catch((err) => {
        navigate("/sign-up", { replace: true });
        console.log(err);
      });
  };

  const login = (e) => {
    e.preventDefault();
    setCard([]);
    const { email, password } = formLogin;
    api
      .userLogin(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        navigate("/menu", { replace: true });
      })
      .catch((err) => {
        navigate("/sign-in", { replace: true });
        setLoggedIn(false);
        console.log(err);
      });
  };

  const svgBtn = (e) => {
    const eventSvg = e.currentTarget;
    const eventButton = eventSvg.querySelector(".cards__svg");
    eventButton.classList.add("cards__svg_active");
  };

  const svgBtnSaved = (e) => {
    const eventSvg = e.currentTarget;
    const eventButton = eventSvg.querySelector(".saved__svg");
    eventButton.classList.add("saved__svg_active");
  };

  const svgBtnRemove = (e) => {
    const eventSvg = e.currentTarget;
    const eventButton = eventSvg.querySelector(".cards__svg");
    eventButton.classList.remove("cards__svg_active");
  };

  const svgBtnSavedRemove = (e) => {
    const eventSvg = e.currentTarget;
    const eventButton = eventSvg.querySelector(".saved__svg");
    eventButton.classList.remove("saved__svg_active");
  };

  const cardsDelete = (e) => {
    if (e.target.classList.contains("saved__svg")) {
      const eventSvg = e.currentTarget;
      const id = eventSvg.id;
      api.cardsDelete(id);
      userInfo();
    }
  };

  const svgbutton = (e) => {
    if (e.target.classList.contains("cards__svg")) {
      const eventSvg = e.currentTarget;
      const id = eventSvg.id;
      const eventButton = eventSvg.querySelector(".cards__svg");
      const href = eventSvg.querySelector(".cards__link");
      const image = eventSvg.querySelector(".cards__movies");
      const title = eventSvg.querySelector(".cards__title");
      const min = eventSvg.querySelector(".cards__time");
      const saves = {
        text: title.textContent,
        time: min.textContent,
        link: href.href,
        img: image.src,
      };
      const { text, time, link, img } = saves;
      api.createCards(id, text, time, link, img);
      eventButton.classList.add("cards__svg_none");
    }
  };

  return (
    <div className="page">
      {popup && (
        <Popup
          close={close}
          tokenRemove={tokenRemove}
          menuPopup={menuPopup}
          savedPopup={savedPopup}
          accountPopup={accountPopup}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Tech />
              <Student />
              <Footer />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <>
              <ProtectedRoute
                Component={Logo}
                menu={menuSearch}
                saved={saved}
                open={open}
                LoggedIn={loggedIn}
              />
              <ProtectedRoute
                Component={Search}
                checked={checked}
                checkbox={checkbox}
                value={value}
                handleChange={handleChange}
                search={search}
                LoggedIn={loggedIn}
              />
              {!preloader && (
                <ProtectedRoute
                  Component={Cards}
                  movies={renders}
                  LoggedIn={loggedIn}
                  svgBtn={svgBtn}
                  svgBtnRemove={svgBtnRemove}
                  svgbutton={svgbutton}
                  save={save}
                />
              )}
              {preloader && <Preloader />}
              <ProtectedRoute Component={More} btn={btn} LoggedIn={loggedIn} />
              <ProtectedRoute Component={Footer} LoggedIn={loggedIn} />
            </>
          }
        />
        <Route
          path="/saved"
          element={
            <>
              <ProtectedRoute
                Component={Logo}
                menu={menu}
                saved={saved}
                open={open}
                LoggedIn={loggedIn}
              />
              <ProtectedRoute
                Component={Search}
                checked={checked}
                checkbox={checkboxSaved}
                value={value}
                handleChange={handleChange}
                search={searchSaved}
                LoggedIn={loggedIn}
              />
              {!preloaderSaved && (
                <ProtectedRoute
                  Component={Saved}
                  movies={save}
                  svgBtnSaved={svgBtnSaved}
                  svgBtnSavedRemove={svgBtnSavedRemove}
                  LoggedIn={loggedIn}
                  cardsDelete={cardsDelete}
                />
              )}
              {preloaderSaved && <Preloader />}
              <ProtectedRoute Component={Button} LoggedIn={loggedIn} />
              <ProtectedRoute Component={Footer} LoggedIn={loggedIn} />
            </>
          }
        />
        <Route
          path="/sign-in"
          element={
            <>
              <Top />
              <Login
                handleChangeLogin={handleChangeLogin}
                formLogin={formLogin}
                login={login}
              />
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
              <Reg />
              <Registered
                handleChangeReg={handleChangeReg}
                formValue={formValue}
                registered={registered}
              />
            </>
          }
        />
        <Route
          path="/edit"
          element={
            <>
              <ProtectedRoute
                Component={Logo}
                menu={menu}
                saved={saved}
                open={open}
                LoggedIn={loggedIn}
              />
              <ProtectedRoute
                Component={Accounts}
                LoggedIn={loggedIn}
                tokenRemove={tokenRemove}
                userUpdate={userUpdate}
                user={user}
                handleChangeUser={handleChangeUser}
                formUpdate={formUpdate}
              />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <ProtectedRoute LoggedIn={loggedIn} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

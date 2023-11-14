const responseAnalysis = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(new Error(`Ошибка ${res.status}: ${res.statusText}`));
};

class Api {
  constructor(item) {
    this.movies = item.movies;
    this._baseUrl = item.baseUrl;
  }

  uploadUserInformation() {
    return fetch(this.movies).then((res) => responseAnalysis(res));
  }

  userGet = () => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => responseAnalysis(res));
  };

  userUpdate = (id, name, email) => {
    return fetch(`${this._baseUrl}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, email }),
    }).then((res) => responseAnalysis(res));
  };

  cardsGet = (id) => {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => responseAnalysis(res));
  };

  cardsDelete = (id) => {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => responseAnalysis(res));
  };

  createCards = (id, text, time, link, img) => {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ id, text, time, link, img }),
    }).then((res) => responseAnalysis(res));
  };

  userRegistered = (name, email, password) => {
    return fetch(`${this._baseUrl}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => responseAnalysis(res));
  };

  userLogin = (email, password) => {
    return fetch(`${this._baseUrl}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => responseAnalysis(res));
  };
}

const api = new Api({
  movies: "https://api.nomoreparties.co/beatfilm-movies",
  baseUrl: "http://localhost:4001",
});

export default api;

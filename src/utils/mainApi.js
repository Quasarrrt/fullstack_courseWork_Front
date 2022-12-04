import { MAIN_API } from './config';

class MainApi {
  constructor(config) {
    this.headers = config.headers;
    this.url = config.url;
  }
  _getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
  getMovies(jwt) {
    return fetch(`${this.url}/movies`, {
      method: 'GET',
      headers: {
        ...this.headers,
        authorization: `Bearer ${jwt}`
      }
    }).then(this._getResponse);
  }
  addMovie(movie, jwt) {
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: {
        ...this.headers,
        authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(movie)
    }).then(this._getResponse);
  }
  deleteMovie(movieId, jwt) {
    return fetch(`${this.url}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        ...this.headers,
        authorization: `Bearer ${jwt}`,
      },
    }).then(this._getResponse);
  }
  getUser(jwt) {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: {
        ...this.headers,
        authorization: `Bearer ${jwt}`,
      },
    }).then(this._getResponse);
  }
  editUser(jwt, data) {
    const {name, email} = data;
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this.headers,
        authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._getResponse);
  }
  register(name, email, password) {
    console.log(name)
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._getResponse);
  }
  login(email, password) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    }).then(this._getResponse);
  }
  checkToken(jwt) {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._getResponse);
  }
}
const mainApi = new MainApi({
  url: MAIN_API,
  headers: {
    'Content-Type': 'application/json',
  },
})
export default mainApi;

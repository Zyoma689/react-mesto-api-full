export const BASE_URL = 'http://api.ivart.students.nomoredomains.icu';

const getResponse = (res) => {
    if (res.ok) {
        return(res.json());
    }

    return Promise.reject(res.status);
};

export const register = ({ email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password, email }),
        credentials: 'include',
    })
        .then(getResponse)
};

export const login = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password, email }),
        credentials: 'include',
    })
        .then(getResponse)
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
    })
        .then(getResponse)
};

export const logout = () => {
    fetch(`${BASE_URL}/logout`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
    })
      .then(getResponse)
};

export const checkCookies = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
    })
      .then(getResponse)
};
import React from 'react';
import logo from '../images/header_logo.svg';
import { Route, Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="header page__header">
            <img className="header__logo" src={logo} alt="Лого Mesto" />
            {
                props.loggedIn && (
                    <Route exact path="/">
                        <div className="header__container">
                            <p className="header__email">{props.email}</p>
                            <Link
                                className="header__sign-out"
                                onClick={props.onLogout}
                                to="/signin">Выйти
                            </Link>
                        </div>
                    </Route>
                )
            }
            <Route path="/signin">
                <Link
                    className="header__link"
                    to="/signup">Регистрация
                </Link>
            </Route>
            <Route path="/signup">
                <Link
                    className="header__link"
                    to="/signin">Войти
                </Link>
            </Route>
        </header>
    );
}
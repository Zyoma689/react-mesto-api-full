import React from 'react';

export default function Footer(props) {
    return (
        <footer className="footer page__footer">
            {props.loggedIn && <p className="footer__copyright">© 2021 Mesto Russia</p>}
        </footer>
    );
}
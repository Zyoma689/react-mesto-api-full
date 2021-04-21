import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `card__delete-button ${isOwn ? '' : 'card__delete-button_disabled'}`
    );
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `card__like-button ${isLiked ? 'card__like-button_active' : ''}`
    );

    function handleCardClick() {
        props.onCardClick(props.card);
    }
    
    function handleLikeClick () {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        <li
            className="card">
            <button
                className={cardDeleteButtonClassName}
                onClick={handleDeleteClick}
            />
            <button
                className="card__open-photo-button"
                type="button"
                aria-label="Открыть"
                onClick={handleCardClick}>
                <img
                    className="card__photo"
                    src={props.link}
                    alt={props.name}
                />
            </button>
            <div
                className="card__description">
                <h2
                    className="card__title">{props.name}
                </h2>
                <div
                    className="card__like-container">
                    <button
                        className={cardLikeButtonClassName}
                        type="button"
                        aria-label="Нравится"
                        onClick={handleLikeClick}
                    />
                    <p
                        className="card__like-counter">{props.likes.length}
                    </p>
                </div>
            </div>
        </li>
    );
}
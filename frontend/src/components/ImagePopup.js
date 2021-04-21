import React from 'react';

export default function ImagePopup(props) {
    return (
        <div
            className={`popup page__popup popup_type_view-image ${props.card.link && "popup_opened"}`}>
            <figure
                className="popup__image-container">
                <button
                    className="popup__close-button popup__close-button_type_view-image"
                    type="button"
                    aria-label="Закрыть"
                    onClick={props.onClose}
                />
                <img
                    className="popup__image"
                    src={props.card.link}
                    alt={props.card.name}
                />
                <figcaption
                    className="popup__image-title">{props.card.name} </figcaption>
            </figure>
        </div>
    );
}
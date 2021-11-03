import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {setPopupNotificationStatus} from '../../store/action';
import {AppRoute} from '../../const';
import {onOverlayClick} from '../../util';

export default function PopupNotification() {
  const dispatch = useDispatch();

  let history = useHistory();

  const bodyElement = document.querySelector('body');

  const handlePopupClose = () => {
    dispatch(setPopupNotificationStatus(false))
    bodyElement.classList.remove('page__body--unactive');
  }

  return (
    <section className="popup-notification" onClick={(evt) => onOverlayClick(evt, handlePopupClose)}>
      <div className="popup-notification__modal">
        <div className="popup-notification__wrapper">
          <button
            className="popup-notification__close"
            type="button"
            name="close"
            aria-label="Закрыть"
            onClick={() => handlePopupClose()}
          >
          </button>

          <h4 className="popup-notification__message">Товар успешно добавлен в корзину</h4>
          <div className="popup-notification__controls">
            <button
              className="popup-notification__transition"
              onClick={() => {
                handlePopupClose();
                history.push(AppRoute.CART);
              }}
            >
              Перейти в корзину
            </button>
            <button
              className="popup-notification__continuation"
              onClick={() => handlePopupClose()}
            >
              Продолжить покупки
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

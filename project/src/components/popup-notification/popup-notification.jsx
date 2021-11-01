import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {getSelectedItem} from '../../store/app-business-logic/selectors';
import {setPopupPurchaseStatus, setPopupNotificationStatus} from '../../store/action';
import {AppRoute} from '../../const';
import {onOverlayClick} from '../../util';

export default function PopupNotification() {
  const dispatch = useDispatch();

  let history = useHistory();

  const handleAddingButtonClick = () => {
    dispatch(setPopupPurchaseStatus(false));
    dispatch(setPopupNotificationStatus(true));
  }

  return (
    <section className="popup-notification" onClick={(evt) => onOverlayClick(evt, () => dispatch(setPopupNotificationStatus(false)))}>
      <div className="popup-notification__modal">
        <div className="popup-notification__wrapper">
          <button
            className="popup-notification__close"
            type="button"
            name="close"
            aria-label="Закрыть"
            onClick={() => dispatch(setPopupNotificationStatus(false))}
          >
          </button>

          <h4 className="popup-notification__message">Товар успешно добавлен в корзину</h4>
          <div className="popup-notification__controls">
            <button
              className="popup-notification__transition"
              onClick={() => {
                dispatch(setPopupNotificationStatus(false));
                history.push(AppRoute.CART);
              }}
            >
              Перейти в корзину
            </button>
            <button
              className="popup-notification__continuation"
              onClick={() => dispatch(setPopupNotificationStatus(false))}
            >
              Продолжить покупки
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

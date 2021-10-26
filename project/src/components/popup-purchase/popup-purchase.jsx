import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getSelectedItem} from '../../store/app-interaction/selectors';
import {setPopupPurchaseStatus, setPopupNotificationStatus} from '../../store/action';
import {InstrumentType} from '../../const';
import {onOverlayClick} from '../../util';

export default function PopupPurchase() {

  const selectedItem = useSelector(getSelectedItem);

  const dispatch = useDispatch();

  const handleAddingButtonClick = () => {
    dispatch(setPopupPurchaseStatus(false));
    dispatch(setPopupNotificationStatus(true));
  }

  return (
    <section className="popup-purchase" onClick={(evt) => onOverlayClick(evt, () => dispatch(setPopupPurchaseStatus(false)))}>
      <div className="popup-purchase__modal">
        <div className="popup-purchase__wrapper">
          <button
            className="popup-purchase__close"
            type="button"
            name="close"
            aria-label="Закрыть"
            onClick={() => dispatch(setPopupPurchaseStatus(false))}
          >
          </button>

          <h4 className="popup-purchase__title">Добавить товар в корзину</h4>
          <div className="popup-purchase__content">
            <picture>
              <source type="image/webp" srcSet={`${selectedItem.img}.webp`}/>
              <img className="popup-purchase__image" src={`${selectedItem.img}.png`} alt="Гитара" width="48" height="124"/>
            </picture>

            <div className="popup-purchase__information">
              <h3 className="popup-purchase__item-name">
                {selectedItem.type.includes(InstrumentType.GUITAR.toLowerCase())
                  ? InstrumentType.GUITAR.toUpperCase()
                  : InstrumentType.UKULELE.toUpperCase()} {selectedItem.name.toUpperCase()}
              </h3>
              <span className="popup-purchase__item-code">Артикул: {selectedItem.id}</span>
              <span className="popup-purchase__features">
                {selectedItem.type[0].toUpperCase() + selectedItem.type.slice(1)}, {selectedItem.stringNumber} струнная
                </span>
              <span className="popup-purchase__price">Цена: {selectedItem.price} ₽</span>
            </div>
            <button
              className="popup-purchase__adding"
              onClick={handleAddingButtonClick}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

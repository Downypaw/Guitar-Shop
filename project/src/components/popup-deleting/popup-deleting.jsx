import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getSelectedItem, getItemsInCart} from '../../store/app-business-logic/selectors';
import {setPopupDeletingStatus, deleteItemInCart} from '../../store/action';
import {onOverlayClick} from '../../util';
import {InstrumentType} from '../../const';

export default function PopupDeleting() {

  const selectedItem = useSelector(getSelectedItem);
  const itemsInCart = useSelector(getItemsInCart);

  const dispatch = useDispatch();

  const bodyElement = document.querySelector('body');

  const handleDeletingButtonClick = () => {
    const indexOfDeletingItem = itemsInCart.findIndex((item, index) => item.code === selectedItem.code);
    dispatch(deleteItemInCart(indexOfDeletingItem));
    dispatch(setPopupDeletingStatus(false));
    bodyElement.classList.remove('page__body--unactive');
  }

  const handlePopupClose = () => {
    dispatch(setPopupDeletingStatus(false))
    bodyElement.classList.remove('page__body--unactive');
  }

  return (
    <section className="popup-deleting" onClick={(evt) => onOverlayClick(evt, handlePopupClose)}>
      <div className="popup-deleting__modal">
        <div className="popup-deleting__wrapper">
          <button
            className="popup-deleting__close"
            type="button"
            name="close"
            aria-label="Закрыть"
            onClick={() => handlePopupClose()}
          >
          </button>

          <h4 className="popup-deleting__title">Удалить этот товар?</h4>
          <div className="popup-deleting__content">
            <picture>
              <source type="image/webp" srcSet={`${selectedItem.img}.webp 1x, ${selectedItem.img}@2x.webp 2x`}/>
              <img className="popup-deleting__image" src={`${selectedItem.img}.png 1x, ${selectedItem.img}@2x.png 2x`} alt="Гитара" width="48" height="124"/>
            </picture>

            <div className="popup-deleting__information">
              <h3 className="popup-deleting__item-name">
                {selectedItem.type.includes(InstrumentType.GUITAR.toLowerCase())
                  ? InstrumentType.GUITAR.toUpperCase()
                  : InstrumentType.UKULELE.toUpperCase()} {selectedItem.name.toUpperCase()}
              </h3>
              <span className="popup-deleting__item-code">Артикул: {selectedItem.id}</span>
              <span className="popup-deleting__features">
                {selectedItem.type[0].toUpperCase() + selectedItem.type.slice(1)}, {selectedItem.stringNumber} струнная
                </span>
              <span className="popup-deleting__price">Цена: {selectedItem.price.toLocaleString()} ₽</span>
            </div>
            <div className="popup-deleting__buttons-wrapper">
              <button
                className="popup-deleting__deleting"
                onClick={handleDeletingButtonClick}
              >
                Удалить товар
              </button>

              <button
                className="popup-deleting__continuation"
                onClick={() => handlePopupClose()}
              >
                Продолжить покупки
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

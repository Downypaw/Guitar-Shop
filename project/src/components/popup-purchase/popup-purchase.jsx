import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getSelectedItem, getItemsInCart} from '../../store/app-business-logic/selectors';
import {setPopupPurchaseStatus, setPopupNotificationStatus, setItemsInCart} from '../../store/action';
import {InstrumentType} from '../../const';
import {onOverlayClick} from '../../util';

export default function PopupPurchase() {

  const itemsInCart = useSelector(getItemsInCart);
  const selectedItem = useSelector(getSelectedItem);

  const dispatch = useDispatch();

  const bodyElement = document.querySelector('body');

  const handlePopupClose = () => {
    dispatch(setPopupPurchaseStatus(false));
    bodyElement.classList.remove('page__body--unactive');
  }

  const handleAddingButtonClick = () => {
    if (itemsInCart.filter((item) => item.code === selectedItem.code).length > 0) {
      const index = itemsInCart.findIndex((item) => item.code === selectedItem.code);
      dispatch(setItemsInCart([
        ...itemsInCart.slice(0, index),
        Object.assign({}, selectedItem, {count: itemsInCart[index].count + 1}),
        ...itemsInCart.slice(index + 1)
      ]));
    } else {
      dispatch(setItemsInCart([...itemsInCart, Object.assign({}, selectedItem, {count: 1})]));
    }
    dispatch(setPopupPurchaseStatus(false));
    dispatch(setPopupNotificationStatus(true));
  }

  return (
    <section className="popup-purchase" onClick={(evt) => onOverlayClick(evt, handlePopupClose)}>
      <div className="popup-purchase__modal">
        <div className="popup-purchase__wrapper">
          <button
            className="popup-purchase__close"
            type="button"
            name="close"
            aria-label="Закрыть"
            onClick={() => handlePopupClose()}
          >
          </button>

          <h4 className="popup-purchase__title">Добавить товар в корзину</h4>
          <div className="popup-purchase__content">
            <picture>
              <source type="image/webp" srcSet={`${selectedItem.img}.webp 1x, ${selectedItem.img}@2x.webp 2x`}/>
              <img className="popup-purchase__image" src={`${selectedItem.img}.png 1x, ${selectedItem.img}@2x.png 2x`} alt="Гитара" width="48" height="124"/>
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
              <span className="popup-purchase__price">Цена: {selectedItem.price.toLocaleString()} ₽</span>
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

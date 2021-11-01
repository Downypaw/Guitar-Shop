import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPopupDeletingStatus} from '../../store/app-popup/selectors';
import {getSelectedItem, getItemsInCart} from '../../store/app-business-logic/selectors';
import {setPopupDeletingStatus, setSelectedItem, deleteItemInCart} from '../../store/action';
import {onOverlayClick} from '../../util';
import {InstrumentType} from '../../const';

export default function PopupDeleting() {

  const selectedItem = useSelector(getSelectedItem);
  const itemsInCart = useSelector(getItemsInCart);

  const dispatch = useDispatch();

  const handleDeletingButtonClick = () => {
    const indexOfDeletingItem = itemsInCart.findIndex((item, index) => item.code === selectedItem.code);
    console.log(indexOfDeletingItem);
    dispatch(deleteItemInCart(indexOfDeletingItem));
    dispatch(setPopupDeletingStatus(false));
  }

  return (
    <section className="popup-deleting" onClick={(evt) => onOverlayClick(evt, () => dispatch(setPopupDeletingStatus(false)))}>
      <div className="popup-deleting__modal">
        <div className="popup-deleting__wrapper">
          <button
            className="popup-deleting__close"
            type="button"
            name="close"
            aria-label="Закрыть"
            onClick={() => dispatch(setPopupDeletingStatus(false))}
          >
          </button>

          <h4 className="popup-deleting__title">Удалить этот товар?</h4>
          <div className="popup-deleting__content">
            <picture>
              <source type="image/webp" srcSet={`${selectedItem.img}.webp`}/>
              <img className="popup-deleting__image" src={`${selectedItem.img}.png`} alt="Гитара" width="48" height="124"/>
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
                onClick={() => dispatch(setPopupDeletingStatus(false))}
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

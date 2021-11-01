import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getItemsInCart} from '../../store/app-business-logic/selectors';
import {setPopupDeletingStatus, setSelectedItem, setItemsInCart} from '../../store/action';
import {onEscKeyDown} from '../../util';

export default function CartItem({item, onCountChange}) {
  const itemsInCart = useSelector(getItemsInCart);
  const dispatch = useDispatch();

  const handleMinusButtonClick = () => {
    if (item.count > 1) {
      const index = itemsInCart.findIndex((itemInCart) => itemInCart.code === item.code);
      dispatch(setItemsInCart([
        ...itemsInCart.slice(0, index),
        Object.assign({}, item, {count: itemsInCart[index].count - 1}),
        ...itemsInCart.slice(index + 1)
      ]));
      onCountChange(itemsInCart.reduce((accumulator, currentValue, elementIndex) => {
        const count = elementIndex === index ? currentValue.count - 1 : currentValue.count;
        return accumulator + count * currentValue.price;
      }, 0));
    } else {
      handleDeleting();
    }
  }

  const handlePlusButtonClick = () => {
    const index = itemsInCart.findIndex((itemInCart) => itemInCart.code === item.code);
    dispatch(setItemsInCart([
      ...itemsInCart.slice(0, index),
      Object.assign({}, item, {count: itemsInCart[index].count + 1}),
      ...itemsInCart.slice(index + 1)
    ]));
    onCountChange(itemsInCart.reduce((accumulator, currentValue, elementIndex) => {
      const count = elementIndex === index ? currentValue.count + 1 : currentValue.count;
      return accumulator + count * currentValue.price;
    }, 0));
  }

  const handleDeleting = () => {
    dispatch(setSelectedItem(item));
    dispatch(setPopupDeletingStatus(true));
    document.addEventListener('keydown', (evt) => onEscKeyDown(evt, () => dispatch(setPopupDeletingStatus(false))));
  }

  return (
    <li className="cart-list__item">
      <button
        className="cart-list__item-delete"
        type="button"
        aria-label="Close"
        onClick={handleDeleting}
      >
      </button>
      <picture>
        <source type="image/webp" srcSet={`${item.img}.webp`}/>
        <img className="cart-list__image" src={`${item.img}.png`} alt="Гитара" width="48" height="124"/>
      </picture>

      <div  className="cart-list__group">
        <h3 className="cart-list__item-name">{item.type.toUpperCase()} {item.name.toUpperCase()}</h3>
        <span className="cart-list__item-code">Артикул: {item.code}</span>
        <span className="cart-list__item-description">
          {item.type[0].toUpperCase() + item.type.slice(1)}, {item.stringNumber} струнная
        </span>
      </div>
      <span className="cart-list__item-price">{item.price.toLocaleString()} ₽</span>

      <ul className="cart-list__controls">
        <li className="cart-list__control">
          <button
            className="cart-list__control-button"
            onClick={handleMinusButtonClick}
          >
            -
          </button>
        </li>
        <li className="cart-list__control">
          <button className="cart-list__control-button">{item.count}</button>
        </li>
        <li className="cart-list__control">
          <button
            className="cart-list__control-button"
            onClick={handlePlusButtonClick}
          >
            +
          </button>
        </li>
      </ul>

      <span className="cart-list__total">{(item.price * item.count).toLocaleString()} ₽</span>
    </li>
  );
}

import React from 'react';

export default function CartItem({item}) {
  return (
    <li className="cart-list__item">
      <button className="cart-list__item-delete" type="button" aria-label="Close"></button>
      <picture>
        <source type="image/webp" srcSet={`${item.img}.webp`}/>
        <img className="cart-list__image" src={`${item.img}.png`} alt="Гитара" width="48" height="124"/>
      </picture>

      <div  className="cart-list__group">
        <h3 className="cart-list__item-name">{item.type.toUpperCase()} {item.name.toUpperCase()}</h3>
        <span className="cart-list__item-code">Артикул: {item.id}</span>
        <span className="cart-list__item-description">
          {item.type[0].toUpperCase() + item.type.slice(1)}, {item.stringNumber} струнная
        </span>
      </div>
      <span className="cart-list__item-price">{item.price} ₽</span>

      <ul className="cart-list__controls">
        <li className="cart-list__control">
          <button className="cart-list__control-button">-</button>
        </li>
        <li className="cart-list__control">
          <button className="cart-list__control-button">1</button>
        </li>
        <li className="cart-list__control">
          <button className="cart-list__control-button">+</button>
        </li>
      </ul>

      <span className="cart-list__total">{item.price} ₽</span>
    </li>
  );
}
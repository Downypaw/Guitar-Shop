import React from 'react';
import Header from '../header/header';
import CartItem from '../cart-item/cart-item';
import Footer from '../footer/footer';
import {AppRoute} from '../../const.js';
import {guitars} from '../../mock';

export default function Cart() {
  return (
    <>
      <Header page={AppRoute.CART}/>
      <main className="page-main">
        <div className="container">
          <h1 className="visually-hidden">Магазин Guitar Shop</h1>
          <h2 className="page-title page-title--cart">Корзина</h2>
          <ul className="page-path">
            <li className="page-path__item">
              <a className="page-path__link">Главная</a>
            </li>
            <li className="page-path__item">
              <a className="page-path__link">Каталог</a>
            </li>
            <li className="page-path__item">
              <a className="page-path__link">Оформляем</a>
            </li>
          </ul>

          <ul className="cart-list">
            {guitars.slice(0, 2).map((item) => <CartItem key={item.id} item={item}/>)}
          </ul>

          <div className="cart-ordering">
            <div className="cart-ordering__promocode">
              <h4 className="cart-ordering__title">Промокод на скидку</h4>
              <p className="cart-ordering__text">Введите свой промокод, если он у вас есть.</p>

              <form className="cart-ordering__form" method="post" action="https://echo.htmlacademy.ru/" name="promocode-form">
                <label className="cart-ordering__form-label visually-hidden" htmlFor="promocode">Промокод</label>
                <input className="cart-ordering__form-input" type="text" id="promocode"/>
                <button className="cart-ordering__form-submit" type="submit">Применить купон</button>
              </form>
            </div>
            <div className="cart-ordering__checkout">
              <span className="cart-ordering__total">Всего: 47 000 ₽</span>
              <button className="cart-ordering__order-submit">Оформить заказ</button>
            </div>
          </div>
        </div>
      </main>
      <Footer page={AppRoute.CART}/>
    </>
  );
}

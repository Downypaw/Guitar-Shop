import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import {AppRoute} from '../../const.js';

export default function Cart() {
  return (
    <>
      <Header page={AppRoute.CART}/>
      <main className="page-main">
        <h1 className="visually-hidden">Магазин Guitar Shop</h1>
        <h2 className="page-title">Корзина</h2>
        <ul className="page-path">
          <li className="page-path__item">Главная</li>
          <li className="page-path__item">Каталог</li>
          <li className="page-path__item">Оформляем</li>
        </ul>
      </main>
      <Footer page={AppRoute.CART}/>
    </>
  );
}

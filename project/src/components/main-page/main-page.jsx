import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import {AppRoute} from '../../const.js';

export default function MainPage() {
  return (
    <>
      <Header page={AppRoute.INDEX}/>
      <main className="page-main">
        <h1 className="visually-hidden">Магазин Guitar Shop</h1>
        <h2 className="page-title">Каталог гитар</h2>
        <ul className="page-path">
          <li className="page-path__item">Главная</li>
          <li className="page-path__item">Каталог</li>
        </ul>
      </main>
      <Footer page={AppRoute.INDEX}/>
    </>
  );
}

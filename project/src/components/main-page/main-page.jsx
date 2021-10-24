import React from 'react';
import Header from '../header/header';
import Filter from '../filter/filter';
import Sorting from '../sorting/sorting';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {AppRoute} from '../../const.js';

export default function MainPage() {
  return (
    <>
      <Header page={AppRoute.INDEX}/>
      <main className="page-main">
        <div className="container">
          <h1 className="visually-hidden">Магазин Guitar Shop</h1>
          <h2 className="page-title">Каталог гитар</h2>
          <ul className="page-path">
            <li className="page-path__item">
              <a className="page-path__link">Главная</a>
            </li>
            <li className="page-path__item">
              <a className="page-path__link">Каталог</a>
            </li>
          </ul>
          <div className="page-main__content">
            <Filter />
            <Sorting />
            <Catalog />
          </div>
        </div>
      </main>
      <Footer page={AppRoute.INDEX}/>
    </>
  );
}

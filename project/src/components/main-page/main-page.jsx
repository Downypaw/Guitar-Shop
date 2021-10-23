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
      </main>
      <Footer page={AppRoute.INDEX}/>
    </>
  );
}

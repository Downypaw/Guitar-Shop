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
      </main>
      <Footer page={AppRoute.CART}/>
    </>
  );
}

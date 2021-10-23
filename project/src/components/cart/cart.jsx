import React from 'react';
import Header from '../header/header';
import {AppRoute} from '../../const.js';

export default function Cart() {
  return (
    <>
      <Header page={AppRoute.CART}/>
      <main className="page-main">
      </main>
    </>
  );
}

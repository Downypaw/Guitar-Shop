import React from 'react';
import Header from '../header/header';
import {AppRoute} from '../../const.js';

export default function MainPage() {
  return (
    <>
      <Header page={AppRoute.INDEX}/>
      <main className="page-main">
      </main>
    </>
  );
}

import React from 'react';
import {Link} from "react-router-dom";
import Header from '../header/header';
import Filter from '../filter/filter';
import Sorting from '../sorting/sorting';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import PopupPurchase from '../popup-purchase/popup-purchase';
import PopupNotification from '../popup-notification/popup-notification';
import {useSelector} from 'react-redux';
import {getPopupPurchaseStatus, getPopupNotificationStatus} from '../../store/app-popup/selectors';
import {AppRoute} from '../../const';

export default function MainPage() {

  const isPopupPurchaseActive = useSelector(getPopupPurchaseStatus);
  const isPopupNotificationActive = useSelector(getPopupNotificationStatus);

  const bodyElement = document.querySelector('body');

  if (isPopupPurchaseActive || isPopupNotificationActive) {
    bodyElement.classList.add('page__body--unactive');
  }

  return (
    <>
      <Header page={AppRoute.INDEX}/>
      <main className="page-main">
        <div className="container">
          <h1 className="visually-hidden">Магазин Guitar Shop</h1>
          <h2 className="page-title">Каталог гитар</h2>
          <ul className="page-path">
            <li className="page-path__item">
              <Link className="page-path__link" to="/blank">Главная</Link>
            </li>
            <li className="page-path__item">
              Каталог
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
      {isPopupPurchaseActive && <PopupPurchase />}
      {isPopupNotificationActive && <PopupNotification />}
    </>
  );
}

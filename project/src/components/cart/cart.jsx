import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import Header from '../header/header';
import CartItem from '../cart-item/cart-item';
import Footer from '../footer/footer';
import PopupDeleting from '../popup-deleting/popup-deleting';
import {useSelector} from 'react-redux';
import {getPopupDeletingStatus} from '../../store/app-popup/selectors';
import {getItemsInCart} from '../../store/app-business-logic/selectors';
import {Promocode, AppRoute} from '../../const';

export default function Cart() {
  const itemsInCart = useSelector(getItemsInCart);
  const [promocode, setPromocode] = useState('');
  const [countTotal, setCountTotal] = useState(itemsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.count * currentValue.price, 0));
  const [usedPromocodes, setUsedPromocodes] = useState([]);
  const isPopupDeletingActive = useSelector(getPopupDeletingStatus);
  const ref = useRef();

  const bodyElement = document.querySelector('body');

  if (isPopupDeletingActive) {
    bodyElement.classList.add('page__body--unactive');
  }

  const handlePromocodeSubmit = (evt) => {
    evt.preventDefault();
    if (itemsInCart.length > 0) {
      switch(promocode) {
        case Promocode.GITARAHIT.name:
          if (!usedPromocodes.includes(Promocode.GITARAHIT.name)) {
            setCountTotal(countTotal * ((100 - Promocode.GITARAHIT.SALE_PERCENT) / 100));
            setUsedPromocodes([...usedPromocodes, Promocode.GITARAHIT.name]);
          }
          break;
        case Promocode.SUPERGITARA.name:
          if (!usedPromocodes.includes(Promocode.SUPERGITARA.name)) {
            setCountTotal(countTotal - Promocode.SUPERGITARA.SALE_SUM);
            setUsedPromocodes([...usedPromocodes, Promocode.SUPERGITARA.name]);
          }
          break;
        case Promocode.GITARA2020.name:
          if ((Promocode.GITARA2020.SALE_SUM / countTotal * 100) < Promocode.GITARA2020.SALE_PERCENT_LIMIT && !usedPromocodes.includes(Promocode.GITARA2020.name)) {
            setCountTotal(countTotal - Promocode.GITARA2020.SALE_SUM)
            setUsedPromocodes([...usedPromocodes, Promocode.GITARA2020.name]);
          }
          break;
        default:
          setCountTotal(countTotal);
      }
    }
    setPromocode('');
  }

  const handlePromocodeInput = (evt) => {
    setPromocode(evt.target.value);
    if (evt.target.value in Promocode) {
      if (itemsInCart.length > 0) {
        ref.current.setCustomValidity('');
      } else {
        ref.current.setCustomValidity('Промокоды не могут быть применены при отсутствии товаров в корзине');
      }

      if (usedPromocodes.includes(evt.target.value)) {
        ref.current.setCustomValidity('Этот промокод уже был использован');
      }
    } else {
      ref.current.setCustomValidity('Промокод не действителен');
    }
  }

  return (
    <>
      <Header page={AppRoute.CART}/>
      <main className="page-main">
        <div className="container">
          <h1 className="visually-hidden">Магазин Guitar Shop</h1>
          <h2 className="page-title page-title--cart">Корзина</h2>
          <ul className="page-path">
            <li className="page-path__item">
              <Link className="page-path__link" to="/blank">Главная</Link>
            </li>
            <li className="page-path__item">
              <Link className="page-path__link" to="/">Каталог</Link>
            </li>
            <li className="page-path__item">
              Оформляем
            </li>
          </ul>

          <ul className="cart-list">
            {itemsInCart.map((item) => <CartItem key={item.code} item={item} onCountChange={(value) => setCountTotal(value)}/>)}
          </ul>

          <div className="cart-ordering">
            <div className="cart-ordering__promocode">
              <h4 className="cart-ordering__title">Промокод на скидку</h4>
              <p className="cart-ordering__text">Введите свой промокод, если он у вас есть.</p>

              <form
                className="cart-ordering__form"
                method="post" action="https://echo.htmlacademy.ru/"
                name="promocode-form"
                onSubmit={handlePromocodeSubmit}
              >
                <label className="cart-ordering__form-label visually-hidden" htmlFor="promocode">Промокод</label>
                <input
                  className="cart-ordering__form-input"
                  type="text"
                  id="promocode"
                  value={promocode}
                  onChange={handlePromocodeInput}
                  ref={ref}
                />
                <button className="cart-ordering__form-submit" type="submit">Применить купон</button>
              </form>
            </div>
            <div className="cart-ordering__checkout">
              <span className="cart-ordering__total">Всего: {countTotal.toLocaleString()} ₽</span>
              <button className="cart-ordering__order-submit">Оформить заказ</button>
            </div>
          </div>
        </div>
      </main>
      <Footer page={AppRoute.CART}/>
      {isPopupDeletingActive && <PopupDeleting />}
    </>
  );
}

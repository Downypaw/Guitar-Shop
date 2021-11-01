import React from 'react';
import {useHistory} from "react-router-dom";
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';

export default function Footer({page}) {
  let history = useHistory();

  const handleLogoClick = () => {
    if (page !== AppRoute.INDEX) {
      history.push('/');
    }
  }

  const handleEnterKeyDown = (evt) => {
    if (evt.key === 'Enter') {
      handleLogoClick()
    }
  }

  return (
    <footer className="page-footer">
      <div className="page-footer__content">
        <div className="page-footer__container container">
          <div className="page-footer__left"
            className={`page-footer__left ${page !== AppRoute.INDEX ? 'page-footer__left--active' : ''}`}
            tabIndex={page !== AppRoute.INDEX ? "0" : "-1"}
            onClick={handleLogoClick}
            onKeyDown={handleEnterKeyDown}
          >
            <img className="page-footer__logo" src="img/logo-footer.svg" width="67" height="70" alt="Логотип"/>
          </div>

          <div className="page-footer__about">
            <h3 className="page-footer__title">О нас</h3>
            <p className="page-footer__paragraph">Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>
            <p className="page-footer__paragraph">Все инструменты проверены, отстроены и доведены до идеала! </p>
          </div>

          <div className="page-footer__catalog">
            <h3 className="page-footer__title">Каталог</h3>
            <ul className="page-footer__catalog-list">
              <li className="page-footer__catalog-item">
                <a className="page-footer__catalog-link" href="#">Акустические гитары</a>
              </li>
              <li className="page-footer__catalog-item">
                <a className="page-footer__catalog-link" href="#">Классические гитары</a>
              </li>
              <li className="page-footer__catalog-item">
                <a className="page-footer__catalog-link" href="#">Электрогитары</a>
              </li>
              <li className="page-footer__catalog-item">
                <a className="page-footer__catalog-link" href="#">Бас-гитары</a>
              </li>
              <li className="page-footer__catalog-item">
                <a className="page-footer__catalog-link" href="#">Укулеле</a>
              </li>
            </ul>
          </div>

          <div className="page-footer__information">
            <h3 className="page-footer__title">Информация</h3>
            <ul className="page-footer__information-list">
              <li className="page-footer__information-item">
                <a className="page-footer__information-link" href="#">Где купить?</a>
              </li>
              <li className="page-footer__information-item">
                <a className="page-footer__information-link" href="#">Блог</a>
              </li>
              <li className="page-footer__information-item">
                <a className="page-footer__information-link" href="#">Вопрос - ответ</a>
              </li>
              <li className="page-footer__information-item">
                <a className="page-footer__information-link" href="#">Возврат</a>
              </li>
              <li className="page-footer__information-item">
                <a className="page-footer__information-link" href="#">Сервис-центры</a>
              </li>
            </ul>
          </div>

          <div className="page-footer__contacts">
            <h3 className="page-footer__title">Контакты</h3>
            <p className="page-footer__address">
              г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.
              <br/>
              <a className="page-footer__phone" href="#">8-812-500-50-50</a>
            </p>
            <p className="page-footer__mode"> Режим работы: <span className="page-footer__clock">с 11:00 до 20:00</span>,  без выходных.</p>
          </div>

          <ul className="page-footer__socials">
            <li className="page-footer__socials-item">
              <a className="page-footer__socials-link page-footer__socials-link--facebook" href="#">
                <span className="visually-hidden">Facebook</span>
              </a>
            </li>
            <li className="page-footer__socials-item">
              <a className="page-footer__socials-link page-footer__socials-link--instagram" href="#">
                <span className="visually-hidden">Instagram</span>
              </a>
            </li>
            <li className="page-footer__socials-item">
              <a className="page-footer__socials-link page-footer__socials-link--twitter" href="#">
                <span className="visually-hidden">Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  page: PropTypes.string.isRequired,
}

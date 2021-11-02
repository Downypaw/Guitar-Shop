import React from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

export default function Footer() {
  let history = useHistory();

  const handleLogoClick = () => {
    history.push('/');
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
          <div
            className="page-footer__left page-footer__left--active"
            tabIndex="0"
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
                <Link className="page-footer__catalog-link" to="/blank">Акустические гитары</Link>
              </li>
              <li className="page-footer__catalog-item">
                <Link className="page-footer__catalog-link" to="/blank">Классические гитары</Link>
              </li>
              <li className="page-footer__catalog-item">
                <Link className="page-footer__catalog-link" to="/blank">Электрогитары</Link>
              </li>
              <li className="page-footer__catalog-item">
                <Link className="page-footer__catalog-link" to="/blank">Бас-гитары</Link>
              </li>
              <li className="page-footer__catalog-item">
                <Link className="page-footer__catalog-link" to="/blank">Укулеле</Link>
              </li>
            </ul>
          </div>

          <div className="page-footer__information">
            <h3 className="page-footer__title">Информация</h3>
            <ul className="page-footer__information-list">
              <li className="page-footer__information-item">
                <Link className="page-footer__information-link" to="/blank">Где купить?</Link>
              </li>
              <li className="page-footer__information-item">
                <Link className="page-footer__information-link" to="/blank">Блог</Link>
              </li>
              <li className="page-footer__information-item">
                <Link className="page-footer__information-link" to="/blank">Вопрос - ответ</Link>
              </li>
              <li className="page-footer__information-item">
                <Link className="page-footer__information-link" to="/blank">Возврат</Link>
              </li>
              <li className="page-footer__information-item">
                <Link className="page-footer__information-link" to="/blank">Сервис-центры</Link>
              </li>
            </ul>
          </div>

          <div className="page-footer__contacts">
            <h3 className="page-footer__title">Контакты</h3>
            <p className="page-footer__address">
              г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.
              <br/>
              <Link className="page-footer__phone" to="/blank">8-812-500-50-50</Link>
            </p>
            <p className="page-footer__mode"> Режим работы: <span className="page-footer__clock">с 11:00 до 20:00</span>,  без выходных.</p>
          </div>

          <ul className="page-footer__socials">
            <li className="page-footer__socials-item">
              <Link className="page-footer__socials-link page-footer__socials-link--facebook" to="/blank">
                <span className="visually-hidden">Facebook</span>
              </Link>
            </li>
            <li className="page-footer__socials-item">
              <Link className="page-footer__socials-link page-footer__socials-link--instagram" to="/blank">
                <span className="visually-hidden">Instagram</span>
              </Link>
            </li>
            <li className="page-footer__socials-item">
              <Link className="page-footer__socials-link page-footer__socials-link--twitter" to="/blank">
                <span className="visually-hidden">Twitter</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

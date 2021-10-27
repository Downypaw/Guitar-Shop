import React from 'react';
import PropTypes from 'prop-types';
import {DEFAULT_RATING} from '../../const';
import {onEscKeyDown} from '../../util';
import {useDispatch} from 'react-redux';
import {setPopupPurchaseStatus, setPopupNotificationStatus, setSelectedItem} from '../../store/action';

export default function Card({guitar}) {
  const dispatch = useDispatch();
  const bodyElement = document.querySelector('body');

  const handleEscKeydown = (evt) => {
    dispatch(setPopupPurchaseStatus(false));
    dispatch(setPopupNotificationStatus(false));
  }

  const handlePurchaseButtonClick = () => {
    dispatch(setSelectedItem(guitar));
    dispatch(setPopupPurchaseStatus(true));
    document.addEventListener('keydown', (evt) => onEscKeyDown(evt, handleEscKeydown));
  }

  return (
    <li className="card">
      <picture className="card__picture">
        <source type="image/webp" srcSet={`${guitar.img}.webp`}/>
        <img className="card__image" src={`${guitar.img}.png`} alt="Гитара" width="68" height="190"/>
      </picture>
      <div className="card__customer-estimate">
        <div className="card__rating rating">
          <div className="card__stars rating__stars">
            <span style={{width: `${Math.round(100 / 5 * DEFAULT_RATING)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <span className="card__comments">{guitar.popularity}</span>
      </div>
      <div className="card__main-information">
        <span className="card__guitar-name">{guitar.name}</span>
        <span className="card__guitar-price">{guitar.price.toLocaleString()} ₽</span>
      </div>
      <button className="card__more-information">Подробнее</button>
      <button
        className="card__purchase"
        onClick={handlePurchaseButtonClick}
      >
        Купить
      </button>
    </li>
  );
}

Card.propTypes = PropTypes.shape({
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  stringNumber: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
}).isRequired;

import React from 'react';

export default function Filter() {
  return (
    <div className="filter">
      <h3 className="filter__title">Фильтр</h3>
      <form className="filter__form" method="post" action="https://echo.htmlacademy.ru/" name="filter-form">
        <div className="filter__group">
          <legend className="filter__group-title">Цена, <span className="filter__currency">₽</span></legend>
          <div className="filter__price-wrapper">
            <label className="filter__price-label visually-hidden" htmlFor="min-price">Нижняя граница</label>
            <input className="filter__price-input" type="number" placeholder="1000" id="min-price"/>
          </div>

          <div className="filter__price-wrapper">
            <label className="filter__price-label visually-hidden" htmlFor="max-price">Верхняя граница</label>
            <input className="filter__price-input" type="number" placeholder="30000" id="max-price"/>
          </div>
        </div>

        <div className="filter__group">
          <legend className="filter__group-title">Тип гитар</legend>
          <ul className="filter__type-list">
            <li className="filter__type-item">
            <input className="filter__type-checkbox visually-hidden" type="checkbox" id="type-1"/>
            <label className="filter__type-label" htmlFor="type-1">Акустические гитары</label>
            </li>
            <li className="filter__type-item">
              <input className="filter__type-checkbox visually-hidden" type="checkbox" id="type-2"/>
              <label className="filter__type-label" htmlFor="type-2">Электрогитары</label>
            </li>
            <li className="filter__type-item">
              <input className="filter__type-checkbox visually-hidden" type="checkbox" id="type-3"/>
              <label className="filter__type-label" htmlFor="type-3">Укулеле</label>
            </li>
          </ul>
        </div>

        <div className="filter__group">
          <legend className="filter__group-title">Количество струн</legend>
          <ul className="filter__type-list">
            <li className="filter__type-item">
            <input className="filter__type-checkbox visually-hidden" type="checkbox" id="4-string"/>
            <label className="filter__type-label" htmlFor="4-string">4</label>
            </li>
            <li className="filter__type-item">
              <input className="filter__type-checkbox visually-hidden" type="checkbox" id="6-string"/>
              <label className="filter__type-label" htmlFor="6-string">6</label>
            </li>
            <li className="filter__type-item">
              <input className="filter__type-checkbox visually-hidden" type="checkbox" id="7-string"/>
              <label className="filter__type-label" htmlFor="7-string">7</label>
            </li>
            <li className="filter__type-item">
              <input className="filter__type-checkbox visually-hidden" type="checkbox" id="12-string"/>
              <label className="filter__type-label" htmlFor="12-string">12</label>
            </li>
          </ul>
        </div>
        <button className="filter__submit">Показать</button>
      </form>
    </div>
  );
}

import React from 'react';

export default function Sorting() {
  return (
    <div className="sorting">
      <div className="sorting__block-wrapper">
        <h3 className="sorting__title">Сортировать:</h3>
        <ul className="sorting__list">
          <li className="sorting__list-item">
            <a className="sorting__option">по цене</a>
          </li>
          <li className="sorting__list-item">
            <a className="sorting__option">по популярности</a>
          </li>
        </ul>
      </div>

      <ul className="sorting__direction">
        <li className="sorting__direction-type">
          <button className="sorting__direction-button" aria-label="По возрастанию"></button>
        </li>
        <li className="sorting__direction-type">
          <button className="sorting__direction-button" aria-label="По убыванию"></button>
        </li>
      </ul>
    </div>
  );
}

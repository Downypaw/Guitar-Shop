import React from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {getActiveSortOption, getActiveSortDirection} from '../../store/app-business-logic/selectors';
import {setActiveSortOption, setActiveSortDirection} from '../../store/action';
import {SortType, SortDirection} from '../../const';

export default function Sorting() {

  const activeSortingOption = useSelector(getActiveSortOption);
  const activeSortingDirection = useSelector(getActiveSortDirection);
  const dispatch = useDispatch();

  return (
    <div className="sorting">
      <div className="sorting__block-wrapper">
        <h3 className="sorting__title">Сортировать:</h3>
        <ul className="sorting__list">
          <li className="sorting__list-item">
            <Link
              className={`sorting__option ${activeSortingOption === SortType.PRICE ? 'sorting__option--active' : ''}`}
              onClick={() => dispatch(setActiveSortOption(SortType.PRICE))}
              to="/blank"
            >
              по цене
            </Link>
          </li>
          <li className="sorting__list-item">
            <Link
              className={`sorting__option ${activeSortingOption === SortType.POPULARITY ? 'sorting__option--active' : ''}`}
              onClick={() => dispatch(setActiveSortOption(SortType.POPULARITY))}
              to="/blank"
            >
              по популярности
            </Link>
          </li>
        </ul>
      </div>

      <ul className="sorting__direction">
        <li className={`sorting__direction-type ${activeSortingDirection === SortDirection.ASCENDING ? 'sorting__direction-type--active' : ''}`}>
          <button
            className="sorting__direction-button"
            aria-label="По возрастанию"
            onClick={() => dispatch(setActiveSortDirection(SortDirection.ASCENDING))}
            tabIndex="0"
            type="button"
          >
          </button>
        </li>
        <li className={`sorting__direction-type ${activeSortingDirection === SortDirection.DESCENDING ? 'sorting__direction-type--active' : ''}`}>
          <button
            className="sorting__direction-button"
            aria-label="По убыванию"
            onClick={() => dispatch(setActiveSortDirection(SortDirection.DESCENDING))}
            tabIndex="0"
            type="button"
          >
          </button>
        </li>
      </ul>
    </div>
  );
}

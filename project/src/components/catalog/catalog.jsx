import React, {useState} from 'react';
import Card from '../card/card';
import {useSelector} from 'react-redux';
import {getResultItems} from '../../store/app-data/selectors';
import {ITEMS_COUNT_ON_PAGE, START_PAGE, DISPLAYED_BUTTONS} from '../../const';

export default function Catalog() {
  const [activePage, setActivePage] = useState(1);

  const guitars = useSelector(getResultItems);

  const handlePageButtonClick = (evt) => {
    setActivePage(Number(evt.target.value));
  }

  return (
    <div className="catalog">
      <ul className="catalog__product-list">
        {
          [...guitars.slice((activePage - 1) * ITEMS_COUNT_ON_PAGE, activePage * ITEMS_COUNT_ON_PAGE)]
            .map((guitar) => <Card key={guitar.code} guitar={guitar}/>)
        }
      </ul>
      <ul className="catalog__buttons-list">
      {(guitars.length > ITEMS_COUNT_ON_PAGE && activePage !== START_PAGE) &&
        <li className="catalog__buttons-item">
          <button className="catalog__button catalog__button--previous" onClick={() => setActivePage(Number(activePage - 1))}>Назад</button>
        </li>
      }

        <li className="catalog__buttons-item">
          <button
            className={`catalog__button ${activePage === START_PAGE ? 'catalog__button--active' : ''}`}
            onClick={handlePageButtonClick}
            value="1"
          >
            {START_PAGE}
          </button>
        </li>

        {(guitars.length > ITEMS_COUNT_ON_PAGE && activePage === START_PAGE && activePage !== START_PAGE + 1) &&
          <li className="catalog__buttons-item">
            <button className="catalog__button f" onClick={handlePageButtonClick} value={activePage + 1}>
              {activePage + 1}
            </button>
          </li>
        }

        {activePage - 1 > START_PAGE && guitars.length > ITEMS_COUNT_ON_PAGE* DISPLAYED_BUTTONS &&
          <li className="catalog__buttons-item">
            <button className="catalog__button">
              ...
            </button>
          </li>
        }

        {(guitars.length > ITEMS_COUNT_ON_PAGE && activePage !== 1 && (activePage !== Math.ceil(guitars.length / ITEMS_COUNT_ON_PAGE) || activePage === START_PAGE + 1)) &&
          <li className="catalog__buttons-item">
            <button className="catalog__button catalog__button--active" onClick={handlePageButtonClick} value={activePage}>
              {activePage}
            </button>
          </li>
        }

        {activePage + 1 < Math.ceil(guitars.length / ITEMS_COUNT_ON_PAGE) && guitars.length > ITEMS_COUNT_ON_PAGE * DISPLAYED_BUTTONS &&
          <li className="catalog__buttons-item">
            <button className="catalog__button">
              ...
            </button>
          </li>
        }

        {(guitars.length > ITEMS_COUNT_ON_PAGE && activePage === Math.ceil(guitars.length / ITEMS_COUNT_ON_PAGE)) && guitars.length > ITEMS_COUNT_ON_PAGE * (START_PAGE + 1) &&
          <li className="catalog__buttons-item">
            <button className="catalog__button y" onClick={handlePageButtonClick} value={Math.ceil(guitars.length / ITEMS_COUNT_ON_PAGE) - 1}>
              {activePage - 1}
            </button>
          </li>
        }

        {guitars.length > ITEMS_COUNT_ON_PAGE && guitars.length > ITEMS_COUNT_ON_PAGE * (START_PAGE + 1) &&
          <li className="catalog__buttons-item">
            <button
              className={`catalog__button ${activePage === Math.ceil(guitars.length / ITEMS_COUNT_ON_PAGE) ? 'catalog__button--active' : ''}`}
              onClick={handlePageButtonClick}
              value={Math.ceil(guitars.length / ITEMS_COUNT_ON_PAGE)}
            >
              {Math.ceil(guitars.length / ITEMS_COUNT_ON_PAGE)}
            </button>
          </li>
        }

        {(guitars.length > ITEMS_COUNT_ON_PAGE && activePage !== Math.ceil(guitars.length / ITEMS_COUNT_ON_PAGE)) &&
          <li className="catalog__buttons-item">
            <button className="catalog__button catalog__button--next" onClick={() => setActivePage(Number(activePage + 1))}>
              Далее
            </button>
          </li>
        }
      </ul>
    </div>
  );
}

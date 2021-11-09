import React from 'react';
import {MINUS_CODE, PriceBoard, InstrumentTypeName, StringsNumberForInstrument} from '../../const';
import {useSelector, useDispatch} from 'react-redux';
import {getMinPrice, getMaxPrice, getInstrumentTypes, getStringNumbers} from '../../store/app-filter/selectors';
import {getCatalogItems} from '../../store/app-data/selectors';
import {setMinPrice, setMaxPrice, setInstrumentType, setStringNumber} from '../../store/action';

export default function Filter() {
  const allItems = useSelector(getCatalogItems);
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);
  const instrumentTypes = useSelector(getInstrumentTypes);
  const stringNumbers = useSelector(getStringNumbers);

  const displayedStringOptions = instrumentTypes.length > 0
    ? [...new Set(
      instrumentTypes.reduce((accumulator, currentValue, index) => {
        accumulator = [...accumulator, ...StringsNumberForInstrument[currentValue]];
        return accumulator;
      }, []))]
    : [
      ...new Set(Object.values(StringsNumberForInstrument).reduce((accumulator, currentValue) => {
        accumulator = [...accumulator, ...currentValue];
        return accumulator;
      }), [])
    ];

    const displayedInstrumentTypes = stringNumbers.length > 0
      ? [...new Set(Object.entries(StringsNumberForInstrument).reduce((accumulator, [key, value]) => {
	       if (value.find((value) => stringNumbers.includes(value))) {
           accumulator.push(key)
         }
         return accumulator;
       }, []))]
      : Object.values(InstrumentTypeName);

  const dispatch = useDispatch();

  const maxPriceOfAllItems = Math.max(...allItems.map((item) => item.price));
  const minPriceOfAllItems = Math.min(...allItems.map((item) => item.price));


  const handleMinusKeyDown = (evt) => {
    if (evt.keyCode === MINUS_CODE) {
      evt.preventDefault();
    }
  }

  const checkField = (board) => {
    if (board === PriceBoard.MIN) {
      if (minPrice > maxPrice && maxPrice && minPrice) {
        dispatch(setMinPrice(Number(maxPrice)));
      }

      if (minPrice < minPriceOfAllItems && minPrice) {
        dispatch(setMinPrice(Number(minPriceOfAllItems)));
      }

      if (minPrice > maxPriceOfAllItems) {
        dispatch(setMinPrice(Number(maxPriceOfAllItems)));
      }
    }

    if (board === PriceBoard.MAX) {
      if (maxPrice < minPrice && maxPrice && minPrice) {
        dispatch(setMaxPrice(Number(minPrice)));
      }

      if (maxPrice > maxPriceOfAllItems) {
        dispatch(setMaxPrice(Number(maxPriceOfAllItems)));
      }

      if (maxPrice < minPriceOfAllItems && maxPrice) {
        dispatch(setMaxPrice(Number(minPriceOfAllItems)));
      }
    }
  }

  const handleInstrumentTypesChange = (item) => {
    if (instrumentTypes.includes(item)) {
      const index = instrumentTypes.findIndex((type) => type === item);
      dispatch(setInstrumentType([
        ...instrumentTypes.slice(0, index),
        ...instrumentTypes.slice(index + 1),
      ]));
    } else {
      dispatch(setInstrumentType([...instrumentTypes, item]));
    }
  }

  const handleStringNumbersChange = (item) => {
    if (stringNumbers.includes(item)) {
      const index = stringNumbers.findIndex((type) => type === item);
      dispatch(setStringNumber([
        ...stringNumbers.slice(0, index),
        ...stringNumbers.slice(index + 1),
      ]));
    } else {
      dispatch(setStringNumber([...stringNumbers, item]));
    }
  }

  return (
    <div className="filter">
      <h3 className="filter__title">Фильтр</h3>
      <form className="filter__form" method="post" action="https://echo.htmlacademy.ru/" name="filter-form">
        <div className="filter__group">
          <legend className="filter__group-title">Цена, <span className="filter__currency">₽</span></legend>
          <div className="filter__price-wrapper">
            <label className="filter__price-label visually-hidden" htmlFor="min-price">Нижняя граница</label>
            <input
              className="filter__price-input"
              value={minPrice ? minPrice : ''}
              type="number"
              placeholder={minPriceOfAllItems}
              id="min-price"
              onKeyDown={handleMinusKeyDown}
              onChange={(evt) => {
                if (evt.target.value >= 0) {
                  dispatch(setMinPrice(Number(evt.target.value)));
                }
              }}
              onBlur={() => checkField(PriceBoard.MIN)}
            />
          </div>

          <div className="filter__price-wrapper">
            <label className="filter__price-label visually-hidden" htmlFor="max-price">Верхняя граница</label>
            <input
              className="filter__price-input"
              value={maxPrice ? maxPrice : ''}
              type="number"
              placeholder={maxPriceOfAllItems}
              id="max-price"
              onKeyDown={handleMinusKeyDown}
              onChange={(evt) => {
                if (evt.target.value >= 0) {
                  dispatch(setMaxPrice(Number(evt.target.value)));
                }
              }}
              onBlur={() => checkField(PriceBoard.MAX)}
            />
          </div>
        </div>

        <div className="filter__group">
          <legend className="filter__group-title">Тип гитар</legend>
          <ul className="filter__type-list">
            <li className="filter__type-item">
            <input
              className="filter__type-checkbox visually-hidden"
              type="checkbox"
              id="type-1"
              disabled={!displayedInstrumentTypes.includes(InstrumentTypeName.ACUSTIC)}
              onClick={() => handleInstrumentTypesChange(InstrumentTypeName.ACUSTIC)}
            />
            <label
              className="filter__type-label"
              htmlFor="type-1"
            >
              Акустические гитары
            </label>
            </li>
            <li className="filter__type-item">
              <input
                className="filter__type-checkbox visually-hidden"
                type="checkbox"
                id="type-2"
                disabled={!displayedInstrumentTypes.includes(InstrumentTypeName.ELECTRO)}
                onClick={() => handleInstrumentTypesChange(InstrumentTypeName.ELECTRO)}
              />
              <label
                className="filter__type-label"
                htmlFor="type-2"
              >
                Электрогитары
              </label>
            </li>
            <li className="filter__type-item">
              <input
                className="filter__type-checkbox visually-hidden"
                type="checkbox"
                id="type-3"
                disabled={!displayedInstrumentTypes.includes(InstrumentTypeName.UKULELE)}
                onClick={() => handleInstrumentTypesChange(InstrumentTypeName.UKULELE)}
              />
              <label
                className="filter__type-label"
                htmlFor="type-3"
              >
                Укулеле
              </label>
            </li>
          </ul>
        </div>

        <div className="filter__group">
          <legend className="filter__group-title">Количество струн</legend>
          <ul className="filter__type-list">
            <li className="filter__type-item">
            <input
              className="filter__type-checkbox visually-hidden"
              type="checkbox"
              id="4-string"
              disabled={!displayedStringOptions.includes(4)}
              onClick={(evt) => handleStringNumbersChange(4)}
            />
            <label
              className="filter__type-label"
              htmlFor="4-string"
            >
              4
            </label>
            </li>
            <li className="filter__type-item">
              <input
                className="filter__type-checkbox visually-hidden"
                type="checkbox"
                id="6-string"
                disabled={!displayedStringOptions.includes(6)}
                onClick={(evt) => handleStringNumbersChange(6)}
              />
              <label
                className="filter__type-label"
                htmlFor="6-string"
              >
                6
              </label>
            </li>
            <li className="filter__type-item">
              <input
                className="filter__type-checkbox visually-hidden"
                type="checkbox"
                id="7-string"
                disabled={!displayedStringOptions.includes(7)}
                onClick={(evt) => handleStringNumbersChange(7)}
              />
              <label
                className="filter__type-label"
                htmlFor="7-string"
              >
                7
              </label>
            </li>
            <li className="filter__type-item">
              <input
                className="filter__type-checkbox visually-hidden"
                type="checkbox"
                id="12-string"
                disabled={!displayedStringOptions.includes(12)}
                onClick={(evt) => handleStringNumbersChange(12)}
              />
              <label
                className="filter__type-label"
                htmlFor="12-string"
              >
                12
              </label>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

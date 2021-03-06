import {ReducerName, SortType} from '../../const';
import {createSelector} from 'reselect';
import {sortByProperty} from '../../util';
import {getActiveSortOption, getActiveSortDirection} from '../app-business-logic/selectors';
import {getMinPrice, getMaxPrice, getInstrumentTypes, getStringNumbers} from '../app-filter/selectors';

export const getCatalogItems = (state) => state[ReducerName.DATA].catalogItems;

export const getResultItems = createSelector(
  [getCatalogItems, getActiveSortOption, getActiveSortDirection, getMinPrice, getMaxPrice, getInstrumentTypes, getStringNumbers],
  (catalogItems, activeSortOption, activeSortDirection, minPrice, maxPrice, instrumentTypes, stringNumbers) => {
    const currentSortOption = !activeSortOption && activeSortDirection ? SortType.PRICE : activeSortOption;
    let sortedItems;
    switch (currentSortOption) {
      case SortType.PRICE:
        sortedItems =  catalogItems.slice().sort(sortByProperty(SortType.PRICE, activeSortDirection));
        break;
      case SortType.POPULARITY:
        sortedItems = catalogItems.slice().sort(sortByProperty(SortType.POPULARITY, activeSortDirection));
        break;
      default:
        sortedItems = catalogItems;
        break;
    }

    return sortedItems
      .filter((item) => {
        if (minPrice) {
          return item.price >= minPrice;
        }
        return true;
      })
      .filter((item) => {
        if (maxPrice) {
          return item.price <= maxPrice;
        }
        return true;
      })
      .filter((item) => {
        if (instrumentTypes.length > 0) {
          return instrumentTypes.includes(item.type);
        }
        return true;
      })
      .filter((item) => {
        if (stringNumbers.length > 0) {
          return stringNumbers.includes(item.stringNumber);
        }
        return true;
      })
  },
);

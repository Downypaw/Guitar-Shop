import {ReducerName, SortType, SortDirection} from '../../const';
import {createSelector} from 'reselect';
import {sortByProperty} from '../../util';
import {getActiveSortOption, getActiveSortDirection} from '../app-business-logic/selectors';

export const getCatalogItems = (state) => state[ReducerName.DATA].catalogItems;

export const getSortedItems = createSelector(
  [getCatalogItems, getActiveSortOption, getActiveSortDirection],
  (catalogItems, activeSortOption, activeSortDirection) => {
    const currentSortOption = activeSortOption ? activeSortOption : SortType.PRICE;
    switch (currentSortOption) {
      case SortType.PRICE:
        return catalogItems.slice().sort(sortByProperty(SortType.PRICE, activeSortDirection));
      case SortType.POPULARITY:
        return catalogItems.slice().sort(sortByProperty(SortType.POPULARITY, activeSortDirection));
      default:
        return catalogItems;
    }
  },
);

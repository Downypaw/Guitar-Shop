import {ReducerName} from '../../const';

export const getSelectedItem = (state) => state[ReducerName.BUSINESS_LOGIC].selectedItem;
export const getItemsInCart = (state) => state[ReducerName.BUSINESS_LOGIC].itemsInCart;
export const getActiveSortOption = (state) => state[ReducerName.BUSINESS_LOGIC].activeSortOption;
export const getActiveSortDirection = (state) => state[ReducerName.BUSINESS_LOGIC].activeSortDirection;

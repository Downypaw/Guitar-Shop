import {ReducerName} from '../../const';

export const getSelectedItem = (state) => state[ReducerName.BUSINESS_LOGIC].selectedItem;
export const getItemsInCart = (state) => state[ReducerName.BUSINESS_LOGIC].itemsInCart;

import {ReducerName} from '../../const';

export const getSelectedItem = (state) => state[ReducerName.INTERACTION].selectedItem;
export const getItemsInCart = (state) => state[ReducerName.INTERACTION].itemsInCart;

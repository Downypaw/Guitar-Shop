import {createReducer} from '@reduxjs/toolkit';
import {setSelectedItem, setItemsInCart, deleteItemInCart} from '../action';

const initialState = {
  selectedItem: {},
  itemsInCart: [],
};

const appBusinessLogic = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedItem, (state, action) => {
      state.selectedItem = action.payload;
    })
    .addCase(setItemsInCart, (state, action) => {
      state.itemsInCart = [...state.itemsInCart, action.payload];
    })
    .addCase(deleteItemInCart, (state, action) => {
      state.itemsInCart = [...state.itemsInCart.slice(0, action.payload - 1), ...state.itemsInCart.slice(action.payload + 1)];
    });
});

export {appBusinessLogic};

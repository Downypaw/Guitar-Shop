import {createReducer} from '@reduxjs/toolkit';
import {setSelectedItem, setItemsInCart} from '../action';

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
      state.itemsInCart = action.payload;
    });
});

export {appBusinessLogic};

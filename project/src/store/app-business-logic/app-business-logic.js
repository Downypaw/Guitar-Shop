import {createReducer} from '@reduxjs/toolkit';
import {setSelectedItem, setItemsInCart, deleteItemInCart, setActiveSortOption, setActiveSortDirection} from '../action';

const initialState = {
  selectedItem: {},
  itemsInCart: [],
  activeSortOption: '',
  activeSortDirection: '',
};

const appBusinessLogic = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedItem, (state, action) => {
      state.selectedItem = action.payload;
    })
    .addCase(setItemsInCart, (state, action) => {
      state.itemsInCart = action.payload;
    })
    .addCase(deleteItemInCart, (state, action) => {
      console.log([...state.itemsInCart.slice(0, action.payload), ...state.itemsInCart.slice(action.payload + 1)]);
      state.itemsInCart = [...state.itemsInCart.slice(0, action.payload), ...state.itemsInCart.slice(action.payload + 1)];
    })
    .addCase(setActiveSortOption, (state, action) => {
      state.activeSortOption = action.payload;
    })
    .addCase(setActiveSortDirection, (state, action) => {
      state.activeSortDirection = action.payload;
    });
});

export {appBusinessLogic};

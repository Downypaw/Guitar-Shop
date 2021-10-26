import * as data from '../../data';
import {createReducer} from '@reduxjs/toolkit';
import {setCatalogItems} from '../action';

const initialState = {
  catalogItems: data.default,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(setCatalogItems, (state, action) => {
      state.catalogItems = state.catalogItems;
    });
});

export {appData};

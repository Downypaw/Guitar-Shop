import {createReducer} from '@reduxjs/toolkit';
import {setMinPrice, setMaxPrice, setInstrumentType, setStringNumber} from '../action';
import {StringsNumberForInstrument} from '../../const';

const initialState = {
  minPrice: 0,
  maxPrice: 0,
  instrumentTypes: [],
  stringNumbers: [],
};

const appFilter = createReducer(initialState, (builder) => {
  builder
    .addCase(setMinPrice, (state, action) => {
      state.minPrice = action.payload;
    })
    .addCase(setMaxPrice, (state, action) => {
      state.maxPrice = action.payload;
    })
    .addCase(setInstrumentType, (state, action) => {
      state.instrumentTypes = action.payload;
    })
    .addCase(setStringNumber, (state, action) => {
      state.stringNumbers = action.payload;
    });
});

export {appFilter};

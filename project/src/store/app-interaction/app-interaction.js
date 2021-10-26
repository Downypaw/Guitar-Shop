import {createReducer} from '@reduxjs/toolkit';
import {setPopupPurchaseStatus, setPopupNotificationStatus, setSelectedItem} from '../action';

const initialState = {
  isPopupPurchaseOpen: false,
  isPopupNotificationOpen: false,
  selectedItem: {},
};

const appInteraction = createReducer(initialState, (builder) => {
  builder
    .addCase(setPopupPurchaseStatus, (state, action) => {
      state.isPopupPurchaseOpen = action.payload;
    })
    .addCase(setPopupNotificationStatus, (state, action) => {
      state.isPopupNotificationOpen = action.payload;
    })
    .addCase(setSelectedItem, (state, action) => {
      state.selectedItem = action.payload;
    });
});

export {appInteraction};

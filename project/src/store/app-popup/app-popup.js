import {createReducer} from '@reduxjs/toolkit';
import {setPopupPurchaseStatus, setPopupNotificationStatus, setPopupDeletingStatus} from '../action';

const initialState = {
  isPopupPurchaseOpen: false,
  isPopupNotificationOpen: false,
  isPopupDeletingOpen: false,
};

const appPopup = createReducer(initialState, (builder) => {
  builder
    .addCase(setPopupPurchaseStatus, (state, action) => {
      state.isPopupPurchaseOpen = action.payload;
    })
    .addCase(setPopupNotificationStatus, (state, action) => {
      state.isPopupNotificationOpen = action.payload;
    })
    .addCase(setPopupDeletingStatus, (state, action) => {
      state.isPopupDeletingOpen = action.payload;
    });
});

export {appPopup};

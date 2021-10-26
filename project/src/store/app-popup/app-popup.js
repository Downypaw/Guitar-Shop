import {createReducer} from '@reduxjs/toolkit';
import {setPopupPurchaseStatus, setPopupNotificationStatus} from '../action';

const initialState = {
  isPopupPurchaseOpen: false,
  isPopupNotificationOpen: false,
};

const appPopup = createReducer(initialState, (builder) => {
  builder
    .addCase(setPopupPurchaseStatus, (state, action) => {
      state.isPopupPurchaseOpen = action.payload;
    })
    .addCase(setPopupNotificationStatus, (state, action) => {
      state.isPopupNotificationOpen = action.payload;
    });
});

export {appPopup};

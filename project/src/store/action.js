import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_POPUP_PURCHASE_STATUS: '/changePopupPurchaseStatus',
  CHANGE_POPUP_NOTIFICATION_STATUS: '/changePopupNotificationStatus',
  SET_SELECTED_ITEM: '/setSelectedItem',
  SET_CATALOG_ITEMS: '/setCatalogItems',
  SET_ITEMS_IN_CART: '/setItemsInCart',
};

export const setPopupPurchaseStatus = createAction(ActionType.CHANGE_POPUP_PURCHASE_STATUS, (option) => ({
  payload: option,
}));

export const setPopupNotificationStatus = createAction(ActionType.CHANGE_POPUP_NOTIFICATION_STATUS, (option) => ({
  payload: option,
}));

export const setSelectedItem = createAction(ActionType.SET_SELECTED_ITEM, (option) => ({
  payload: option,
}));

export const setCatalogItems = createAction(ActionType.SET_CATALOG_ITEMS);

export const setItemsInCart = createAction(ActionType.SET_ITEMS_IN_CART, (option) => ({
  payload: option,
}));

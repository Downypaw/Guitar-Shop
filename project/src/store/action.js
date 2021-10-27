import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_POPUP_PURCHASE_STATUS: '/changePopupPurchaseStatus',
  CHANGE_POPUP_NOTIFICATION_STATUS: '/changePopupNotificationStatus',
  CHANGE_POPUP_DELETING_STATUS: '/changePopupDeletingStatus',
  SET_SELECTED_ITEM: '/setSelectedItem',
  SET_CATALOG_ITEMS: '/setCatalogItems',
  SET_ITEMS_IN_CART: '/setItemsInCart',
  DELETE_ITEM_IN_CART: '/deleteItemInCart',
  SET_ACTIVE_SORT_OPTION: '/setActiveSortOption',
  SET_ACTIVE_SORT_DIRECTION: '/setActiveSortDirection',
};

export const setPopupPurchaseStatus = createAction(ActionType.CHANGE_POPUP_PURCHASE_STATUS, (value) => ({
  payload: value,
}));

export const setPopupNotificationStatus = createAction(ActionType.CHANGE_POPUP_NOTIFICATION_STATUS, (value) => ({
  payload: value,
}));

export const setSelectedItem = createAction(ActionType.SET_SELECTED_ITEM, (value) => ({
  payload: value,
}));

export const setCatalogItems = createAction(ActionType.SET_CATALOG_ITEMS);

export const setItemsInCart = createAction(ActionType.SET_ITEMS_IN_CART, (value) => ({
  payload: value,
}));

export const setPopupDeletingStatus = createAction(ActionType.CHANGE_POPUP_DELETING_STATUS, (value) => ({
  payload: value,
}));

export const deleteItemInCart = createAction(ActionType.DELETE_ITEM_IN_CART, (value) => ({
  payload: value,
}));

export const setActiveSortOption = createAction(ActionType.SET_ACTIVE_SORT_OPTION, (value) => ({
  payload: value,
}));

export const setActiveSortDirection = createAction(ActionType.SET_ACTIVE_SORT_DIRECTION, (value) => ({
  payload: value,
}));

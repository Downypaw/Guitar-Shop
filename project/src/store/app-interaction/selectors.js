import {ReducerName} from '../../const';

export const getPopupPurchaseStatus = (state) => state[ReducerName.INTERACTION].isPopupPurchaseOpen;
export const getPopupNotificationStatus = (state) => state[ReducerName.INTERACTION].isPopupNotificationOpen;
export const getSelectedItem = (state) => state[ReducerName.INTERACTION].selectedItem;

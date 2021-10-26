import {ReducerName} from '../../const';

export const getPopupPurchaseStatus = (state) => state[ReducerName.POPUP].isPopupPurchaseOpen;
export const getPopupNotificationStatus = (state) => state[ReducerName.POPUP].isPopupNotificationOpen;

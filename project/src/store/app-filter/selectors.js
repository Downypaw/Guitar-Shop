import {ReducerName} from '../../const';

export const getMinPrice = (state) => state[ReducerName.FILTER].minPrice;
export const getMaxPrice = (state) => state[ReducerName.FILTER].maxPrice;
export const getInstrumentTypes = (state) => state[ReducerName.FILTER].instrumentTypes;
export const getStringNumbers = (state) => state[ReducerName.FILTER].stringNumbers;

import {combineReducers} from 'redux';
import {appBusinessLogic} from './app-business-logic/app-business-logic';
import {appData} from './app-data/app-data';
import {appPopup} from './app-popup/app-popup';
import {appFilter} from './app-filter/app-filter';
import {ReducerName} from '../const';

export default combineReducers({
  [ReducerName.BUSINESS_LOGIC]: appBusinessLogic,
  [ReducerName.DATA]: appData,
  [ReducerName.POPUP]: appPopup,
  [ReducerName.FILTER]: appFilter,
});

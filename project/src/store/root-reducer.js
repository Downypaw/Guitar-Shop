import {combineReducers} from 'redux';
import {appInteraction} from './app-interaction/app-interaction';
import {ReducerName} from '../const';

export default combineReducers({
  [ReducerName.INTERACTION]: appInteraction,
});

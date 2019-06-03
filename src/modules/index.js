import { combineReducers } from 'redux';
import product from 'redux/modules/product';
import score from 'redux02/modules/score';

export default combineReducers({
  product,
  score,
})
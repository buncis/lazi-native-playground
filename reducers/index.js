import { combineReducers } from 'redux';
import kelases from './kelases';
import kelas from './kelas';
import { reducer as form } from 'redux-form'
export default combineReducers({
  kelases,
  kelas,
  form
});
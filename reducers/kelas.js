import { SET_KELAS } from '../actions';

export default function kelases(state=[], action = {}) {
  switch(action.type){
    case SET_KELAS:
      return action.kelas;
    default: return state;
  }
}
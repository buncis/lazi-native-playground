import { SET_KELASES, ADD_KELAS } from '../actions';

export default function kelases(state=[], action = {}) {
  switch(action.type){
    case ADD_KELAS:
      return [
        ...state,
        action.kelas
      ]

    case SET_KELASES:
      return action.kelases;
    default: return state;
  }
}
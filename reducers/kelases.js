import { SET_KELASES, ADD_KELAS, SET_KELAS, KELAS_UPDATED } from '../actions';

export default function kelases(state=[], action = {}) {
  switch(action.type){
    case ADD_KELAS:
      return [
        ...state,
        action.kelas
      ]
    case KELAS_UPDATED:
      return state.map(item => {
        if (item.id === action.kelas.id) return action.kelas;
        return item;
      });
    case SET_KELASES:
      return action.kelases;
    default: return state;
  }
}
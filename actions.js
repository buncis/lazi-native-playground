export const SET_KELASES = 'SET_KELASES';
export const ADD_KELAS = 'ADD_KELAS';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setKelases(kelases) {
  return {
    type: SET_KELASES,
    kelases
  }
}

export function addKelas(kelas) {
  return {
    type: ADD_KELAS,
    kelas
  }
}

export function saveKelas(data) {
  return dispatch => {
    return fetch ('http://192.168.0.19:3000/lists.json', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(addKelas(data)));
  }
}

export function fetchKelases(){
  return dispatch => {
    fetch('http://192.168.0.19:3000/lists.json')
    .then(res => res.json())
    .then(data => dispatch(setKelases(data.lists)));
  }
}
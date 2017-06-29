export const SET_KELASES = 'SET_KELASES'

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

export function fetchKelases(){
  return dispatch => {
    fetch('http://192.168.0.19:3000/lists.json')
    .then(res => res.json())
    .then(data => dispatch(setKelases(data.lists)))
    .catch(error => {
                console.log('ERRORNYA():Error Stack: ' + error.stack);
            });
  }
}
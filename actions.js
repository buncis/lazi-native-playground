export const SET_KELASES = 'SET_KELASES';
export const ADD_KELAS = 'ADD_KELAS';
export const SET_KELAS = 'SET_KELAS';
export const KELAS_UPDATED = 'KELAS_UPDATED';
export const KELAS_DELETED = 'KELAS_DELETED';

function handleResponse(response) {
  if (response.status === 204){
    return;
  } else if (response.ok) {
    return response.json()
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

export function kelasDeleted(kelasId) {
  return {
    type: KELAS_DELETED,
    kelasId
  }
}

export function deleteKelas(id) {
  return dispatch => {
    return fetch(`http://192.168.0.19:3000/lists/${id}.json`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(handleResponse)
    .then(data => dispatch(kelasDeleted(id)))
    .catch(error => {
			console.log('delete Kelas', error); //eslint-disable-line
		});
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
    .then(data => dispatch(addKelas(data)))
    .catch(error => {
			console.log('Save Kelas', error); //eslint-disable-line
		});
  }
}

export function kelasUpdated(kelas) {
  return {
    type: KELAS_UPDATED,
    kelas
  }
}

export function updateKelas(id, data) {
  return dispatch => {
    return fetch (`http://192.168.0.19:3000/lists/${id}.json`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(kelasUpdated(data)))
    .catch(error => {
			console.log('updateKelas', error); //eslint-disable-line
		});
  }
}

export function fetchKelases(){
  return dispatch => {
    fetch('http://192.168.0.19:3000/lists.json')
    .then(res => res.json())
    .then(data => dispatch(setKelases(data.lists)))
    .catch(error => {
			console.log('Fetch Kelases', error); //eslint-disable-line
		});
  }
}

export function setKelas(kelas) {
  return {
    type: SET_KELAS,
    kelas
  }
}

export function fetchKelas(id){
  return dispatch => {
    fetch(`http://192.168.0.19:3000/lists/${id}.json`)
    .then(res => res.json())
    .then(data => dispatch(setKelas(data.list)))
    .catch(error => {
			console.log('Fetch Kelas', error); //eslint-disable-line
		});
  }
}

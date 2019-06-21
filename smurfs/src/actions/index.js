/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const GET_SMURF_START = 'GET_SMURF_START';
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS';
export const GET_SMURF_ERROR = 'GET_SMURF_ERROR';
//date =>
export const getSmurf = () => dispatch => {
  dispatch({ type: GET_SMURF_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: GET_SMURF_SUCCESS, payload: res.data });
      console.log("data", res.data);
    })
    .catch(err => dispatch({ type: GET_SMURF_ERROR }));
};

export const ADD_SMURF_START = 'GET_SMURF_START';
export const ADD_SMURF_SUCCESS = 'GET_SMURF_SUCCESS';
export const ADD_SMURF_ERROR = 'GET_SMURF_ERROR';
//date =>
export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      console.log("data: ", res.data[5]);
    })
    .catch(err => dispatch({ type: ADD_SMURF_ERROR }));
};

  // console.log(smurf)
  // return {
  //   type: ADD_SMURF,
  //   payload: smurf


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


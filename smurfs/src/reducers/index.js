/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_ERROR,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_ERROR
} from '../actions';

 //Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   //updatingSmurf: false
   //deletingSmurf: false
   error: null
 }

function reducer (state = initialState, action){
    switch (action.type){
      case GET_SMURF_START:
        return {
          ...state,
          error: null,
          fetchingSmurfs: true
        }
        case GET_SMURF_SUCCESS:
        return {
          ...state,
          fetchingSmurfs: false,
          smurfs: [...state.smurfs, {value: action.payload}]
        }
        case GET_SMURF_ERROR:
        return {
          ...state,
          fetchingSmurfs: false,
          error: "ERRORY SMURF!"
        }
        case ADD_SMURF_START:
        return {
          ...state,
          error: null,
          fetchingSmurfs: true
        }
        case ADD_SMURF_SUCCESS:
        return {
          ...state,
          fetchingSmurfs: false,
          smurfs: [...state.smurfs, {value: action.payload}]
        }
        case ADD_SMURF_ERROR:
        return {
          ...state,
          fetchingSmurfs: false,
          error: "ERRORY SMURF!"
        }
        
      default:
          return state;
    }
}

export default reducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

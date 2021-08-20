

import { updateFirstName, updateLastName } from './userformActionTypes';

const initialState = {
  firstName: '',
  lastName: '',
};


export const userformReducer = (state = initialState, action) => {
  console.log(action);
  
  switch (action.type) {
    case updateFirstName:
      return {
        ...state,
        firstName: action.payload 
      };

    case updateLastName:
      return {
        ...state,
        
        lastName: action.payload,
      };
    default:
      return state;
  }
};
import {SET_USER} from '../actionTypes';

const INITIAL_STATE = {
  isLoggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch(type) {
    case SET_USER: {
      const {isLoggedIn} = type;
      return {
        ...state,
        isLoggedIn,
      };
    }
    default:
      return state;
  }
}

export default userReducer;

import { ActionTypes } from "../constants/action-types";
const intialState = {
  users: [],
};

const initState = {
  activeUser: ""
};

export const usersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
 
      case ActionTypes.UPDATE_USER: 
      return {
        ...state, 
        users: state.users.map(user => {
          if (user._id === payload._id) {
            return { ...user, ...payload }; // Merge existing properties with payload
          }
          return user;
        }),
      };

      default:
        return state;
  }


};


export const activeUserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ACTIVE_USER:
      return { ...state, activeUser: payload };
    default:
      return state;
  }
};
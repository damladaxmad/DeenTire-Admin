import { ActionTypes } from "../constants/action-types";

export const setUsers = (data) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: data,
  };
};

export const updateUser = (data) => {
  return {
    type: 'UPDATE_USER',
    payload: data,
  };
};

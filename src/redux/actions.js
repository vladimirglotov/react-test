import { USER, SETUSER } from "./types";

export function createPost(user) {
  return {
    type: USER,
    payload: user
  }
}

export function setUser(user) {
  return dispatch => {
    dispatch({type: SETUSER, payload: user})
  }
}
import { USER, SET_USER } from "./types";

const initialState = {
  name: null,
  email: null,
  password: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return state
    case SET_USER:
      return {...state, name: action.payload.name, email: action.payload.email, password: action.payload.name}
    default: return state
  }
}
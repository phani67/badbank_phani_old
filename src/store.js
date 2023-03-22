import React from "react";
import { useActions } from "./actions";

export const Store = React.createContext();

const initialState = {
  users:[
    {
      name:'phani',
      email:'phani@mit.edu',
      password:'hello1',
      balance:100
    },
    {
      name:'abc',
      email:'abc@gmail.com',
      password:'hello2',
      balance:100
    }
  ],
  currentUser: null,
  success: false,
  showError: false
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: action.payload };
    case "LOGIN":
      return { ...state, currentUser: action.payload };
    case "UPDATE_USERS":
      return {...state, users: action.payload}
    case "UPDATE_USER": 
      return {...state, currentUser: action.payload}
    case "SET_SUCCESS":
      return {...state, success: action.payload}
    case "SET_ERROR":
      return {...state, error: action.payload}
    default:
    break;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);
  const value = { state, dispatch, actions };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

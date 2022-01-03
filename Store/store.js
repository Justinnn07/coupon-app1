import { createStore } from "redux";

const initialState = {
  user: {},
  location: {},
  token: "",
  internet: null,
  couponcode: "",
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_LOCATION":
      return {
        ...state,
        location: action.location,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_INTERNET":
      return {
        ...state,
        internet: action.internet,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: state.loading,
      };
    case "SET_COUPONCODE":
      return {
        ...state,
        couponcode: state.couponcode,
      };
    default:
      return state;
  }
};

const Store = createStore(store);

export default Store;

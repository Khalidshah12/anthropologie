import * as types from "./actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  cart: [],
  isCartLoading: false,
  isCartError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case types.GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    }
    case types.GET_CART_DATA_REQUEST: {
      return {
        ...state,
        isCartLoading: true,
      };
    }
    case types.GET_CART_DATA_SUCCESS: {
      return {
        ...state,
        isCartLoading: false,
        cart: payload,
      };
    }
    case types.GET_CART_DATA_FAILURE: {
      return {
        ...state,
        isCartLoading: false,
        isCartError: true,
        cart: [],
      };
    }
    
    default:
      return state;
  }
};

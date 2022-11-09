import * as types from "./actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.GET_REQUEST: {
      return {
        ...state,
        data: [],
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_FAILURE: {
      return {
        ...state,
        data: [],
        isLoading: false,
        isError: true,
      };
    }

    // post request
    case types.POST_REQUEST: {
      return {
        ...state,
        data: [],
        isLoading: true,
        isError: false,
      };
    }
    case types.POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case types.POST_FAILURE: {
      return {
        ...state,
        data: [],
        isLoading: false,
        isError: true,
      };
    }

    // toggle button

    case types.TOGGLE: { 
       let df = state.data.map((item)=>{
        if(item.id === payload){
            return {
                ...item, status: !item.status
            }
        }
        return item;
       });
       return{
        ...state,
        data: df
       }
    }
    default: {
      return state;
    }
  }
};

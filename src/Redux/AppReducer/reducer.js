
import * as types from "./actionTypes";
import {getItem, setItem} from '../../localstorage/LocalStorage';
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  cart: [],
  isCartLoading: false,
  isCartError: false,
  wedding :[],
  casualData:[],
  formal:[],
  party:[],
  paint:[],
  workpaint:[],
  bootcut:[],
  boyfriend:[],
  skinny:[],
  straight:[],
  wideleg:[],
  flare:[],
  birkenstock:[],
  embleshed:[],
  sneaker:[],
  singlepage:getItem("singlepage")||[],
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
    // single page data
    case types.SINGLE_PAGE_DATA: {
      setItem("singlepage", payload);
      return {
        ...state,
        singlepage: payload,
      };
    }
    
    // reducer for item .................................................................................>

    // wedding..>
    case types.GET_WEDDING_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
          wedding: [],
        };
      }
      case types.GET_WEDDING_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          wedding:payload,
        };
      }
      case types.GET_WEDDING_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          wedding:[],
        };
      }
    // casual 
    case types.GET_CASUAL_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
          casualData: [],
        };
      }
      case types.GET_CASUAL_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          casualData:payload,
        };
      }
      case types.GET_CASUAL_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          casualData:[],
        };
      }

    //   FORMAL DRESS
    case types.GET_FORMAL_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
          formal: [],
        };
      }
      case types.GET_FORMAL_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          formal:payload,
        };
      }
      case types.GET_FORMAL_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          formal:[],
        };
      }

    //   party dress
    case types.GET_PARTY_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
          party: [],
        };
      }
      case types.GET_PARTY_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          party:payload,
        };
      }
      case types.GET_PARTY_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          party:[],
        };
      }
    //   paint fress
    case types.GET_PAINT_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        paint: [],
        };
      }
      case types.GET_PAINT_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
        paint:payload,
        };
      }
      case types.GET_PAINT_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        paint:[],
        };
      }

    // workpaints
    case types.GET_WORKPAINT_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        workpaint: [],
        };
      }
      case types.GET_WORKPAINT_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
        workpaint:payload,
        };
      }
      case types.GET_WORKPAINT_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        workpaint:[],
        };
      }

    //   bootcut dress

    case types.GET_BOOTCUT_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        bootcut: [],
        };
      }
      case types.GET_BOOTCUT_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
        bootcut:payload,
        };
      }
      case types.GET_BOOTCUT_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        bootcut:[],
        };
      }
    //   boyfriends
    case types.GET_BOYFRIEND_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        boyfriend: [],
        };
      }
      case types.GET_BOYFRIEND_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
        boyfriend:payload,
        };
      }
      case types.GET_BOYFRIEND_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        boyfriend:[],
        };
      }

    //   SKINNY
    case types.GET_SKINNY_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
            skinny: [],
        };
      }
      case types.GET_SKINNY_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
            skinny:payload,
        };
      }
      case types.GET_SKINNY_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
            skinny:[],
        };
      }
    //   STRAIGHT
    case types.GET_STRAIGHT_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
           straight: [],
        };
      }
      case types.GET_STRAIGHT_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
           straight:payload,
        };
      }
      case types.GET_STRAIGHT_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
           straight:[],
        };
      }
    //   wideleg
    case types.GET_WIDELEG_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        wideleg: [],
        };
      }
      case types.GET_WIDELEG_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
        wideleg:payload,
        };
      }
      case types.GET_WIDELEG_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        wideleg:[],
        };
      }

    //   FLARE

    case types.GET_FLARE_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        flare: [],
        };
      }
      case types.GET_FLARE_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
        flare:payload,
        };
      }
      case types.GET_FLARE_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        flare:[],
        };
      }
    //   birkenstock
    case types.GET_BIRKENSTOCK_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        birkenstock: [],
        };
      }
      case types.GET_BIRKENSTOCK_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
        birkenstock:payload,
        };
      }
      case types.GET_BIRKENSTOCK_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        birkenstock:[],
        };
      }
    // embleshed
    case types.GET_EMBLESHED_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        embleshed: [],
        };
      }
      case types.GET_EMBLESHED_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
        embleshed:payload,
        };
      }
      case types.GET_EMBLESHED_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        embleshed:[],
        };
      }
    // sneaker
    case types.GET_SNEAKER_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        sneaker: [],
        };
      }
      case types.GET_SNEAKER_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
        sneaker:payload,
        };
      }
      case types.GET_SNEAKER_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        sneaker:[],
        };
      }
    default:
      return state;
  }
};


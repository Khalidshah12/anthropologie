
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
  formalData:[],
  partyData:[],
  paintData:[],
  workpaintData:[],
  bootcutData:[],
  boyfriendData:[],
  skinnyData:[],
  straightData:[],
  widelegData:[],
  flareData:[],
  birkenstockData:[],
  embleshedData:[],
  sneakerData:[],
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
          formalData: [],
        };
      }
      case types.GET_FORMAL_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          formalData:payload,
        };
      }
      case types.GET_FORMAL_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          formalData:[],
        };
      }

    //   party dress
    case types.GET_PARTY_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
          partyData: [],
        };
      }
      case types.GET_PARTY_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          partyData:payload,
        };
      }
      case types.GET_PARTY_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          partyData:[],
        };
      }
    //   paint fress
    case types.GET_PAINT_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        paintData: [],
        };
      }
      case types.GET_PAINT_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          paintData:payload,
        };
      }
      case types.GET_PAINT_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          paintData:[],
        };
      }

    // workpaints
    case types.GET_WORKPAINT_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        workpaintData: [],
        };
      }
      case types.GET_WORKPAINT_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          workpaintData:payload,
        };
      }
      case types.GET_WORKPAINT_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          workpaintData:[],
        };
      }

    //   bootcut dress

    case types.GET_BOOTCUT_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        bootcutData: [],
        };
      }
      case types.GET_BOOTCUT_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          bootcutData:payload,
        };
      }
      case types.GET_BOOTCUT_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          bootcutData:[],
        };
      }
    //   boyfriends
    case types.GET_BOYFRIEND_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        boyfriendData: [],
        };
      }
      case types.GET_BOYFRIEND_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          boyfriendData:payload,
        };
      }
      case types.GET_BOYFRIEND_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          boyfriendData:[],
        };
      }

    //   SKINNY
    case types.GET_SKINNY_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
            skinnyData: [],
        };
      }
      case types.GET_SKINNY_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          skinnyData:payload,
        };
      }
      case types.GET_SKINNY_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          skinnyData:[],
        };
      }
    //   STRAIGHT
    case types.GET_STRAIGHT_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
           straightData: [],
        };
      }
      case types.GET_STRAIGHT_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          straightData:payload,
        };
      }
      case types.GET_STRAIGHT_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          straightData:[],
        };
      }
    //   wideleg
    case types.GET_WIDELEG_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        widelegData: [],
        };
      }
      case types.GET_WIDELEG_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          widelegData:payload,
        };
      }
      case types.GET_WIDELEG_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          widelegData:[],
        };
      }

    //   FLARE

    case types.GET_FLARE_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        flareData: [],
        };
      }
      case types.GET_FLARE_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          flareData:payload,
        };
      }
      case types.GET_FLARE_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          flareData:[],
        };
      }
    //   birkenstock
    case types.GET_BIRKENSTOCK_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        birkenstockData: [],
        };
      }
      case types.GET_BIRKENSTOCK_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          birkenstockData:payload,
        };
      }
      case types.GET_BIRKENSTOCK_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          birkenstockData:[],
        };
      }
    // embleshed
    case types.GET_EMBLESHED_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        embleshedData: [],
        };
      }
      case types.GET_EMBLESHED_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          embleshedData:payload,
        };
      }
      case types.GET_EMBLESHED_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          embleshedData:[],
        };
      }
    // sneaker
    case types.GET_SNEAKER_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        sneakerData: [],
        };
      }
      case types.GET_SNEAKER_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          sneakerData:payload,
        };
      }
      case types.GET_SNEAKER_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          sneakerData:[],
        };
      }
    default:
      return state;
  }
};


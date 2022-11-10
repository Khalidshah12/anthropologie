import * as types from './actionTypes'
import axios from 'axios';


export const cartRequest = () => {
    return {
        type: types.GET_DATA_REQUEST
    }
}

export const cartSuccess = (payload) => {
    return {
        type: types.GET_DATA_SUCCESS, payload
    }
}

export const cartFailure = () => {
    return {
        type: types.GET_DATA_FAILURE
    }
}

export const cartDataRequest = () => {
    return {
        type: types.GET_CART_DATA_REQUEST
    }
}

export const cartDataSuccess = (payload) => {
    return {
        type: types.GET_CART_DATA_SUCCESS, payload
    }
}

export const cartDataFailure = () => {
    return {
        type: types.GET_CART_DATA_FAILURE
    }
}


const get_wedding_request = () => ({
    type: types.GET_WEDDING_DATA_REQUEST
  });
  
  const get_wedding_failure = () => ({
    type: types.GET_WEDDING_DATA_FAILURE,
  });
  
  const get_wedding_success = (data)=>({
      type:types.GET_WEDDING_DATA_SUCCESS,
      payload:data
  })

  export const getwedding = (dispatch)=>{
    dispatch(get_wedding_request());
    axios.get("https://mock-data.onrender.com/wedding")
    .then((res)=>{
        console.log(res)
      dispatch(get_wedding_success(res.data));
    })
    .catch(()=>dispatch(get_wedding_failure()));
}


// /casual 236x
const get_casual_request = () => ({
    type: types.GET_CASUAL_DATA_REQUEST
  });
  
  const get_casual_failure = () => ({
    type: types.GET_CASUAL_DATA_FAILURE,
  });
  
  const get_casual_success = (data)=>({
      type:types.GET_CASUAL_DATA_SUCCESS,
      payload:data
  })

export const getcasual = (dispatch)=>{
  dispatch(get_casual_request());
  axios.get("https://mock-data.onrender.com/casual")
  .then((res)=>{
      dispatch(get_casual_success(res.data));
  })
  .catch(()=>dispatch(get_casual_failure()));
}

// /party 236x
// export const getparty = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/party")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /formal_dress 134x

// export const getformal = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/formal_dress")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /flarejean 80x
// export const getflarejean = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/flarejean")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /straight 74x

// export const getstraight = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/straight")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /wideleg 30x
// export const getwideleg = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/wideleg")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /bootcut 7x

// export const getbootcut = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/bootcut")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /paints 80x

// export const getpaints = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/paints")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /boyfriend 7x
// export const getboyfriend = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/boyfriend")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /flare 80x
// export const getflare = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/flare")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /skinny 19x

// export const getskinny = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/skinny")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /workpaints 80x
// export const getsworkpaint = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/workpaints")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /embelished_shoes 10x
// export const getembelished = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/embelished_shoes")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /Sneakers 24x
// export const getsneakers = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/Sneakers")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /birkenstock 24x
// export const getbirkenstock = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/birkenstock")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }


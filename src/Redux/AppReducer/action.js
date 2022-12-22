import axios from 'axios'
import * as types from './actionTypes'

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

export const getCartData = (dispatch) => {
    dispatch(cartDataRequest())
    axios.get('https://emptyapi.onrender.com/cart')
        .then((res) => {
            dispatch(cartDataSuccess(res.data))
        })
        .catch((e) => {
            dispatch(cartDataFailure())
            console.log(e)
        })
}



const POST_DATA_REQUEST = ()=>({
    type:types.POST_DATA_REQUEST
})
const POST_DATA_SUCCESS = ()=>({
    type:types.POST_DATA_SUCCESS
})
const POST_DATA_FAILURE = ()=>({
    type:types.POST_DATA_FAILURE
})


export const postData = (payload) => (dispatch)=>{
    dispatch(POST_DATA_REQUEST())
    axios({
        method:"post",
        baseURL:"https://emptyapi.onrender.com/",
        url:"/cart",
        data:payload
    })
    .then(()=>POST_DATA_SUCCESS())
    .catch(()=>POST_DATA_FAILURE())
}
















//FILTER

export const filter_data = (data) => ({
    type: types.FILTER_DATA,
    payload: data
})




//SINGLE PAGE

export const single_page_data = (data) => ({
    type: types.SINGLE_PAGE_DATA,
    payload: data
})




const get_wedding_request = () => ({
    type: types.GET_WEDDING_DATA_REQUEST
});

//   export const getwedding = (dispatch)=>{
//     dispatch(get_wedding_request());
//     axios.get("https://mock-data.onrender.com/wedding")
//     .then((res)=>{
//         console.log(res)
//       dispatch(get_wedding_success(res.data));
//     })
//     .catch(()=>dispatch(get_wedding_failure()));
// }


// /casual 236x
const get_casual_request = () => ({
    type: types.GET_CASUAL_DATA_REQUEST
});

const get_casual_failure = () => ({
    type: types.GET_CASUAL_DATA_FAILURE,
});

export const get_casual_success = (data) => ({
    type: types.GET_CASUAL_DATA_SUCCESS,
    payload: data
})

 
// export const getcasual = (dispatch)=>{
//   dispatch(get_casual_request());
//   axios.get("https://mock-data.onrender.com/casual")
//   .then((res)=>{
//       dispatch(get_casual_success(res.data));
//   })
//   .catch(()=>dispatch(get_casual_failure()));
// }


const get_party_request = () => ({
    type: types.GET_PARTY_DATA_REQUEST
  });
  
  const get_party_failure = () => ({
    type: types.GET_PARTY_DATA_FAILURE,
  });
  
  export const get_party_success = (data)=>({
      type:types.GET_PARTY_DATA_SUCCESS,
      payload:data
  })
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

const get_formal_request = () => ({
    type: types.GET_FORMAL_DATA_REQUEST
  });
  
  const get_formal_failure = () => ({
    type: types.GET_FORMAL_DATA_FAILURE,
  });
  
  export const get_formal_success = (data)=>({
      type:types.GET_FORMAL_DATA_SUCCESS,
      payload:data
  })

// export const getformal = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/formal_dress")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /flare 80x

const get_flare_request = () => ({
    type: types.GET_FLARE_DATA_REQUEST
  });
  
  const get_flare_failure = () => ({
    type: types.GET_FLARE_DATA_FAILURE
  });
  
  export const get_flare_success = (data)=>({
      type:types.GET_FLARE_DATA_SUCCESS,
      payload:data
  })
// export const getflarejean = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/flarejean")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /straight 74x
const get_straight_request = () => ({
    type: types.GET_STRAIGHT_DATA_REQUEST
  });
  
  const get_straight_failure = () => ({
    type: types.GET_STRAIGHT_DATA_FAILURE,
  });
  
  export const get_straight_success = (data)=>({
      type:types.GET_STRAIGHT_DATA_SUCCESS,
      payload:data
  })
// export const getstraight = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/straight")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /wideleg 30x
const get_wideleg_request = () => ({
    type: types.GET_WIDELEG_DATA_REQUEST
  });
  
  const get_wideleg_failure = () => ({
    type: types.GET_WIDELEG_DATA_FAILURE,
  });
  
  export const get_wideleg_success = (data)=>({
      type:types.GET_WIDELEG_DATA_SUCCESS,
      payload:data
  })
// export const getwideleg = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/wideleg")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /bootcut 7x
const get_bootcut_request = () => ({
    type: types.GET_BOOTCUT_DATA_REQUEST
  });
  
  const get_bootcut_failure = () => ({
    type: types.GET_BOOTCUT_DATA_FAILURE,
  });
  
  export const get_bootcut_success = (data)=>({
      type:types.GET_BOOTCUT_DATA_SUCCESS,
      payload:data
  })
// export const getbootcut = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/bootcut")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /paints 80x
const get_paints_request = () => ({
    type: types.GET_PAINT_DATA_REQUEST
  });
  
  const get_paints_failure = () => ({
    type: types.GET_PAINT_DATA_FAILURE,
  });
  
  export const get_paints_success = (data)=>({
      type:types.GET_PAINT_DATA_SUCCESS,
      payload:data
  })
// export const getpaints = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/paints")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /boyfriend 7x
const get_boyfriend_request = () => ({
    type: types.GET_BOYFRIEND_DATA_REQUEST
  });
  
  const get_boyfriend_failure = () => ({
    type: types.GET_BOYFRIEND_DATA_FAILURE,
  });
  
  export const get_boyfriend_success = (data)=>({
      type:types.GET_BOYFRIEND_DATA_SUCCESS,
      payload:data
  })
// export const getboyfriend = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/boyfriend")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }


// /skinny 19x
const get_skinny_request = () => ({
    type: types.GET_SKINNY_DATA_REQUEST
  });
  
  const get_skinny_failure = () => ({
    type: types.GET_SKINNY_DATA_FAILURE,
  });
  
  export const get_skinny_success = (data)=>({
      type:types.GET_SKINNY_DATA_SUCCESS,
      payload:data
  })
// export const getskinny = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/skinny")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /workpaints 80x
const get_workpaints_request = () => ({
    type: types.GET_WORKPAINT_DATA_REQUEST
  });
  
  const get_workpaints_failure = () => ({
    type: types.GET_WORKPAINT_DATA_FAILURE,
  });
  
  export const get_workpaints_success = (data)=>({
      type:types.GET_WORKPAINT_DATA_SUCCESS,
      payload:data
  })
// export const getsworkpaint = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/workpaints")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /embelished_shoes 10x

const get_embleshed_request = () => ({
    type: types.GET_EMBLESHED_DATA_REQUEST
  });
  
  const get_embleshed_failure = () => ({
    type: types.GET_EMBLESHED_DATA_FAILURE,
  });
  
  export const get_embleshed_success = (data)=>({
      type:types.GET_EMBLESHED_DATA_SUCCESS,
      payload:data
  })
// export const getembelished = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/embelished_shoes")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /Sneakers 24x
const get_sneaker_request = () => ({
    type: types.GET_SNEAKER_DATA_REQUEST
  });
  
  const get_sneaker_failure = () => ({
    type: types.GET_SNEAKER_DATA_FAILURE,
  });
  
  export const get_sneaker_success = (data)=>({
      type:types.GET_SNEAKER_DATA_SUCCESS,
      payload:data
  })
// export const getsneakers = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/Sneakers")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

// /birkenstock 24x
const get_birkenstock_request = () => ({
    type: types.GET_BIRKENSTOCK_DATA_REQUEST
  });
  
  const get_birkenstock_failure = () => ({
    type: types.GET_BIRKENSTOCK_DATA_FAILURE,
  });
  
  export const get_birkenstock_success = (data)=>({
      type:types.GET_BIRKENSTOCK_DATA_SUCCESS,
      payload:data
  })
// export const getbirkenstock = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/birkenstock")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }


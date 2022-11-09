import * as types from "./actionTypes";
import axios from "axios";


export const toggleHandler =(id)=>({
    type: types.TOGGLE,
    payload:id
})


const get_request = () => ({
  type: types.GET_REQUEST,
});

const get_failure = () => ({
  type: types.GET_FAILURE,
});

const get_success = (data)=>({
    type:types.GET_SUCCESS,
    payload:data
})


// post request

const post_request = () => ({
  type: types.POST_REQUEST,
});

const post_failure = () => ({
  type: types.POST_FAILURE,
});

const post_success = () => ({
  type: types.POST_SUCCESS
});



// export const postData = (payload) => (dispatch) => {
//   dispatch(post_request());
//   axios({
//     method: "post",
//     baseURL: "http://localhost:8080",
//     url: "/todos",
//     data: payload,
//   })
//     .then(() => {
//       dispatch(post_success());
//     })
//     .catch(() => dispatch(post_failure()));
// };

// /wedding 7x
export const getwedding = (dispatch)=>{
    dispatch(get_request());
    axios.get("https://mock-data.onrender.com/wedding")
    .then((res)=>{
      dispatch(get_success(res.data));
    })
    .catch(()=>dispatch(get_failure()));
}


// /casual 236x
// export const getcasual = (dispatch)=>{
//   dispatch(get_request());
//   axios.get("https://mock-data.onrender.com/casual")
//   .then((res)=>{
//       dispatch(get_success(res.data));
//   })
//   .catch(()=>dispatch(get_failure()));
// }

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




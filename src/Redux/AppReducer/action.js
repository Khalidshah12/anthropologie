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
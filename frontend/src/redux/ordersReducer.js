import { authAPI } from "../API/api"


const SET_ORDERS = 'SET_ORDERS'

let initialstate = {
    orders: {
        
    }
}

const ordersReducer = (state=initialstate, action) => {
    switch(action.type){
        case SET_ORDERS: {
            console.log(action.userData)
            return {
                 ...state, orders: action.orders
            }
        }
        default: {
            return state
        }
    }
}

const setOrders = (orders) => ({type: SET_ORDERS, orders} )

export const getOrders = () => async (dispatch) => {
   let response = await authAPI.getOrders()
   if(response.status !== 200){
       console.log(`some error with response ststus ${response.status}`)
   }else{
       dispatch(setOrders(response))
   }
}
export default ordersReducer
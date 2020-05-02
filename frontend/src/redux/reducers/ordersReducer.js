import { ordersApi } from "../../API/api"


const SET_ORDERS = 'SET_ORDERS'

let initialstate = {
    orders: []
}

const ordersReducer = (state=initialstate, action) => {
    switch(action.type){
        case SET_ORDERS: {
            
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
   let response = await ordersApi.getOrders()
   if(response.response.status !== 200){
       console.log(`some error with response status ${response.status}`)
   }else{
    
       dispatch(setOrders(response.response.data))
   }
}
export default ordersReducer
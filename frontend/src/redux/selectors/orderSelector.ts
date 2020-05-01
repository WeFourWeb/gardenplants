import { createSelector } from 'reselect'

const fetchSelector = (state:any) => {
    return state.orders.orders
}

export default createSelector(fetchSelector, (orders: any) => {
    return orders
})
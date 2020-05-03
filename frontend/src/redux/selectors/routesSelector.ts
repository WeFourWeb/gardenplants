import { createSelector } from 'reselect'

// const fetchRoutes = (state:any) => {
//     return state.routes.routes
// }

export const fetchRoutes = createSelector((state:any) => {
    return state.routes.routes
}, (routes: any) => {
    return routes
})

export  const fetchNewRoute = createSelector((state:any) => {
    return state.routes.newRoute
}, (newRoute: any) => {
    return newRoute
})
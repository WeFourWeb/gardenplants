import { createSelector } from 'reselect'

const fetchRoutes = (state:any) => {
    return state.routes.routes
}

export default createSelector(fetchRoutes, (routes: any) => {
    return routes
})
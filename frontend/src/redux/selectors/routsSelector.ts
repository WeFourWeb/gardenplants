import { createSelector } from 'reselect'

const fetchRouts = (state:any) => {
    return state.routs.routs
}

export default createSelector(fetchRouts, (routs: any) => {
    return routs
})
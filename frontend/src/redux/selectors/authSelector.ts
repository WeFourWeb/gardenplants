import { createSelector } from 'reselect'

const fetchAuthData = (state:any) => {
    return state.authorisationData.userData.logined
}

export default createSelector(fetchAuthData, (logined: any) => {
    return logined
})
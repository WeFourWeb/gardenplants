import { routsAPI } from "../../API/api"

let initialstate = {
    routs: [],
    newRoute: []
}

const routsReducer = (state=initialstate, action: any) => {
    switch(action.type){
        case 'SET_ROUTS': {
            return {
                 ...state, routes: action.routs
            }
        } 
        case 'SET_NEW_POINT_IN_ROUTE': {
            return {
                ...state,  newRoute: [...state.newRoute, action.point]
            }
        }
        default: {
            return state
        }
    }
}

const setRouts = (routes: any) => ({type: "SET_ROUTS", routes} )

const setNewPointInRoute = (point: any) => ({type: 'SET_NEW_POINT_IN_ROUTE', point})

export const getRoutes = (routs: any) => async (dispatch: any) => {
   let response: any = await routsAPI.getRouts()
   if(response.status !== 200){
       console.log(`some error with response ststus ${response.status}`)
   }else{
       dispatch(setRouts(response))
   }
}

export const addRoute = (route:any) => async (getRouts: any) => {
    let response: any = await routsAPI.addRoute(route)
    if(response.status !== 200){
        console.log(`some error with response ststus ${response.status}`)
    }else{
        getRouts()
    }
}
export default routsReducer
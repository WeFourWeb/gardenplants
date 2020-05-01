import { routsAPI } from "../../API/api"

let initialstate = {
    routs: []
}

const routsReducer = (state=initialstate, action: any) => {
    switch(action.type){
        case 'SET_ROUTS': {
            return {
                 ...state, routs: action.routs
            }
        }
        default: {
            return state
        }
    }
}

const setRouts = (routs: any) => ({type: "SET_ROUTS", routs} )

export const getRouts = (routs: any) => async (dispatch: any) => {
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
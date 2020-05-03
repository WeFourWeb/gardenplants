import { routsAPI } from "../../API/api"
//{coordinates: [[-0.7022666931152344, 51.42404561602714], [-0.7403755187988281, 51.38903022234442],…],…}
// [{"orderId":23240,"postcode":"SW1A 2AA","lat":51.5035399,"lng":-0.1276952},
//  {"orderId":23239,"postcode":"SW1A 2AA","lat":51.5035399,"lng":-0.1276952},
//  {"orderId":23238,"postcode":"SW1A 2AA","lat":51.5035399,"lng":-0.1276952},
//  {"orderId":23237,"postcode":"SW1A 2AA","lat":51.5035399,"lng":-0.1276952},
//  {"orderId":23236,"postcode":"SW1A 2AA","lat":51.5035399,"lng":-0.1276952},
//  {"orderId":23235,"postcode":"SW1A 2AA","lat":51.5035399,"lng":-0.1276952},
//  {"orderId":23231,"postcode":"SW15 2SA","lat":51.458901,"lng":-0.204052},
//  {"orderId":23230,"postcode":"SW4 9JP","lat":51.455256,"lng":-0.142095},
//  {"orderId":23229,"postcode":"N20 0NB","lat":51.625786,"lng":-0.173625},
//  {"orderId":23228,"postcode":"SO16 9EF","lat":50.928949,"lng":-1.458962}]
let initialstate = {
    routes: [
        { 
            coordinates: [[-0.7022666931152344, 51.42404561602714], [-0.7403755187988281, 51.38903022234442]], 
            driver: "Stive"
          },
          { 
            coordinates: [], 
            driver: "Stive"
          },
    ],
    newRoute: { 
                coordinates: [], 
                driver: "Stive"
              },
    
}

const routsReducer = (state=initialstate, action: any) => {
    switch(action.type){
        case 'SET_ROUTS': {
            return {
                 ...state, routes: action.routes
            }
        } 
        case 'SET_NEW_POINT_IN_ROUTE': { 
            return {
                ...state,  
                newRoute: {
                    ...state.newRoute,
                    coordinates: [...state.newRoute.coordinates, action.point]
                }
            }
        }
        case 'SET_EMPTY_NEW_ROUTE': {
            return {
                ...state, newRoute:  { 
                    coordinates: [], 
                    driver: "Stive"
                  }
            }
        } 
        default: {
            return state
        }
    }
}

const setRouts = (routes: any) => ({type: "SET_ROUTS", routes} )

export const setNewPointInRoute = (point: any) => ({type: 'SET_NEW_POINT_IN_ROUTE', point})
       const setEmptyNewRoute = () => ({type: 'SET_EMPTY_NEW_ROUTE'})

export const getRoutes = (routs: any) => async (dispatch: any) => {
   let response: any = await routsAPI.getRoutes()
  
   if(response.response.status !== 200){
       console.log(`some error with response ststus ${response.status}`)
   }else{
       dispatch(setRouts(response.response.data))
   }
}

export const addNewRoute = (route:any) => async (dispatch: any) => {
    console.log(route)
    let response: any = await routsAPI.addRoute(route)
    await dispatch(setEmptyNewRoute())
    console.log(response)
    if(response.response.status !== 200){
        console.log(`some error with response ststus ${response.status}`)
    }else{
        
    }
}
export default routsReducer
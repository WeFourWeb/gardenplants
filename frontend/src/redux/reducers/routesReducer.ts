import { routsAPI } from "../../API/api"
//{coordinates: [[-0.7022666931152344, 51.42404561602714], [-0.7403755187988281, 51.38903022234442],…],…}
// -0.7392597198486328, 51.35404161431714
// -0.6226158142089844, 51.36031259607719
// -0.7067298889160156, 51.31478829079947
// -0.5864810943603516, 51.48507098210092
let initialstate = {
    routes: [
        { 
            _id: 1,
            coordinates: [[-0.7022666931152344, 51.42404561602714], [-0.7403755187988281, 51.38903022234442]], 
            driver: "Stive"
          },
          { 
            _id: 12,
            coordinates: [[-0.7392597198486328, 51.35404161431714], [-0.6226158142089844, 51.36031259607719]], 
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
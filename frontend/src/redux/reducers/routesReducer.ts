import { routsAPI } from "../../API/api"
//{coordinates: [[-0.7022666931152344, 51.42404561602714], [-0.7403755187988281, 51.38903022234442],…],…}
// -0.7392597198486328, 51.35404161431714
// -0.6226158142089844, 51.36031259607719
// -0.7067298889160156, 51.31478829079947
// -0.5864810943603516, 51.48507098210092
let initialstate = {
    routes: [
        
    ],
    newRoute: { 
                ordersId:[],
                coordinates: [], 
                deliveryman: ""
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
                    coordinates: [...state.newRoute.coordinates, action.point.coordinates],
                    ordersId: [...state.newRoute.ordersId, action.point.ordersId]
                }
            }
        }
        case 'SET_DELIVERY_NAME': {
            return {
                ...state, newRoute: { 
                    ...state.newRoute,
                    deliveryman: action.name
            }
          }
        }
        case 'SET_EMPTY_NEW_ROUTE': {
            return {
                ...state, newRoute:  { 
                    ordersId: [],
                    coordinates: [], 
                    deliveryman: ''
                  }
            }
        } 
        default: {
            return state
        }
    }
}

const setRouts = (routes: any) => ({type: "SET_ROUTS", routes} )

export const setDeliveryName = (name: any) => ({type: "SET_DELIVERY_NAME", name} )

export const setNewPointInRoute = (point: any) => ({type: 'SET_NEW_POINT_IN_ROUTE', point})
       const setEmptyNewRoute = () => ({type: 'SET_EMPTY_NEW_ROUTE'})

export const getRoutes = () => async (dispatch: any) => {
   let response: any = await routsAPI.getRoutes()
  
   if(response.response.status !== 200){
       console.log(`some error with response ststus ${response.status}`)
   }else{
       await dispatch(setRouts(response.response.data))
   }
}

export const addNewRoute = (route:any) => async (dispatch: any) => {
    
    let response: any = await routsAPI.addRoute(route)
   
    console.log(response)
    if(response.response.status !== 200){
        console.log(`some error with response ststus ${response.status}`)
    }else{
        await dispatch(setEmptyNewRoute())
        await dispatch(getRoutes())
    }
}

export const deleteRoute = (id: any) => async (dispatch: any) => {
    let response: any = await routsAPI.deleteRoute(id)
    if(response.response.status !== 200){
        console.log(`some error with response ststus ${response.status}`)
    }else{
        await dispatch(getRoutes())
    }
}
export default routsReducer
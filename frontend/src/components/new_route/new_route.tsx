import React, {useState, useEffect} from 'react'
import style from './new_route.module.css'
import { Button } from 'antd'

type NewRoute = {
    newRoute: any,
    addNewRoute: any
}
 
const NewRoute:React.FC<NewRoute> =({addNewRoute, newRoute}) => {    
 
    
  return(
    <div>
      <div className={style.new_route_title_c}>
          New route
      </div>
          
          <div  className={style.add_new_route}>
              Add new point <Button size='small' type="primary" shape="circle">+</Button>    
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Button disabled={(newRoute.coordinates.length !== 0) ? false : true} onClick={() => addNewRoute(newRoute)}type='primary' >Add route</Button>
          </div>
    </div>
  )
  }
 
export default NewRoute
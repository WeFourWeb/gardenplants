import React, {useState} from 'react'
import style from './new_route.module.css'
import { Button } from 'antd'

type NewRoute = {
    points: any,
    addNewPoint: any
}
 
const NewRoute:React.FC<NewRoute> =({points, addNewPoint}) => {     
    let [ newRout, setNewRouteMod ] = useState(false);
    let changeRouteMod = () => {
      if(newRout == false){
        setNewRouteMod(true);
      } else {
        setNewRouteMod(false);
      }
    }
  return(
    <div>
          {
            !newRout
            
            ?    
                <div  className={style.add_new_route}>
                    <h1>Add new route </h1><Button onClick={changeRouteMod} size='small' type="primary" shape="circle">+</Button>    
                </div>
            :   <div>
                <div className={style.new_route_title_c}>
                    New route
                </div>
                   
                    <div  className={style.add_new_route}>
                        Add new point <Button size='small' type="primary" shape="circle">+</Button>    
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button type='primary' >Add route</Button>
                    </div>
                </div>
          }
    </div>
  )
  }
 
export default NewRoute
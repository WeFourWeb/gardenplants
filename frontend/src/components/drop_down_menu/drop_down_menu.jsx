import React from 'react'
import { Menu } from 'antd';

const DropDownMenu = (props) => {   
  return(
    <Menu >
    <Menu.Item onClick={() => {props.setDriverName('James Petrov')}}>
      <span>James Petrov</span>  
    </Menu.Item>
    <Menu.Item onClick={() => {props.setDriverName('Richard Sapоgov')}}>
      <span>Richard Sapоgov</span> 
    </Menu.Item>
    <Menu.Item onClick={() => {props.setDriverName('Jeremy Smirnov')}}>
      <span>Jeremy Smirnov</span> 
    </Menu.Item>
  </Menu>
  )
  }
 
export default DropDownMenu


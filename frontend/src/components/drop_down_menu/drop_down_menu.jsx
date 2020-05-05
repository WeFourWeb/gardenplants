import React from 'react'
import { Menu } from 'antd';

const DropDownMenu = (props) => {   
  return(
    <Menu >
    <Menu.Item onClick={() => {props.setDriverName('James Petrov')}}>
      <span>James May</span>  
    </Menu.Item>
    <Menu.Item onClick={() => {props.setDriverName('Richard Ivanov')}}>
      <span>Richard Hammond</span> 
    </Menu.Item>
    <Menu.Item onClick={() => {props.setDriverName('Jeremy Sidorov')}}>
      <span>Jeremy Clarcson</span> 
    </Menu.Item>
  </Menu>
  )
  }
 
export default DropDownMenu


import React from 'react'
import { Button, Radio, Input, Checkbox } from 'antd'

const { Search } = Input;
export const AntdButton = (props) => {
    return (
        <div>
            <Button {...props}>{props.textbutton}</Button>
        </div>
    )
}

export const AntdCheckbox = ({input, meta, ...props}) => {
    return (
        <div>
            <Checkbox {...input} {...props} type='checkbox'/>{"remember me"}  
        </div>
    )
}

export const AntdInput = ({input, meta, ...props}) => {
    return (
        <div>
            <Input {...input} {...props}/>
        </div>
    )
}

export const AntdRadio = (props) => {
    
    return (
        <div>
        <Radio.Group {...props}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
        </Radio.Group>
        </div>
    )
}

export const InputWithButton = ({input, meta, ...props}) => {
   
    return (
        <div>
            <Search {...input} {...props} placeholder="input search text" enterButton="Send" onSearch={props.onSend} />
        </div>
    )
}
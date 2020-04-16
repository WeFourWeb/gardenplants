import React from 'react'
import { Field, reduxForm } from 'redux-form';
import style from './form.module.css'
import { AntdInput, AntdCheckbox, AntdButton} from '../../common/custom_antd/custom_antd'

const Form = (props: any) => {
    return (
        <div>
            <form  onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={AntdInput}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={AntdInput} type={"password"}/>
            </div>
            <div>
                <Field component={AntdCheckbox} name={"rememberMe"} type="checkbox"/>
                <AntdButton htmlType="submit" textbutton='Login' type='primary'/>
            </div>
        </form>
        </div>
    )
}
const LoginForm = reduxForm({form: 'login'})(Form)
export default LoginForm
 
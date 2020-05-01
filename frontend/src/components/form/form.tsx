import React from 'react'
import { Field, reduxForm } from 'redux-form';
import style from './form.module.css';

import { AntdInput, AntdCheckbox, AntdButton} from '../custom_antd/custom_antd'

const Form = (props: any) => {
    return (
        <div className={style.main_login_form} >
            <img src="logo.svg" alt="Garden Plants" className={style.logo_img}/>
            <form  onSubmit={props.handleSubmit}  >
                
            <div className={style.input}>
                <Field placeholder={"Email"} name={"email"} component={AntdInput} />
            </div>
            <div className={style.input}>
                <Field placeholder={"Password"} name={"password"} component={AntdInput} type={"password"}/>
            </div>
            <div className={style.check_box}>
                <Field component={AntdCheckbox} name={"rememberMe"} type="checkbox" className={style.main_input}/>
            </div>
            <div className={style.main_button}>
                <AntdButton htmlType="submit" textbutton='Login' type='primary' className={style.button}/>
            </div>
        </form>
        </div>
    )
}
const LoginForm = reduxForm({form: 'login'})(Form)
export default LoginForm;
 
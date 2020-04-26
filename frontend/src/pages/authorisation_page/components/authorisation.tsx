import React from 'react'
import style from './authorisation.module.css'
import { Row, Col, Layout } from 'antd';
import LoginForm from '../../../components/form/form';
import { Redirect } from 'react-router-dom';

const AuthorisationPage = (props:any) => {
  if(props.authData){
    return (
      <Redirect to='/main_page'/>
    )
  }
    return (
        <div className={style.content_wrapper} >
            <Layout >
            <Row>
              <Col span={1}></Col>
              <Col className={style.login_form_wrapper}span={6} > 
              
                <LoginForm onSubmit={props.getAuthResponse}/>
             
              </Col>
              <Col span={1}></Col>
              <Col span={16}>
                <div className={style.background}></div>
              </Col>
            </Row>
            </Layout>
        </div>
    )
}

export default AuthorisationPage




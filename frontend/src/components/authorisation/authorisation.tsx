import React from 'react'
import style from './authorisation.module.css'
import { Row, Col, Layout } from 'antd';
import LoginForm from './form/form';
import { connect } from 'react-redux';
import { getAuthResponse } from '../../redux/authReducer';
import { NavLink, Redirect } from 'react-router-dom';

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

let mapStateToProps = (state:any) => ({
  authData: state.authorisationData.userData.logined
})


export default connect(mapStateToProps, {getAuthResponse})(AuthorisationPage)






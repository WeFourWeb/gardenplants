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
        <div className={style.content_wrapper}>
            <Layout>
            <Row>
              <Col className={style.login_form_wrapper}span={8}> 
                <LoginForm onSubmit={props.getAuthResponse}/>
              </Col>
              <Col span={16}/>
            </Row>
            </Layout>
        </div>
    )cd
}

let mapStateToProps = (state:any) => ({
  authData: state.authorisationData.userData.logined
})



export default connect(mapStateToProps, {getAuthResponse})(AuthorisationPage)






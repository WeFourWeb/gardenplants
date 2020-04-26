import AuthorisationPage from '../components/authorisation'
import { connect } from 'react-redux';
import { getAuthResponse } from '../../../redux/reducers/authReducer';

let mapStateToProps = (state:any) => ({
    authData: state.authorisationData.userData.logined
  })
  
  
  export default connect(mapStateToProps, {getAuthResponse})(AuthorisationPage)
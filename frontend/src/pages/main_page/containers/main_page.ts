import { connect } from 'react-redux';
import MainPage from '../components/main_page'
import { fetchAuthData } from '../../../redux/selectors';



const mapStateToProps = (state: any) => ({
    authData: fetchAuthData(state)
  })
  
  export default connect(mapStateToProps, {})(MainPage)
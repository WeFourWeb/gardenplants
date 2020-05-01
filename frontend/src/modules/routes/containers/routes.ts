import { default as Routes } from '../components/routes'
import { connect } from 'react-redux'
import fetchRoutes from '../../../redux/selectors/routesSelector'

const mapDispatchToProps = (state: any) =>({
    routes: fetchRoutes(state)
})

export default connect(mapDispatchToProps, {})(Routes)
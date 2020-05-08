import { default as OrdersBar } from '../components/orders_bar'
import { connect } from 'react-redux'
import { fetchRoutes } from '../../../redux/selectors/routesSelector'

const mapDispatchToProps = (state: any) =>({
    routes: fetchRoutes(state)
})

export default connect(mapDispatchToProps, {})(OrdersBar)
import { addNewRoute, setNewPointInRoute, setDeliveryName, deleteRoute } from './../../../redux/reducers/routesReducer';
import { getRoutes } from './../../../redux/reducers/routesReducer';
import { default as Logistisc } from '../components/logistics'
import { getOrders } from '../../../redux/reducers/ordersReducer'
import { connect } from 'react-redux'
import { fetchOrders, fetchRoutes, fetchNewRoute } from '../../../redux/selectors'


let mapStateToProps = (state: any) =>({
    orders: fetchOrders(state),
    routes: fetchRoutes(state),
    newRoute: fetchNewRoute(state)
})

export default connect(mapStateToProps, {getOrders, getRoutes, addNewRoute, setNewPointInRoute, setDeliveryName, deleteRoute })(Logistisc)
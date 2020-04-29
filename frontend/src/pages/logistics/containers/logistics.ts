import { default as Logistisc } from '../components/logistics'
import { getOrders } from '../../../redux/reducers/ordersReducer'
import { connect } from 'react-redux'
import { fetchOrders } from '../../../redux/selectors'

let mapStateToProps = (state: any) =>({
    orders: fetchOrders(state)
})

export default connect(mapStateToProps, {getOrders})(Logistisc)
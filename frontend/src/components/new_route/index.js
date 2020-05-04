import  {default as NewRouteContainer} from './new_route'
import { reduxForm } from 'redux-form'


const NewRoute = reduxForm({
    form: 'dialogAddMessageForm'
})(NewRouteContainer)

export default NewRoute
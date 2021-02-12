import Header from '../components/Header';
import {connect} from 'react-redux'
import {addToCart} from '../service/actions/actions'

const mapStateToProps=state=>({
    data:state.cardItems
})



export default connect(mapStateToProps)(Header)
//export default Home;
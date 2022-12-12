import '../styles/Header.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return ( 
        <div className="header">
            <h1>Product List</h1>
            <div>
                <NavLink to="/addproduct"><button>ADD</button></NavLink>
                <button id='delete-product-btn' onClick={props.delete}>MASS DELETE</button>
            </div>
        </div>
     );
}
 
export default Header;
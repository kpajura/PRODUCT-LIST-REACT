import '../styles/Header.css'
import { NavLink } from 'react-router-dom';

const HeaderAddProduct = (props) => {
    return ( 
        <div className="header">
            <h1>Product List</h1>
            <div>
            <NavLink to="/"><button onClick={props.add}>SAVE</button></NavLink>
            <NavLink to="/"><button onClick={props.cancel}>CANCEL</button></NavLink>

            </div>
        </div>
     );
}
 
export default HeaderAddProduct;
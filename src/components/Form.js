import '../styles/Header.css'
import '../styles/Form.css'
import OptionSelected from './OptionSelected';
// import { NavLink } from 'react-router-dom';


const Form = (props) => {
        return ( 
            <main>
                <form id='product-form'>
                    <label htmlFor="sku">SKU</label>
                    <input type="text" id='sku' name='sku' value={props.object.sku} onChange={props.change}/>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' value={props.object.name} onChange={props.change}/>
                    <label htmlFor="price">Price($)</label>
                    <input type="number" id='price' name='price' value={props.object.price} onChange={props.change}/>
                    <label htmlFor="productType">Type Switcher</label>
                    <select name="productType" id="productType" onChange={props.change}>
                        <option value='default'>---------</option>
                        <option value="dvd">DVD</option>
                        <option value="book">Book</option>
                        <option value="furniture">Furniture</option>
                    </select>

                    <OptionSelected object = {props.object} change={props.change}/>
                    {/* <NavLink to="/"><button onClick={props.add}>SAVE</button></NavLink> */}

    
                </form>
            </main>
         );
    
}
 
export default Form;
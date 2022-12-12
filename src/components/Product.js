import React from 'react';
import '../styles/Product.css'

const Product = (props) => {
    return ( 
        <div className='product'>
            <input type="checkbox" className='delete-checkbox' checked={props.object.checked} onChange={()=>props.change(props.object.id)}/>
            <p>{props.object.sku}</p>
            <p>{props.object.name}</p>
            <p>{props.object.price}$</p>
            <p>{props.object.weight ? props.object.weight : (props.object.size ? props.object.size : props.object.dimention)}</p>

        </div>
     );
}
 
export default Product;
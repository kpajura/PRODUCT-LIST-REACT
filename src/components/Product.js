import React from 'react';
import '../styles/Product.css'

const Product = (props) => {
    return ( 
        <div className='product'>
            <input type="checkbox" className='delete-checkbox' checked={props.object.checked} onChange={()=>props.change(props.object.id)}/>
            <p>{props.object.sku}</p>
            <p>{props.object.name}</p>
            <p>{props.object.price}$</p>
            <p>{props.object.category === 'book' ? `${props.object.weight}KG (kilograms)` : (props.object.category === 'dvd' ? `${props.object.size}MB (megabite)` : `W${props.object.width}xH${props.object.height}xL${props.object.length} (dimnetions WxHxL)`)}</p>

        </div>
     );
}
 
export default Product;
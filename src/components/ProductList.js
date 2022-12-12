import '../styles/Page.css'
import Product from './Product';



const ProductList = (props) => {
    
        let objectsList = [...props.objects]
        objectsList = objectsList.map(object => (
            <Product key={object.id} object={object} change={props.checkboxClick}/>
        ))
        return (
            <main className='list'>{objectsList}</main>
        );
    }

 
export default ProductList;
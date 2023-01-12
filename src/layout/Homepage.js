import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';


const Homepage = (props) => {
  
    return (
      
        <div className='App'>
          <Header delete = {props.delete}/>
          <ProductList objects={props.objects} checkboxClick = {props.change}/>
          <Footer/>
        </div>

    );
  
}
 
export default Homepage;

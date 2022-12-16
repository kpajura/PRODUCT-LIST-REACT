import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';


const Homepage = (props) => {
  // state = {
  //   objects: [
  //       {
  //           id:1, sku:'JV2255', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
  //       },
  //       {
  //           id:2, sku:'JV2256', price: 15, name: 'GTA5', category: 'dvd', dimention: null, weight: null, size: 'Size: 1MB', checked: false
  //       },
  //       {
  //           id:3, sku:'JV2257', price: 80, name: 'Table', category: 'furniture', dimention: 'Dimention: 120x120x90', weight: null, size: null, checked: false
  //       },
  //       {
  //           id:4, sku:'JV2258', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
  //       },
  //       {
  //           id:5, sku:'JV2258', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
  //       },
  //       {
  //           id:6, sku:'JV2260', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
  //       },
  //       {
  //           id:7, sku:'JV2261', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
  //       },
  //       {
  //           id:8, sku:'JV2262', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
  //       },
  //       {
  //           id:9, sku:'JV2263', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
  //       },
        
        
    
  //   ], 
  // } 

  // handleCheckboxChange = (id) => {
  //   console.log('checkbox checked')
  //   let objects = [...this.state.objects]
  //   objects = objects.map(object => {
  //       if(object.id===id){
  //           object.checked = !object.checked;
  //       }
  //       return object
  //   })
  //   this.setState({
  //       objects
  //   })
  // }

  // handleDeleteButton = () => {
  //   let objects = [...this.state.objects]
  //   objects = objects.filter(object => !object.checked)
  //   this.setState({
  //     objects
  //   })
  // }



  
    return (
      
        <div className='App'>
          <Header delete = {props.delete}/>
          <ProductList objects={props.objects} checkboxClick = {props.change}/>
          <Footer/>
        </div>

    );
  
}
 
export default Homepage;

import HeaderAddProduct from '../components/HeaderAddProduct';
import Footer from '../components/Footer';
import Form from '../components/Form'


const Addpage = (props) => {

    return (
      
        <div className='App'>
          <HeaderAddProduct add={props.save} cancel={props.cancel}/>
          <Form object = {props.object} change={props.inputChange} error={props.error}/>
          <Footer/>
        </div>
 
    );
  
}
 
export default Addpage;
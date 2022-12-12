import React, { Component } from 'react';
import HeaderAddProduct from '../components/HeaderAddProduct';
import Footer from '../components/Footer';
import Form from '../components/Form'
import axios from 'axios';


class Addpage extends Component {
  state = { 
    object: {
        id:'', 
        sku: '',
        name: '',
        price: '',
        category: '',
        weight: '',
        width: '',
        length:'',
        height:'',
        size: '',
        checked: false
    }
 }  

  handleAddButton = () => {
    console.log('add')
    const params = [this.state.object];
    axios.post('http://localhost:8888/api/index.php', JSON.stringify(params))


  }

  handleCancelButton = () => {
    console.log('cancel')
  }

  handleInputChange = (e) => {
    const object = this.state.object
        const event = e.target.name
        console.log(event, e.target.value)

        if(event === 'sku'){
            object.sku = e.target.value
        }
        else if(event === 'name'){
            object.name = e.target.value
        }
        else if(event === 'price'){
            object.price = e.target.value
        }
        else if(event === 'productType'){
            object.category = e.target.value
            if(object.category === 'default'){
              object.category = ''
            }
            object.size = '';
            object.width = '';
            object.length = '';
            object.height = '';
            object.weight = '';
        }
        else if(event === 'weight'){
          object.weight = e.target.value
        }
        else if(event === 'size'){
          object.size = e.target.value
        }
        else if(event === 'width'){
          object.width = e.target.value
        }
        else if(event === 'length'){
          object.length = e.target.value
        }
        else if(event === 'height'){
          object.height = e.target.value
        }
  

        this.setState({
            object
        })
  }


  render() { 
    return (
      
        <div className='App'>
          <HeaderAddProduct add={this.handleAddButton} cancel={this.handleCancelButton}/>
          <Form object = {this.state.object} change={this.handleInputChange}/>
          <Footer/>
        </div>

    );
  }
}
 
export default Addpage;
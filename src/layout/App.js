import React, { Component } from 'react';
import '../styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage';
import Addpage from './Addpage';
import axios from 'axios';


class App extends Component {
  state = {
    // objects: [
    //     {
    //         id:1, sku:'JV2255', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
    //     },
    //     {
    //         id:2, sku:'JV2256', price: 15, name: 'GTA5', category: 'dvd', dimention: null, weight: null, size: 'Size: 1MB', checked: false
    //     },
    //     {
    //         id:3, sku:'JV2257', price: 80, name: 'Table', category: 'furniture', dimention: 'Dimention: 120x120x90', weight: null, size: null, checked: false
    //     },
    //     {
    //         id:4, sku:'JV2258', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
    //     },
    //     {
    //         id:5, sku:'JV2259', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
    //     },
    //     {
    //         id:6, sku:'JV2260', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
    //     },
    //     {
    //         id:7, sku:'JV2261', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
    //     },
    //     {
    //         id:8, sku:'JV2262', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
    //     },
    //     {
    //         id:9, sku:'JV2263', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
    //     },
        
        
    
    // ], 
    object: 
        {
            id:'', sku:'', price: '', name: '', category: '', width: 0, height: 0, length: 0,  weight: 0, size: 0, checked: false
        },
    objects: [],
    errorMessage: ''
    
  } 

  componentDidMount(){
    axios.get('http://localhost:3306/api/index.php')
    .then(response => response.data)
    .then(data=>{
      this.setState({
        objects: data.map(element => {
          element.checked = false;
          return element
        })
      })
      }
    )
  }

  updateFunction = () => {
    axios.get('http://localhost:3306/api/index.php')
    .then(response => response.data)
    .then(data=>{
      this.setState({
        objects: data.map(element => {
          element.checked = false;
          return element
        })
      })
      }
    )
  }
  
  handleCheckboxChange = (id) => {
    let objects = [...this.state.objects]
    objects = objects.map(object => {
        if(object.id===id){
            object.checked = !object.checked;
        }
        return object
    })
    this.setState({
        objects
    })
  }

  handleDeleteButton = () => {
    let objects = [...this.state.objects]
    let objectsChecked = objects.filter(object => object.checked)

    if(objectsChecked.length>0){
    
      objectsChecked.forEach(object => {
        let id = object.id;

        axios({
              method: 'post',
              url: 'http://localhost:3306/api/index.php/?delete=' + id
          })
          .then(function (response) {
              //handle success
              console.log(response)
          })
          .catch(function (response) {
              //handle error
              console.log(response)
          });
      })
      this.setState({
        objects: objects.filter(object => !object.checked)
      })
    }
    
    
    
  }

  handleCancelButton = () => {
    return null
  }

  handleInputChange = (e) => {
   
    const object = this.state.object
    const event = e.target.name

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
      object,
      errorMessage: ''
    })
  }

  validateFunction = () => {
    let isValidated = true;
    const {sku, name, price, category, width, height, length, weight, size} = this.state.object;
    if(!sku || !name || !price || !category || (category === 'dvd' && !size) || (category === 'book' && !weight) || (category === 'furniture' && (!width || !height || !length ))){
      isValidated=false;
    }

    if(!isValidated){
      this.setState({
        errorMessage: 'Please, submit required data'
      })
    }

    return isValidated; 
  }
  
  handleAddButton = (e) => {    
    const index = this.state.objects.map((item) => Number(item.id))
    const isValidated = this.validateFunction();

    if(isValidated){
      const object = this.state.object;
      const objects = [...this.state.objects]
      object.id = index[index.length-1]+1; 
      objects.push(object)

      this.setState({
        objects
      })

      let formData = new FormData();
      formData.append('sku', this.state.object.sku)
      formData.append('price', Number(this.state.object.price))
      formData.append('name', this.state.object.name)
      formData.append('category', this.state.object.category)
      formData.append('size', Number(this.state.object.size))
      formData.append('weight', Number(this.state.object.weight))
      formData.append('width', Number(this.state.object.width))
      formData.append('length', Number(this.state.object.length))
      formData.append('height', Number(this.state.object.height))
      formData.append('checked', Number(this.state.object.checked))


 
      axios.post('http://localhost:3306/api/index.php/',formData)
      .then(function (response) {
          //handle success
          console.log(response)
          if(response.status === 200) {
            console.log("Product added successfully.");
          }
      })
      .catch(function (response) {
          console.log(response)
      });

    }
    else{
      e.preventDefault()
    }

  }

  render() { 
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage objects={this.state.objects} change={this.handleCheckboxChange} delete={this.handleDeleteButton}/>}></Route>
          <Route path='addproduct' element={<Addpage object={this.state.object} inputChange={this.handleInputChange} cancel={this.handleCancelButton} save={this.handleAddButton} error={this.state.errorMessage}/>}></Route>
        </Routes>
      </BrowserRouter>

    );
  }
}
 
export default App;
